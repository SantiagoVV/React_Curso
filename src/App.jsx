import './App.css'
import { FollowCard } from './followCard.jsx'

export function App () {
const formatUserName = (userName) => `@${userName}`
    
    return (
        <section className = "App">
            <FollowCard 
                formatUserName={formatUserName}
                isFollowing = {true} 
                userName="kikobeats" 
                name= "Kiks"/>
            <FollowCard 
                formatUserName={formatUserName} 
                isFollowing = {false} 
                userName="kikobeats" 
                name= "Kiks 2"/>
        </section>
    )
}