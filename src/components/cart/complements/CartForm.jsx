import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../context/GlobalProvider'
import { UserContext } from '../../../context/UserProvider'
import '../css/cart.css'

const CartForm = (props) => {

    const {clearCart} = useContext(GlobalContext)
    const {user, validateFields, validateUsername} = useContext(UserContext)
    const [error, setError ] = useState({
        username: null,
        email: null,
        phone: null
      })
    const [buyer, setBuyer] = useState({
        username: user.username ?? "",
        email: user.email ?? "",
        phone: user.phone ?? ""   
    })

    const onSubmit = async (e) => {
        e.preventDefault()
        if(validateError){
            let valid = await validateUsername(buyer.username)
            if(!valid){
                props.setCartForm({ ...CartForm, buyer: buyer})
                props.setIsOpenPayment(true)
            } else {
                setError({...error, username: "The username not exist." })
            }
        }
    }

    const validateError = () => {
        for (let clave in error){
          if(error[clave]){
            return false
          }
        }
        return true
    }
  
    const handleChange = (e) => {
        const { name, value } = e.target
        validate(name, value)
        setBuyer( { ...buyer, [name]: value } )
    }

    const validate = (name, value) => {
        setError({...error, [name]: validateFields(name, value, buyer) })
    }

    return (
        <div className='mb-4'>
            <h3>User information</h3>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        className={ `form-control ${error.username && "is-invalid"}` }
                        autoComplete="false"
                        type="text"
                        name="username"
                        value={ buyer.username }
                        placeholder='Username' 
                        onChange={ (e) => handleChange(e) }
                    />
                    { error.username && 
                        <h6 className='form-text text-danger'> {error.username} </h6>
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input
                        className='form-control'
                        type="email"
                        name="email"
                        value={ buyer.email }
                        placeholder='example@example.com' 
                        onChange={ (e) => handleChange(e) }
                    />
                    { error.email && 
                        <h6 className='form-text text-danger'> {error.email} </h6>
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        className='form-control'
                        type="text"
                        name="phone"
                        value={ buyer.phone }
                        placeholder='+5411-5555-4444' 
                        onChange={ (e) => handleChange(e) }
                    />
                    { error.phone && 
                        <h6 className='form-text text-danger'> {error.phone} </h6>
                    }
                </div>
                <div className='text-center'>
                    <button type="submit" className="btn btn-primary mx-1" style={{ width: "100px"}}>Buy</button>
                    <Link onClick={ clearCart } to="/market" className="btn btn-danger mx-1" style={{ width: "100px"}}>Clear</Link>
                </div>
            </form>
        </div>
    )
}

export default CartForm