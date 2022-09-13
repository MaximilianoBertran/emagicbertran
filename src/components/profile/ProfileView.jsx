import './css/profile.css'
import ChangePassword from './complements/ChangePassword'
import UpdateProfile from './complements/UpdateProfile'

const ProfileView = () => {
  return (
    <div className='container profile mt-5'>
      <UpdateProfile />
      <ChangePassword />
    </div>
  )
}

export default ProfileView