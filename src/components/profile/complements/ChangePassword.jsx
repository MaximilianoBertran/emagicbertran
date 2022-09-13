import React, { useContext, useState } from 'react'
import { UserContext } from '../../../context/UserProvider';
import {Buffer} from 'buffer'

const ChangePassword = () => {
    const { updateData, validateFields } = useContext(UserContext)
    const [error, setError ] = useState({
        password: null,
    })
    const [ form, setForm ] = useState({
        password: ""
      })
  
    const onSubmit = async (e) => {
        e.preventDefault()
        if (validateError) {
            delete form['confirmPassword']
            updateData({ ...form, password: Buffer.from(form.password).toString('base64') })
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
        setError({...error, [name]: validateFields(name, value, form) })
    }
    return (
        <form onSubmit={(e) => onSubmit(e)} autoComplete="off" className='mt-3 border rounded p-3'>
            <h4>Change your password</h4>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">New password</label>
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
                <label htmlFor="confirmPassword" className="form-label">Confirm new password</label>
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
            <div className='text-center'>
                <button type="submit" className={`btn btn-primary mx-1 ${ !validateError() && "disabled"}`} style={{ width: "100px"}}>Update</button>
            </div>
        </form>
    )
}

export default ChangePassword