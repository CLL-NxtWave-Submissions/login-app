import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

export default class Home extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="login-app-bg-container">
        <div className="content-container">
          <Message isUserLoggedIn={isLoggedIn} />
          {isLoggedIn ? <Logout /> : <Login />}
        </div>
      </div>
    )
  }
}
