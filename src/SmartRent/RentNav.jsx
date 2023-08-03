import { Link } from 'react-router-dom'

export default function RentNav(){
    return(
        <div className="logo-nav">
        <div className="nav-bar">
          <Link to='./login' className="login-button">
            <div className="login-1">Login</div>
          </Link>

          <Link to='./register' className="register-button">
            <div className="login-1">Register</div>
          </Link>
        </div>

        <Link to='/' className="smart-rent-1">SmartRent</Link>
      </div>
    )
}