import React, { useState } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const { token } = useParams()
    const navigate = useNavigate('')

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8082/auth/reset-password/' + token, { password })
            .then(res => {
                if (res.data.status) {
                    //alert('password reseted')
                    navigate('/login')
                }
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
                <div className='w-50 bg-white rounded p-4'>
                    <form onSubmit={handleSubmit}>
                        <h2>New Password</h2>
                        <div className='mt-2'>
                            <label for='password' className='mb-2'>Password</label>
                            <input type='password' placeholder='**********' name='password' className='form-control rounded-0'
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <button type='submit' className='btn btn-success mt-2 rounded-0 w-100'>Reset</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
