import React from 'react'
import '../../App.css'

function Login() {
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required autoComplete="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required autoComplete="current-password" />
        </div>
        <button type="submit" className="login-btn">Sign In</button>
      </form>
      <div className="login-link">
        Don't have an account? <a href="/register">Register</a>
      </div>
    </div>
  )
}

export default Login