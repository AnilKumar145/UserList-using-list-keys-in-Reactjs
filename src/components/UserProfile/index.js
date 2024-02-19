import './index.css'

const UserProfile = props => {
  const {userDetails, key} = props
  const {imageUrl, name, role} = userDetails // Add name here
  console.log(key)
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="User Avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-desgination">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
