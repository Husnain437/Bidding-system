import React, { Component, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

import { useState } from 'react';

import "./Login.css";
import Footer from '../../../component/footer/Footer';
const Login =()=>{
   
        const [error, setError] = useState("");
        const nameRef = useRef();
        const emailRef = useRef();
        const PasswordRef = useRef();
        const submitForm=(e)=>{
            e.preventDefault();
            setError('');
            console.log(`Name is ${nameRef.current.value}`)
            console.log(`Email is ${emailRef.current.value}`);
            console.log(`Password is ${PasswordRef.current.value}`);
            
          };
        return (
            <>
                <div className='Login-main-div font-link'>
                        <div className='Login-card-main-div'>
                            <div className='Login-heading-div'>
                                <p className='active-heading' to='/login'>Sign Up</p>
                                <Link className='Login-heading' to="/signup">Sign In</Link>
                            </div>
                          
                            
                            <div className='Login-input-main-div'>
                            {error && <Alert variant='danger'>{error}</Alert>}
                            <form onSubmit={submitForm} >
                                <label className='title'>Full Name</label><br/>
                                <input type="text" placeholder='Name' defaultValue={"Aldrego"} required ref={nameRef} /><br/>
                                <label className='title'>Email</label><br/>
                                <input type="text" placeholder='Email' defaultValue={"Aldrego@gmail.com"} ref={emailRef}  required/><br/>
                                <label className='title'>Password</label><br/>
                                <input type="password" placeholder='Password' defaultValue={"Aldrego"} ref={PasswordRef} required /><br/>
                                <button className='title'>Sign Up</button>
                                <p className='have-account-text'>Already have an account ?</p>
                                </form>
                            </div>
                            
                        </div>
                       
                </div>
              
            </>
        );
    }

 
export default Login;