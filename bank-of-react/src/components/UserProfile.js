import React from 'react';
import { Link } from 'react-router-dom';

function UserProfile(props) {
    return (
        <div>
          <h1>User Profile</h1>

          <div>Username: {props.userName}</div>
          <div>Member Since: {props.memberSince}</div>

          <div>
          <Link to="/">Home</Link>
          </div>
          <div>
          <Link to="/Debits">Debits</Link>
          </div>
          <div>
          <Link to="/Credits">Credits</Link>
          </div>
        </div>
    );
  }

export default UserProfile;