import {Route, Switch} from 'react-router-dom'
import Home from './components/Home/index'
import './App.css'
import TeamMatches from './components/TeamMatches/index'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
    </Switch>
  </div>
)

export default App
