import Dropdown from 'react-bootstrap/Dropdown';

function Header(props) {
    const { balance, name, setloginModal, setIsPlay } = props;

    const isLogin = localStorage.getItem('isLogin')
    const LogOut = () => {
        localStorage.clear()
        window.location.reload(false);
    }
    return (
        <div className='App-header'>
            <div>
                Muhammad Bilal
            </div>
            <div className="d-flex align-items-center justify-content-between gap-3">
                <button className="btn btn-success" onClick={() => {
                    setIsPlay(true)
                }}
                >Play game</button>
                <span className="text-light">Remaining Balance{` $ ${balance}`}</span>
                {
                    isLogin === 'true' ?
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">👤</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">{name}</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={() => {
                                    LogOut()
                                }}>Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> :
                        <button className="btn btn-success" onClick={() => {
                            setloginModal(true)
                        }}
                        >Login</button>


                }
            </div>
        </div>
    )
}

export default Header
