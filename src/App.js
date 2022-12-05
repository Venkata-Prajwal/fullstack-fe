import './App.css';
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import Register from './components/Register'
import Email from './components/Email'
import ForgotPassword from './components/ForgotPassword'
import Profile from './components/Profile'
import LoginNew from './components/LoginNew';
import Main from './components/Main'
function App() {
  return <>
   <BrowserRouter>
    
       <Routes>
          <Route path='/signin' element={<LoginNew/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/forgotpass' element={<ForgotPassword/>}/>
          <Route path='/email' element={<Email/>}/>
          <Route path='/main' element={<Main/>}/>
          <Route path='*' element={<Navigate to="/signin" />}/>
       </Routes>
   
    </BrowserRouter>
  </>
}

export default App;
