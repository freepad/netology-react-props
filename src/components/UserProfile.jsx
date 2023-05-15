export function UserProfile({ user }) {
  return (
    <div className="card">
      <img src={user.avatar} className="card-img-top"  alt={user.name}/>
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.status}</p>
      </div>
    </div>
  )
}
