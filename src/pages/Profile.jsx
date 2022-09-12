import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import ProfileView from '../components/profile/ProfileView'
import { UserContext } from '../context/UserProvider'

const Profile = () => {
  const {user} = useContext (UserContext)

  return (
    <div className='container'>
    { 
      user.id ?
      <ProfileView user={ user }/>
      :
      <Navigate to="/login" />
    }
    </div>
  )
}

export default Profile