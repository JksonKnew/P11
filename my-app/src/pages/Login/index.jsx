import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/slices/apiSlice'
import { loginSuccess, loginFail } from '../../redux/slices/authSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import './LoginStyle.scss';

function Login() {
  const token = useSelector((state) => state.auth.token);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [buttonOnError, setButtonOnError] = useState(false)

  const changeEmailInput = (e) => {
    setButtonOnError(false)
    setEmail(e.target.value)
  }

  const changePasswordInput = (e) => {
    setButtonOnError(false)
    setPassword(e.target.value)
  }

  useEffect(() => {
    if (token) {
        navigate('/user');
    }
});

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
      dispatch(
        loginFail()
      );
      setButtonOnError(true)
      }
	};

  return (
    <div className='container'>
      <main className='main bg-dark'>
      <section className="sign-in-content">
      <FontAwesomeIcon icon={faUser} />
        <h1>Sign In</h1>
        <form onSubmit={handleForm}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input 
              type="text"
              name="username"
              value={email}
              onChange={(e) => changeEmailInput(e)} 
              id="username"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password"
              value={password}
              onChange={(e) => changePasswordInput(e)}
              id="password"
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label>
          </div>
          {!buttonOnError ? (
            <button type="submit" className="sign-in-button">Submit</button> 
          ) : (
            <button type="submit" className="sign-in-button-error">Invalid password or username</button> 
          )}
                  
        </form>
      </section>
    </main>
    </div>
  )
}

export default Login