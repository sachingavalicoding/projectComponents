import { useAuth } from '../../context/AuthContext'

const Profile = () => {
  const { user } = useAuth()

  return (
    <div>
      <h2> Profile </h2>
      {user ? (
        <div>
          <p> Name {user.name} </p>
          <p> Name {user.email} </p>
        </div>
      ) : (
        <p> user not fouuntd baby girl </p>
      )}
    </div>
  )
}

export default Profile
