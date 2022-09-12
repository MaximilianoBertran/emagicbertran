import React, { useState } from 'react'
import { createContext } from 'react'
import { Navigate } from 'react-router-dom'
import db from '../services'

export const UserContext = createContext()

const UserProvider = ({children}) => {

    const [ user, setUser ] = useState({})

    const login = async (username, password) => {
        if (!user.id ) {
            const docSnap = await db.collection('users').where('username', '==', username).where('password', '==', password).get();
            if(docSnap.docs.length > 0){
                setUser({ id: docSnap.docs[0].id, ...docSnap.docs[0].data()})
                return true
            } else {
                return false
            }
        }
    }

    const logout = () => {
        setUser({})
        return <Navigate to="/home" />
    }

    const register = () => {

    }
    
    return (
        <UserContext.Provider value={{
            user,
            login,
            logout,
            register
        }}>
        { children }
        </UserContext.Provider>
    )
}

export default UserProvider