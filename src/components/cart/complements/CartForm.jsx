import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../context/GlobalProvider'
import '../css/cart.css'

const CartForm = (props) => {

    const {clearCart} = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault()
        props.setIsOpenPayment(true)
    }
  
    const handleChange = (e) => {
        const { name, value } = e.taget
        console.log("nombre " + name + "value " +value)
    }


    return (
        <div className='mb-4'>
            <h3>User information</h3>
            <form onSubmit={(e) => onSubmit(e)}>
                <input
                    className='form-control mb-3'
                    type="text"
                    name="username"
                    value=""
                    placeholder='Username' 
                    onChange={ (e) => handleChange(e) }
                />
                <input
                    className='form-control mb-3'
                    type="email"
                    name="email"
                    value=""
                    placeholder='email example@example.com' 
                    onChange={ (e) => handleChange(e) }
                />
                <input
                    className='form-control mb-3'
                    type="text"
                    name="phone"
                    value=""
                    placeholder='+54-11-5555-4444' 
                    onChange={ (e) => handleChange(e) }
                />
                <div className='text-center'>
                    <button type="submit" className="btn btn-primary mx-1" style={{ width: "100px"}}>Buy</button>
                    <Link onClick={ clearCart } to="/market" className="btn btn-danger mx-1" style={{ width: "100px"}}>Clear</Link>
                </div>
            </form>
            
        </div>
    )
}

export default CartForm