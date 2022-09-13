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
            console.error(error)
        }
    }

    const validateFields = (name, value, form) => {
        let message = null
        switch (name) {
        case "username":
            if (value.length < 3) {
            message = `The ${name} must have at least 3 characters`
            }
            break;
        case "password":
            if (!value.match(/^[A-Za-z]\w{7,14}$/)) {
            message = `Password`
            }
            break;
        case "confirmPassword":
            if (value !== form.password) {
            message = `The password and its confirmation must be the same`
            }
            break;
        case "email":
            if (!value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            message = `The ${name} must have at least 3 characters`
            }
            break;
        case "phone":
            if (!value.match(/^[+]?[(]?[0-9]{3,4}[)]?[-\s.]?[0-9]{3,4}[-\s.]?[0-9]{4,6}$/)) {
            message = `The phone number is not in the correct format`
            }
            break;
        default:
            break;
        }
        return message
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
            validateUsername,
            validateFields
        }}>
        { children }
        </UserContext.Provider>
    )
}

export default UserProvider