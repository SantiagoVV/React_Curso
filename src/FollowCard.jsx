export function FollowCard ({children,formatUserName ,userName, name, isFollowing}) {
    const imageSrc = `https://unavatar.io/${userName}`
    console.log(isFollowing)
    console.log(formatUserName)
    
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
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}