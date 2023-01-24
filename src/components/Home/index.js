import {Component} from 'react'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {teamsData: []}

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updated = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsData: updated})
    console.log(updated)
  }

  render() {
    const {teamsData} = this.state
    return (
      <div className="back">
        <div className="back1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <div>
          <ul className="u1">
            {teamsData.map(each => (
              <TeamCard details={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Home
