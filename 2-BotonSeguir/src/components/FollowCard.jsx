export const FollowCard = ({ infoName, username = "unknown", isFollowing, children }) => {
  return (
    <div className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-image' alt="Avatar" src={`https://unavatar.io/${username}`} />
        <div className='tw-followCard-info'>
          <strong className='info-name'>{children}</strong>
          <span className='info-username'>@{username}</span>
        </div>
      </header>

      <aside className='tw-followCard-aside'>
        <button className='tw-followCard-button'>Seguir</button>
      </aside>
    </div>
  )
}
