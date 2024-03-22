import React from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import './NavStyle.scss';
import { logout } from "../../redux/slices/authSlice";
import { userLogOut } from "../../redux/slices/userSlice";


function Nav() {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout());
    dispatch(userLogOut());
    localStorage.removeItem("Token");
  };

return (
    <header className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src="./my-app/src/assets/img/argentBankLogo.png" alt="Argent Bank Logo" />
      </Link>
      <Link to="/login" className="main-nav-item">
        Sign In
      </Link>
      <button onClick={handleLogout}>Logout</button>
    </header>

  );
} 

export default Nav;