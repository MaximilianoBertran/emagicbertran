import React, { useContext } from 'react'
import './css/logForm.css'
import { useState } from 'react'
import {Buffer} from 'buffer'
import { UserContext } from '../../context/UserProvider';

const RegisterView = () => {

  const { register, validateUsername, validateFields } = useContext(UserContext)
  const [error, setError ] = useState({
    username: null,
    password: null,
    email: null,
    phone: null
  })
  const [ form, setForm ] = useState({
    username: "",
    password: "",
    email: "",
    phone: ""
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    if (validateError) {
      let valid = await validateUsername(form.username)
      if(valid){
        delete form['confirmPassword']
        register({ ...form, password: Buffer.from(form.password).toString('base64') })
      } else {
        setError({...error, username: "The username is already in use" })
      }
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
    <div className='container logform mt-3'>
      <form onSubmit={(e) => onSubmit(e)} autoComplete="off">
        <h4 className="mb-3"> Sign up and start your adventure! </h4>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            className={ `form-control ${error.username && "is-invalid"}` }
            autoComplete="false"
            type="text"
            name="username"
            value={ form.username }
            placeholder='Username' 
            onChange={ (e) => handleChange(e) }
          />
          { error.username && 
            <h6 className='form-text text-danger'> {error.username} </h6>
          }
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            className={ `form-control ${error.password && "is-invalid"}` }
            type="password"
            name="password"
            value={ form.password }
            placeholder='Password' 
            onChange={ (e) => handleChange(e) }
          />
          <h6 id="emailHelp" className={ error.password ? "form-text text-danger" : "form-text" }>
          7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter
          </h6>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
          <input
            className={ `form-control ${error.confirmPassword && "is-invalid"}` }
            type="password"
            name="confirmPassword"
            defaultValue=""
            placeholder='Confirm password'
            onChange={ (e) => handleChange(e) }
          />
          { error.confirmPassword && 
            <h6 className='form-text text-danger'> {error.confirmPassword} </h6>
          }
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
          <button type="submit" className={`btn btn-primary mx-1 ${ !validateError() && "disabled"}`} style={{ width: "100px"}}>Register</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterView