import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CommonContext } from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
    let commonContext = useContext(CommonContext);
    let navigate = useNavigate()

    let [password,setPassword]=useState("");
    let [userConfirmPassword,setUserConfirmPassword]=useState("")

    async function handleForgotPass(){
        let email=localStorage.getItem('email')
        let res = await axios.put(`${commonContext.apiurl}/forgot-pass/${email}`, {
           password,
           userConfirmPassword
         })
         if(res.data.statusCode===200){
            navigate('/login');
            localStorage.clear()
         }
    }
    return <>
        <section className='forgot-page'>
            <div className='container-fluid d-flex align-items-center'>
                <div className='row'>
                    <div className='left-section d-flex justify-content-center'>
                        <div className='left-sub-section'>
                            <div className='left-sub-top-section'>
                                <h1>Reset your Password</h1>
                                <p>Almost done...</p>
                            </div>
                            <div className='left-sub-bottom-section'>
                                <Form>
                                    <Form.Group className="mb-3 pt-3 fields" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 fields" controlId="formBasicConfirmPassword">
                                        <Form.Control type="password" placeholder=" Confirm Password" onChange={(e)=>{setUserConfirmPassword(e.target.value)}}/>
                                    </Form.Group>
                                    <Button variant="primary" id='login-btn' onClick={()=>{handleForgotPass()}}>SUBMIT</Button>
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

export default ForgotPassword