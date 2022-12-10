import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CommonContext } from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Email() {
    let commonContext = useContext(CommonContext);
    let navigate = useNavigate()

    let [email,setEmail]=useState("")

    async function handleEmail(){
        await localStorage.setItem('email',email);
        navigate('/forgotpass')
    }
    return <>
        <section className='email-page'>
            <div className='container-fluid d-flex align-items-center'>
                <div className='row'>
                    <div className='left-section d-flex justify-content-center'>
                        <div className='left-sub-section'>
                            <div className='left-sub-top-section'>
                                <h1>Forgot Your Password?</h1>
                                <p>Few steps ahead to reset...</p>
                            </div>
                            <div className='left-sub-bottom-section'>
                                <Form>
                                    <Form.Group className="mb-3 pt-3 fields" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
                                    </Form.Group>
                                    <Button variant="primary" id='login-btn' onClick={()=>{handleEmail()}}>SUBMIT</Button>
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

export default Email