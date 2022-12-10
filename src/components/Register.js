import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { CommonContext } from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Register() {
   let commonContext = useContext(CommonContext);
   let navigate = useNavigate()

   let [firstname, setFirstname] = useState("");
   let [lastname, setLastname] = useState("");
   let [email, setEmail] = useState("");
   let [mobile, setMobile] = useState("");
   let [password, setPassword] = useState("");

   let [errmsg, setErrMsg] = useState("")
   let [isErrFound, setIsErrorFound] = useState(false)

   async function handleRegister() {
      let res = await axios.post(`${commonContext.apiurl}/register`, {
         firstname,
         lastname,
         email,
         mobile,
         password
      })
      if (res.data.statusCode === 200) {
         console.log("user registered successfully")
         navigate('/login')
      } else {
         if (res.data.statusCode === 400 || res.data.statusCode === 500) {
            console.log(res.data.message);
            setIsErrorFound(true)
            setErrMsg(res.data.message)
         }
      }
   }
   return <>
      <section className='register-page'>
         <div className='container-fluid d-flex align-items-center'>
            <div className='row'>
               <div className='left-section d-flex justify-content-center'>
                  <div className='left-sub-section'>
                     <div className='left-sub-top-section'>
                        <h1>Wanna be a part of exiting journey ?</h1>
                        <p>Register yourself...</p>
                     </div>
                     <div className='left-sub-bottom-section'>
                        <Form>

                           <Form.Group className="mb-3 pt-3 fields" controlId="formBasicfirstname">
                              <Form.Control type="text" placeholder="Enter First Name" onChange={(e) => { setFirstname(e.target.value) }} />
                           </Form.Group>

                           <Form.Group className="mb-3 mt-3 fields" controlId="formBasiclastname">
                              <Form.Control type="text" placeholder="Enter Last Name" onChange={(e) => { setLastname(e.target.value) }} />
                           </Form.Group>

                           <Form.Group className="mb-3 mt-3 fields" controlId="formBasicEmail">
                              <Form.Control type="email" placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value) }} />
                           </Form.Group>

                           <Form.Group className="mb-3 mt-3 fields" controlId="formBasicmobile">
                              <Form.Control type="text" placeholder="Enter Mobile Number" onChange={(e) => { setMobile(e.target.value) }} />
                           </Form.Group>

                           <Form.Group className="mb-3 fields" controlId="formBasicPassword">
                              <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                           </Form.Group>


                           <Button variant="primary" id='login-btn' onClick={() => { handleRegister() }}>Register</Button>


                           <Form.Group className='mt-3 sign-up-link'>
                              Already user?
                              <Link to='/signin' className='links'>Sign In</Link><ArrowRightAltIcon />
                           </Form.Group>
                           {
                                isErrFound?
                                <p style={{color:'red',marginLeft:'30%',marginTop:'-10%'}}>{errmsg}</p>:<></>
                            }
                        </Form>

                     </div>
                  </div>
               </div>
               <div className='right-section'>
                  <div>
                     <p>Welcome to...</p>
                     <h1>Connect</h1>
                     <img src='https://867688.smushcdn.com/2059713/wp-content/uploads/2020/09/Colen-Insurance-Agency-Icon-350x350.png?lossy=1&strip=1&webp=1' alt='image'></img>

                  </div>
               </div>
            </div>
         </div>
      </section>
   </>
}

export default Register