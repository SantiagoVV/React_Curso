import './App.css'
import { FollowCard } from './followCard.jsx'

export function App () {
const formatUserName = (userName) => `@${userName}`
const kiks2 = { formatUserName, userName : "kikobeats"}   

    return (
        <section className = "App">
            <FollowCard 
                formatUserName={formatUserName}  
                userName="kikobeats" >  {/* isFollowing = {true} name= "Kiks "/>  (Prop isFollowing) */}
                <h3>Kiks</h3>
            </FollowCard>
            
            <FollowCard {... kiks2} > 
                <h3>Kiks 2</h3>
            </FollowCard>
        </section>
    )
}