import React, { useState } from 'react'
import "../style/loginbox.css"
import Logo from "../images/logo_250.png.png"
import "../style/auth.css"
import { NavLink } from 'react-router-dom'

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const setSubmit = (e) => {
    e.preventDefault();
    const newEntry = { Email: Email, Password: Password }
   setData([...data,newEntry]);

   fetch("http://localhost:4000/login", {
       method: "POST",
      body : JSON.stringify(newEntry),
      mode: "cors",
      "headers" : {
        "Content-Type": "application/json",
      }
   }).then((res) => res.json())
   .then((data) => console.log(data))
   .catch((err) => console.log(err));


    console.log("hi")
  }
  return (
    <>
    
    <div className="login-box">
    <div className="login-logo">
            <img src={Logo} alt="NIT logo"  />
          </div>
        <div className="lleft-box">
          <div>NIT Jalandhar</div>
          <div>Computer Centre</div>
         
        </div>
        <div className="lright-box">
        <div className="auth-box">
                    <h2>Sign In</h2>
                    
                  
                    <div className="details">
                      <form action="" onSubmit={setSubmit}>
                
                        <div className="email">
                            <h3>Email address</h3>
                            <div className='inputf'>
                            <input  required onChange={(e) => setEmail(e.target.value)}type="email" value={Email}name="email" id="" />
                            </div>
                           
                            <h3>Password</h3>
                            <div className="inputf">
                            <input  required onChange={(e) => setPassword(e.target.value)} type="password" value={Password} name="password" id="" />
                            </div>
                            <div className="reg-optn">
                              <div>
                            <NavLink to ="/Register">
                            <p>Dont have Account? Register here</p></NavLink>
                            </div>
                            <div>
                          <NavLink to ="/AdminRegistration">
                              Admin Registration
                              </NavLink>
                            </div>

                            </div>
                            <h3 style={{color:' #346BD4'}}>Forgot password?</h3>
                            <button type="submit"className="sign-btn">Sign In</button>
                        </div>
                        </form>
                    </div>
                </div>
        </div>
    </div>
    
    </>
  )
}

export default Login