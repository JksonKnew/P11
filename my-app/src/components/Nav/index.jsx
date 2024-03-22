import React from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { userLogOut } from "../../redux/slices/userSlice";
import { useSelector } from "react-redux";
import argentBankLogo from "../../assets/img/argentBankLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
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
        <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
      </Link>
      {!isConnected ? (
      <Link to="/login" className="main-nav-item">
        Sign In
      </Link>
      ) : (
        <React.Fragment>
          <div className="navLinkContainer">
          <Link className="main-nav-item" to="/user">
          <FontAwesomeIcon icon={faUser} />
            {userName}
          </Link>
          <Link className="main-nav-item" onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span>Logout</span>
          </Link>
          </div>
        </React.Fragment>
      )}
    </header>
  );
} 

export default Nav;