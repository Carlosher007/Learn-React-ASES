import './styles/app.css'
import { FollowCard } from './components/FollowCard'

export default function App (){
  return (
    <div style={{display:'flex', flexDirection:'column',gap:'10px'}}>
      <FollowCard username='Carlos' isFollowing>
        Un muchacho
      </FollowCard>
      <FollowCard username='John' isFollowing>
        Un muchacho 2
      </FollowCard>
    </div>
  )
}
