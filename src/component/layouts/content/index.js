import React, { useState } from "react";
import DataTable from "./table";

function PageContent(props) {

    const items = ['❓', '♣️', '♦️', '♥️', '♠️']
    const { balance, setbalance, isPlay, CloseModal } = props;
    const [Box1, setBox1] = useState(0)
    const [Box2, setBox2] = useState(0)
    const [Box3, setBox3] = useState(0)
    const [Play, setPlay] = useState(false)
    const [reward, setReward] = useState(0)
    const Playgame = () => {

        let remainingBalance = balance, SpinBox1, SpinBox2, SpinBox3;
        if (remainingBalance >= 2) {
            remainingBalance = remainingBalance - 2
            do { SpinBox1 = Math.floor((Math.random() * 10)) % 5 } while (SpinBox1 === 0)
            do { SpinBox2 = Math.floor((Math.random() * 10)) % 5 } while (SpinBox2 === 0)
            do { SpinBox3 = Math.floor((Math.random() * 10)) % 5 } while (SpinBox3 === 0)

            if (SpinBox1 === SpinBox2 && SpinBox2 === SpinBox3 && SpinBox1 === 4) {
                remainingBalance = remainingBalance + 5
                setReward(5)
            }
            else if (SpinBox1 === SpinBox2 && SpinBox2 === SpinBox3) {
                remainingBalance = remainingBalance + 2
                setReward(2)
            } else if (SpinBox1 === SpinBox3 || SpinBox1 === SpinBox2 || SpinBox3 === SpinBox2) {
                remainingBalance = remainingBalance + 0.5
                setReward(0.5)
            } else {
                setReward(-2)
            }
        }

        setbalance(remainingBalance)
        if (remainingBalance >= 2) {
            setBox1(SpinBox1)
            setBox2(SpinBox2)
            setBox3(SpinBox3)
        }
        const data = JSON.parse(localStorage.getItem('rows'))
        data.unshift({ id: `${(Math.random() * 100).toFixed(0)}`, slot1: items[SpinBox1], slot2: items[SpinBox2], slot3: items[SpinBox3], time: new Date() })
        localStorage.setItem('rows', JSON.stringify(data))

    }

    const Debug = () => {
        setBox1(4)
        setBox2(4)
        setBox3(4)
        const b = balance
        setbalance(b + 5)
        setReward(5)
    }

    return (
        <>
            <DataTable />
            {isPlay ?
                <div className="Play-Game">
                    <div id="app">
                        <p style={{color: 'white'}}>Available Balance: {balance.toFixed(2) || 0.00}</p>
                        <div className="doors">
                            <div className="door">
                                <div className="boxes position-relative">
                                    <div style={{ top: `-${Box1 * 110}px` }} className={`box ${Play && "animation"}`}>
                                        <span>❓</span>
                                        <span>♣️</span>
                                        <span>♦️</span>
                                        <span>♥️</span>
                                        <span>♠️</span>
                                    </div>
                                </div>
                            </div>
                            <div className="door">
                                <div className="boxes position-relative">
                                    <div style={{ top: `-${Box2 * 110}px` }} className={`box ${Play && "animation2"}`}>
                                        <span>❓</span>
                                        <span>♣️</span>
                                        <span>♦️</span>
                                        <span>♥️</span>
                                        <span>♠️</span>
                                    </div>
                                </div>
                            </div>
                            <div className="door">
                                <div className="boxes position-relative">
                                    <div style={{ top: `-${Box3 * 110}px` }} className={`box ${Play && "animation3"}`}>
                                        <span>❓</span>
                                        <span>♣️</span>
                                        <span>♦️</span>
                                        <span>♥️</span>
                                        <span>♠️</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttons">
                            <button id="spinner" onClick={() => {
                                setBox1(0)
                                setBox2(0)
                                setBox3(0)
                                setPlay(true)
                                setTimeout(() => {
                                    setPlay(false)
                                    Playgame()
                                }, 2000);

                            }}>Play</button>
                            <button id="spinner" onClick={() => {
                                setBox1(0)
                                setBox2(0)
                                setBox3(0)
                                setPlay(true)
                                setTimeout(() => {
                                    setPlay(false)
                                    Debug()
                                }, 2000);
                            }}>Debug</button>
                            <button id="reseter" onClick={() => { CloseModal(false) }}>Close</button>
                        </div>
                        <div className="result">
                            {(Box1 === Box2 && Box2 === Box3 && Box1 !== 0) ? `You Win($ ${reward})` : ((Box1 === Box3 || Box1 === Box2 || Box3 === Box2) && Box1 !== 0) ? `You Almost Win($ ${reward})` : Box1 !== 0 && `You Lost ($ ${reward})`}
                        </div>

                    </div>
                </div> : ''
            }

        </>
    );
}

export default PageContent;
