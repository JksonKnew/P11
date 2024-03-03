import React from "react";
import { Link } from "react-router-dom";
import './NavStyle.css';





function Nav() {

return (
    <header className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src="./my-app/src/assets/img/argentBankLogo.png" alt="Argent Bank Logo" />
      </Link>
      <Link to="/login" className="main-nav-item">
        Sign In
      </Link>
    </header>

  );
} 

export default Nav