import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details
  return (
    <li className="back3">
      <Link to={`/team-matches/${id}`}>
        <div className="back4">
          <img src={teamImageUrl} alt={name} className="i3" />
          <p>{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
