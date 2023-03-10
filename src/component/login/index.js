import React, { useEffect, useState } from 'react'

function LoginModal(props) {
    const { setloginModal } = props;
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const LogIn = () => {
        localStorage.setItem('userName', JSON.stringify(name));
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('isLogin', 'true')
    }


    return (
        <div className='loginModal'>
            <div class="container bg-light py-5 w-75">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <h2>Login</h2>
                        <form>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="name" class="form-control" id="name" required onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" required onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" required />
                            </div>
                            <button type="submit" onClick={() => {
                                LogIn()
                            }} class="btn btn-primary">Login</button>
                            <button onClick={() => {
                                setloginModal(false)
                            }} class="btn btn-primary">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default LoginModal
