import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import LogInView from '../components/logForm/LogInView'
import { UserContext } from '../context/UserProvider'


const Login = () => {

    const {user} = useContext (UserContext)

    return (
        <div className='container'>
            { 
            user.id ?
            <Navigate to="/" />
            :
            <LogInView />
            }
        </div>
    )
}

export default Login