import './App.css'
export function App () {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="avatar midudev" src="https://unavatar.io/kikobeats"/>
            <div className='tw-followCard-info'>
                <strong>Nombre</strong>
                <span className='tw-followCard-infoUsername'>@Nombre</span>
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