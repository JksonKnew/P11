import React, { useState } from 'react'
import { userSuccess } from '../../redux/slices/userSlice'
import { updateUserInfo } from '../../redux/slices/apiSlice'
import './UserIdStyle.scss'
import { useDispatch, useSelector } from 'react-redux'

function UserId({ firstName, lastName, userName }) {

    const Token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newUsername, setNewUsername] = useState('');

    const handleEditClick = () => {
        setIsEditing(true);
        setNewUsername(userName);
    }

    const handleCancelClick = () => {
        setIsEditing(false);
    }

    const handleSaveClick = async (e) => {
		e.preventDefault();

        try {
            const response = await updateUserInfo(Token, newUsername)
            
            // Récupération des nouvelles informations de l'utilisateur depuis la réponse
            const firstName = response.data.body.firstName;
            const lastName = response.data.body.lastName;
            const userName = response.data.body.userName;

            if(response.status === 200) {
                // Dispatch de l'action "userSuccess" pour mettre à jour le store Redux
                dispatch(
                    userSuccess({
                        firstName,
                        lastName,
                        userName,
                    })
                )
                // Masque le formulaire
                setIsEditing(false)
            }
        } catch ( error) {
            if(error){
                console.log(error)
            }
        }
    }

    const handleInputChange = (e) => {
        setNewUsername(e.target.value);
    };


    return (
        <div className="userSection">
        {!isEditing ? (
            <React.Fragment>
                <h1 className="username">Hello {firstName} {lastName}</h1>
                <button className="editButton" onClick={handleEditClick}>Edit name</button>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <form className="editForm">
                    <div className='input-wrapper'>
                        <label htmlFor="username">User Name</label>
                        <input
                            id='username'
                            type="text"
                            placeholder="New username"
                            value={newUsername}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="firstname">First Name</label>
                        <input
                            id='firstname'
                            type="text"
                            placeholder="First name"
                            value={firstName}
                            disabled
                        />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            id='lastname'
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            disabled
                        />
                    </div>
                <div className='fromButtonContainer'>
                    <button className="formButton" onClick={handleSaveClick}>Save</button>
                    <button className="formButton" onClick={handleCancelClick}>Cancel</button>
                </div>
                </form>
            </React.Fragment>
        )}
    </div>
    );
  };
  
  export default UserId;