import { Alert } from 'react-bootstrap';
import React, { useRef } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import "./signUp.css";
import Footer from '../../../component/footer/Footer';
const SignUp = () => {
  const [error, setError] = useState("");
  const emailRef = useRef();
  const PasswordRef = useRef();
  const cnfpasswordRef = useRef();
  const submitForm=(e)=>{
    e.preventDefault();
    setError('');
    if(PasswordRef.current.value !== cnfpasswordRef.current.value){
      return setError("passwords doesnt match");
    }
    console.log(`Email is ${emailRef.current.value}`);
    console.log(`Password is ${PasswordRef.current.value}`);
    console.log(`Confrim password is ${cnfpasswordRef.current.value}`);
  };
  return (
    <>
         <div className='sign-up-main-div font-link '>
                        <div className='sign-up-card-main-div'>
                          <div className='sign-up-heading-div'>
                                <p className= 'active-heading' to="/signup">Sign In</p>
                                <Link className= 'sign-up-heading' to='/login'>Sign Up</Link>         
                          </div>
                            <div className='sign-up-input-main-div'>
                                {error && <Alert variant='danger'>{error}</Alert>}
                                <form onSubmit={submitForm}>
                                  <label>Full Name</label><br/>
                                  <input type="text" placeholder='Name' defaultValue={"Aldrego"}  required /><br/>
                                  <label>Email</label><br/>
                                  <input type="text" placeholder='Email' defaultValue={"Aldrego@gmail.com"} ref={emailRef} required/><br/>
                                  <label>Password</label><br/>
                                  <input type="password" placeholder='Password' ref={PasswordRef} required/><br/>
                                  <label>Confirm Password</label><br/>
                                  <input type="password" placeholder='Confrim Password'  ref={cnfpasswordRef} required/><br/>
                                  <label>Phone</label>
                                  <input type="tel" id="phone" name="phone" placeholder='03001234567' pattern="[0-9]{11}"></input>
                                  <label for="birthday">Birthday:</label>
                                  <input type="date" id="birthday" name="birthday"></input>
                                  <button className='bbb'>Sign Up</button>
                                </form>
                            </div>
                          </div>
                         </div>
                        

    </>
  )
}

export default SignUp