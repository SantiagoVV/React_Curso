import { useState } from "react"

export function FollowCard ({children,formatUserName ,userName = 'unknown', name}) {
    const [isFollowing, setIsFollowing] = useState(false)

    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const imageSrc = `https://unavatar.io/${userName}`
    console.log(isFollowing)
    console.log(formatUserName)

    const handleClick = () =>    {
        setIsFollowing(!isFollowing)
    }
    return (
    <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    alt="avatar midudev"
                    src= {imageSrc} />  {/* src = {'https://unavatar.io/${userName}'} */}
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUsername'>{formatUserName(userName)}</span>
            </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}