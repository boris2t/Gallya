import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Releases from './pages/releases'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/releases' component={Releases}/>
      </Switch>
    </Router>
  )
}

export default App