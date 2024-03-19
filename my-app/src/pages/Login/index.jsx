import React, { useState } from 'react';
import './LoginStyle.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/slices/apiSlice'
import { loginSuccess } from '../../redux/slices/authSlice';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = async (e) => {
		e.preventDefault();

    try {
      const response = await login(email, password);
      const token  = response.data.body.token;
      console.log(email, password)
      
      if(response.status === 200) {
        localStorage.setItem('authToken', token);
        dispatch(
          loginSuccess({ 
            token 
          })
        );
        navigate("/user");
      }
    } catch (error) {
      dispatch({
        type: "LOGIN_FAIL",
        payload: error.message,
      });
      console.log(error)
      }
	};

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
        </form>
      </section>
    </main>
    </div>
  )
}

export default Login