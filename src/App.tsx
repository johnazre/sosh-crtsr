import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './components/landing_auth/LandingPage'
import './App.css'
import TopNav from './components/main_layout/TopNav'
import MainDash from './components/dashboard/MainDash'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/dashboard/:user_id' exact component={MainDash} />
            <Route
              path='*'
              render={() => <div>404: Can't find what you're looking for</div>}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
