import React from 'react';
import './LoginStyle.scss';

function Login() {
  return (
    <div className='container'>
      <main className='main bg-dark'>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleForm}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input 
              type="text"
              name="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              id="username"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label>
          </div>
            <button type="submit" className="sign-in-button">Sign In</button> 
            {errorMessage && <p className="sign-in-error-message">{errorMessage}</p>}       
        </form>
      </section>
    </main>
    </div>
  )
}

export default Login