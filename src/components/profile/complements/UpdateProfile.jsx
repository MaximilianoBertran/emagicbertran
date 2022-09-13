import React, { useContext, useState } from 'react'
import { UserContext } from '../../../context/UserProvider';

const UpdateProfile = () => {
    const { user, updateData, validateFields } = useContext(UserContext)
    const [error, setError ] = useState({
        email: null,
        phone: null
    })
    const [ form, setForm ] = useState({
        email: user.email,
        phone: user.phone
    })

    const onSubmit = async (e) => {
        e.preventDefault()
        if (validateError) {
            updateData(form)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        validate(name, value)
        setForm( { ...form, [name]: value } )
    }

  const validateError = () => {
    for (let clave in error){
      if(error[clave]){
        return false
      }
    }
    return true
  }

  const validate = (name, value) => {
    setError({...error, [name]: validateFields(name, value,form) })
  }
  return (
    
        <form onSubmit={(e) => onSubmit(e)} autoComplete="off" className='border rounded p-3'>
            <h4 className="mb-3"> Update your profile data </h4>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                    className="form-control"
                    autoComplete="false"
                    type="text"
                    name="username"
                    value={ user.username }
                    disabled = "disabled"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                    className='form-control'
                    type="email"
                    name="email"
                    value={ form.email }
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
                    value={ form.phone }
                    placeholder='+5411-5555-4444' 
                    onChange={ (e) => handleChange(e) }
                />
                { error.phone && 
                    <h6 className='form-text text-danger'> {error.phone} </h6>
                }
            </div>
            <div className='text-center'>
                <button type="submit" className={`btn btn-primary mx-1 ${ !validateError() && "disabled"}`} style={{ width: "100px"}}>Update</button>
            </div>
        </form>
    )
}

export default UpdateProfile