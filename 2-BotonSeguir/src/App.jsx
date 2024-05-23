import './styles/app.css'
import { FollowCard } from './components/FollowCard'

export default function App (){
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <FollowCard username="Carlos" initialIsFollowing={true}>
        Un muchacho
      </FollowCard>
      <FollowCard username="Carlos" initialIsFollowing={false}>
        Un muchacho
      </FollowCard>
    </div>
  );
}
