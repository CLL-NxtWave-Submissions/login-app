import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

export default class Home extends Component {
  state = {
    isLoggedIn: false,
  }

  onLoginToggle = () => {
    this.setState(previousLoginState => ({
      isLoggedIn: !previousLoginState.isLoggedIn,
    }))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="login-app-bg-container">
        <div className="content-container">
          <Message isUserLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onLogout={this.onLoginToggle} />
          ) : (
            <Login onLogin={this.onLoginToggle} />
          )}
        </div>
      </div>
    )
  }
}
