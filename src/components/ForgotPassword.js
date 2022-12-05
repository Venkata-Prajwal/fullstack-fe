import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ForgotPassword() {
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
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 fields" controlId="formBasicConfirmPassword">
                                        <Form.Control type="password" placeholder=" Confirm Password" />
                                    </Form.Group>
                                    <Button variant="primary" id='login-btn'>SUBMIT</Button>
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