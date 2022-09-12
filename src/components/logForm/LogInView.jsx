import React, { useContext } from 'react'
import './css/logForm.css'
import { UserContext } from '../../context/UserProvider';
import {Buffer} from 'buffer'
import { useState } from 'react';

const LogInView = () => {

  const [error, setError ] = useState({})
  const {login} = useContext (UserContext)

  const onSubmit = async (e) => {
    e.preventDefault()
    let response = await login(e.target.username.value, Buffer.from(e.target.password.value).toString('base64'))
    if(!response){
      setError({message: "Username or password incorrect."})
    }
  }

  return (
    <div className='container logform mt-5'>
      <form onSubmit={ onSubmit } className="p-4 border rounded">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
          type="text" 
          name="username"
          placeholder='Username'
          className={ `form-control ${ error.username && "is-invalid"}` }
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" id="password"/>
          <div id="emailHelp" className="form-text">We'll never share your password with anyone else.</div>
        </div>
        { error.message && 
          <h6 className='form-text text-danger'> {error.message} </h6>
        }
        <button type="submit" className={ `btn btn-primary` }>Submit</button>
      </form>
    </div>
  )
}

export default LogInView