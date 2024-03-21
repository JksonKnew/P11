import React, { useEffect } from "react";
import Account from "../../components/Account";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../../redux/slices/apiSlice";
import { userSuccess } from "../../redux/slices/userSlice";


function User(){

    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    });

    useEffect(() => {
        const userAccount = async () => {
            try {
                const response = await userInfo(token);
                const firstName = response.data.body.firstName;
                const lastName = response.data.body.lastName;
                const userName = response.data.body.userName;

                if(response.status === 200) {
                    dispatch(
                        userSuccess({
                            firstName,
                            lastName,
                            userName,
                        })
                    )
                }
            } catch(error) {
                console.log("error")
            }
        }
        if (token) {
            userAccount();
        }
    },[dispatch, token]);

return (
    <div className="account-section">
        <div>{firstName}</div>
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