import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from "./components/Login";
import Credits from "./components/Credits";
import Debits from "./components/Debits";
    
    function App() {

      const [accountBalance, setAccountBalance] = useState(14568.27)
      const [currentUser, setCurrentUser] = useState({ userName: "bob_loblaw", memberSince: '08/23/99' })
      
      const mockLogIn = (logInInfo) => {

        const newUser = {...currentUser}
        newUser.userName = logInInfo.userName
        setCurrentUser(newUser) 

      }

       return (
         <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home accountBalance={accountBalance}/>}/>
              <Route path="/UserProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince} />}/>
              <Route path="/Login" element={<LogIn user={currentUser} mockLogIn={mockLogIn}/>}/>
              <Route path="/Credits" element={<Credits accCredit={Credits}/>}/>
              <Route path="/Debits" element={<Debits accDebits={Debits}/>}/>
             
           </Routes>
         </BrowserRouter>
       );
     }
    
    export default App;
