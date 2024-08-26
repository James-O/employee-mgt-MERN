import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate('')

    axios.defaults.withCredentials=true;
    const handleSubmit = (e) => {
        e.preventDefault()
        // axios.post('http://localhost:8082/auth/login',{email, password },{withCredentials:true,headers: {
        //     'Access-Control-Allow-Origin': '*', 
        //     'Content-Type': 'application/json'
        // }})
        axios.post('http://localhost:8082/auth/login',{email, password })
            .then(res => {
                if (res.data.status) {  
                    navigate('/')
                }

            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
                <div className='w-50 bg-white rounded p-4'>
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className='mt-2'>
                            <label for='email' className='mb-2'>Email</label>
                            <input type='email' placeholder='Enter your email' name='email' className='form-control rounded-0'
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='mt-2'>
                            <label for='password' className='mb-2'>Password</label>
                            <input type='password' placeholder='************' name='password' className='form-control rounded-0'
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type='submit' className='btn btn-success mt-2 rounded-0 w-100'>Login</button>
                        <Link to={"/forgot-password"}>Forgot Password?</Link>
                        <p>Don't have an account?</p>
                        <Link to={'/signup'} type='submit' className='btn btn-default border w-100 bg-light text-decoration-none mt-2 rounded-0 w-100'>Signup</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
