import React, { useEffect, useState } from 'react'
import LoginModal from '../login';
import PageContent from './content'
import Footer from './footer'
import Header from './header'

function MainLayout() {
    const [balance, setbalance] = useState(9.99);
    const [isPlay, setIsPlay] = useState(false);
    const [name, setName] = useState('Guest');
    const [loginModal, setloginModal] = useState(false);
    let User = {
        name: 'Guest',
        email: ''
    }

    const rows = localStorage.getItem('rows')
    if (rows === null) {
        localStorage.setItem('rows', '[]')
    }
    useEffect(() => {
        localStorage.setItem('balance', JSON.stringify(balance.toFixed(2)));
        const items = JSON.parse(localStorage.getItem('balance'));
        setbalance(parseFloat(items));
    }, [balance])
    useEffect(() => {
        const name = JSON.parse(localStorage.getItem('userName'));
        setName(name)
    })

    return (
        <>
            <div className='layout-container'>
                <Header
                    balance={balance}
                    name={name}
                    setloginModal={setloginModal}
                    setIsPlay={setIsPlay}
                />
                <div className='main-content'>
                    <PageContent
                        balance={balance}
                        setbalance={setbalance}
                        isPlay={isPlay}
                        CloseModal={setIsPlay}
                    />
                </div>
                <Footer />
            </div>
            {
                loginModal && <LoginModal setloginModal={setloginModal} />
            }
        </>
    )
}

export default MainLayout
