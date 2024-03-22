import React, { useEffect } from "react";
import Account from "../../components/Account";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../../redux/slices/apiSlice";
import { userSuccess } from "../../redux/slices/userSlice";
import UserId from "../../components/UserId";
import "./userStyle.scss"


function User(){

    const token = useSelector((state) => state.auth.token);
    const isConnected = useSelector((state) => state.auth.isConnected)
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);
    const userName = useSelector((state) => state.user.userName);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    // redirection si aucun token n'est trouvé
    useEffect(() => {
        if (!isConnected) {
            navigate('/login');
        }
    });

    // Récupere l'information User
    useEffect(() => {
        const userAccount = async () => {
            try {
                const response = await userInfo(token);
                const firstName = response.data.body.firstName;
                const lastName = response.data.body.lastName;
                const userName = response.data.body.userName;

                if(response.status === 200) {
                    // Met a jour le store redux "userSuccess"
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
        if (isConnected) {
            userAccount();
        }
    },[dispatch, token, isConnected]);






return (
<React.Fragment>
<div className="container">
    <UserId firstName={firstName} lastName={lastName} userName={userName} />
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
</div>
</React.Fragment>
  );
}

export default User;