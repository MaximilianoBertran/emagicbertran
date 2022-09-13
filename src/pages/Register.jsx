import React, { useContext } from 'react'
import RegisterView from '../components/logForm/RegisterView'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Register = () => {

    const {user} = useContext (UserContext)

    return (
        <div className='container'>
            { 
            user.id ?
            <Navigate to="/" />
            :
            <RegisterView />
            }
        </div>
    )
}

export default Register