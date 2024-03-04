import React from 'react';
import './AccountStyle.scss'


function Account({title, amount, description}) {
    return (
      <section className="account">
        <div className="account-content">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-description">{description}</p>
        </div>
        <div className="account-cta">
          <button className="transaction-button">
            View transactions
          </button>
        </div>
      </section>
    );
}

export default Account;