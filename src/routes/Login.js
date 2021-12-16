import React from 'react'
import useAuth from "../hooks/useAuth"
import {useNavigate} from "react-router-dom"
function Login() {
    const {login} = useAuth()
    const navigate = useNavigate()
    const loginHandler = () => {
        login()
        .then(navigate('/profile',{replace:true}))
    }
    return (
        <div className='text-center'>
            
            <h2 className='text-2xl mb-6'>Please click the Login button to authenticate</h2>
            <button 
            onClick={loginHandler}
            className='border py-2 px-4 bg-purple-500 text-white rounded cursor-pointer'>Login</button>

        </div>
    )
}

export default Login
