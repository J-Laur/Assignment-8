import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
    
    function App() {

      const [accountBalance, setAccountBalance] = useState(14568.27)

       return (
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home accountBalance={accountBalance}/>}/>
               <Route path="/userProfile" element={<UserProfile userName={currentUser.userName} 
               memberSince={currentUser.memberSince} />}/>
           </Routes>
         </BrowserRouter>
       );
     }
    
    export default App;
