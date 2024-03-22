import React from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { userLogOut } from "../../redux/slices/userSlice";
import { useSelector } from "react-redux";
import './NavStyle.scss';


function Nav() {

  const dispatch = useDispatch()
  const isConnected = useSelector((state) => state.auth.isConnected)
  const userName = useSelector((state) => state.user.userName);

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
      {!isConnected ? (
      <Link to="/login" className="main-nav-item">
        Sign In
      </Link>
      ) : (
        <React.Fragment>
          <Link className="main-nav-item" to="/user">{userName}</Link>
          <Link className="main-nav-item" onClick={handleLogout}>Logout</Link>
        </React.Fragment>
      )}
    </header>
  );
} 

export default Nav;