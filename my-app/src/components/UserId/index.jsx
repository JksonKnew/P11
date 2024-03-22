import React, { useState } from 'react'
import './UserIdStyle.scss'

function UserId({ firstName, lastName, userName }) {

    const [isEditing, setIsEditing] = useState(false)
    const [newUsername, setNewUsername] = useState('')

    const handleEditClick = () => {
        setIsEditing(true);
        setNewUsername(userName);
    }

    const handleCancelClick = () => {
        setIsEditing(false);
    }

    const handleSaveClick = () => {
        setNewUsername();
    }

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
                        <label htmlFor="username"></label>
                        <input
                            id='username'
                            type="text"
                            placeholder="New username"
                            value={newUsername}
                            onChange={handleSaveClick}
                        />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="firstname"></label>
                        <input
                            id='firstname'
                            type="text"
                            placeholder="First name"
                            value={firstName}
                            disabled
                        />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="lastname"></label>
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