import React, { useState } from 'react'
import axios from "axios";
import {useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate('')

    axios.defaults.withCredentials=true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/auth/forgot-password',{email})
            .then(res => {
                if (res.data.status) {
                    alert('Check your email for reset password link')
                    navigate('/login')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
                <div className='w-50 bg-white rounded p-4'>
                    <form onSubmit={handleSubmit}>
                        <h2>Forgot Password</h2>
                        <div className='mt-2'>
                            <label for='email' className='mb-2'>Email</label>
                            <input type='email' placeholder='Enter your email' name='email' className='form-control rounded-0'
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <button type='submit' className='btn btn-success mt-2 rounded-0 w-100'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
