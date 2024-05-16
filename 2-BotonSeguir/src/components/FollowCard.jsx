export const FollowCard = ({  username = "unknown", isFollowing, children }) => {

  const texto = isFollowing==true ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

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
        <button className={buttonClassName}>{texto}</button>
      </aside>

    </div>
  )
}
