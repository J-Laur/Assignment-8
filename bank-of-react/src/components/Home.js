import React from 'react';
import AccountBalance from './AccountBalance';
    
    function Home(props) {
        return (
            <div>
              <img src="https://res.cloudinary.com/andreahabib/image/upload/v1642026304/React_Bank_dk7n1a.png" alt="bank"/>
              <h1>Bank of React</h1>

              <Link to="/userProfile">User Profile</Link>

              <AccountBalance accountBalance={props.accountBalance}/>
            </div>
        );
      }
    
    export default Home;