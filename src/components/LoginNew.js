import React, { useState, useContext }  from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { CommonContext } from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function LoginNew() {
    let commonContext = useContext(CommonContext);
    let navigate = useNavigate()

    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("")

    async function handleLogin(){
        let res = await axios.post(`${commonContext.apiurl}/login`, {
            email,
            password
         })
         if(res.data.statusCode===200){
            navigate('/main')
            localStorage.setItem('email',email)
         }
    }
    return <>
       <section className='login-page'>
           <div className='container-fluid d-flex align-items-center'>
              <div className='row'>
                 <div className='left-section d-flex justify-content-center'>
                    <div className='left-sub-section'>
                       <div className='left-sub-top-section'>
                                <h1>Providing the best way to connect each other</h1>
                                <p>Let's begin the journey...</p>
                       </div>
                       <div className='left-sub-bottom-section'>
                       <Form>
                                    <Form.Group className="mb-3 pt-3 fields" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 fields" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 check" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>

                                    <Button variant="primary" id='login-btn' onClick={()=>{handleLogin()}}>LOGIN</Button>

                                    <Form.Group className='mt-1'>
                                        <Link to='/email' className='links'>Forgot Password?</Link>
                                    </Form.Group>
                                    <Form.Group className='mt-4 sign-up-link'>
                                        New user?
                                        <Link to='/signup' className='links'>Sign Up</Link><ArrowRightAltIcon />
                                    </Form.Group>

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

export default LoginNew