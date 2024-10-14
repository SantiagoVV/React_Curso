import { useState } from 'react'
import './App.css'
import { FollowCard } from './followCard.jsx'

export function App () {
const formatUserName = (userName) => `@${userName}`
const kiks2 = { formatUserName, userName : "kikobeats"}   
const [name, setName] = useState('kikobeats')

console.log('render with name:' , name)

    return (
        <section className = "App">
            <FollowCard 
                formatUserName={formatUserName}  
                userName={name} >  {/* isFollowing = {true} name= "Kiks "/>  (Prop isFollowing) */}
                <h3>Kiks</h3>
            </FollowCard>
            
            <FollowCard {... kiks2} > 
                <h3>Kiks 2</h3>
            </FollowCard>

            <button onClick={()  => setName('pedromichel')}>Cambio nombre</button>
        </section>
    )
}