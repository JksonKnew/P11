import React, { useEffect } from "react";
import Account from "../../components/Account";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function User(){

    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    });

return (
    <div className="account-section">
        <Account
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"
        />
        <Account
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"
        />
        <Account
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"
        />
    </div>
  );
}

export default User;