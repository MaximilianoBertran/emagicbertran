import React from 'react'
import '../css/logout.css'
import { NavLink } from 'react-router-dom'

const NavLogout = () => {
  return (
    <div className="text-end me-5 logMobile">
        <NavLink type="button" to="login" className="btn btn-outline-light me-2">Login</NavLink>
        <NavLink type="button" to="register" className="btn btn-outline-light me-2">Sign-up</NavLink>
    </div>
  )
}

export default NavLogout