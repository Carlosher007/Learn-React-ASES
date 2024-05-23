import { useState } from "react"

export const FollowCard = ({  username = "unknown",  children, initialIsFollowing }) => {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  
  const texto = isFollowing==true ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const cambiarIsFollowing = () => {
    setIsFollowing(!isFollowing)
  }

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
        <button onClick={cambiarIsFollowing} className={buttonClassName}>{texto}</button>
      </aside>

    </div>
  )
}
