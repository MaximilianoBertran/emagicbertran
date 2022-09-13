import React, { useState } from 'react'
import { createContext } from 'react'
import { Navigate } from 'react-router-dom'
import db from '../services'
import { collection, addDoc } from 'firebase/firestore'

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

    const register = async (form) => {
        try {
            const col = collection(db, "users")
            const user = await addDoc(col, form)
            if(user.id){
                setUser({id: user.id, ...form})
            }             
        } catch (error) {
            console.log(error)
        }
    }

    const validateUsername = async (username) => {
        const docSnap = await db.collection('users').where('username', '==', username).get();
        if(docSnap.docs.length > 0){
            return false
        } else {
            return true
        }
    }
    
    return (
        <UserContext.Provider value={{
            user,
            login,
            logout,
            register,
            validateUsername
        }}>
        { children }
        </UserContext.Provider>
    )
}

export default UserProvider