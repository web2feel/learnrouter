import React from 'react'
import useAuth from "../hooks/useAuth"
import {Navigate} from "react-router-dom"
function Protected({children}) {
    const {authed} = useAuth()
    return (
        <div>
            {authed ? children : <Navigate to="/login" />}
        </div>
    )
}

export default Protected
