import React, { useState } from 'react'
import "../style/loginbox.css"
import Logo from "../images/logo_250.png.png"
import "../style/auth.css"
import { NavLink, useFetcher } from 'react-router-dom'
import userDetail from './UserDetail'
import Dash from './Dash'
import { Home } from '@mui/icons-material'

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loginData, setLoginData] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [data, setData] = useState([]);
  const setSubmit = (e) => {
    e.preventDefault();
    const newEntry = { Email: Email, Password: Password }
   setData([...data,newEntry]);



    fetch("https://guest-house-back.onrender.com/login", {


       method: "POST",
      body : JSON.stringify(newEntry),
      mode: "cors",
      "headers" : {
        "Content-Type": "application/json",
      }
   }).then((res) => res.json())

   .then((data) => {
    console.log(data);

    setLoginData(data);
    if(data.id !== null) {
         setIsLogged(true);
    }
    if(data.isAdmin) {
        setIsAdmin(true);
    }

    window.alert(data.message);

   }
   )


   .catch((err) => console.log(err));


    console.log("hi")
  }
  return (
    <>
    {
      !isLogged ? 
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
                            {/* <div>
                          <NavLink to ="/AdminRegistration">
                              Admin Registration
                              </NavLink>
                            </div> */}

                            </div>
                            <h3 style={{color:' #346BD4'}}>Forgot password?</h3>
                            <button type="submit"className="sign-btn">Sign In</button>
                        </div>
                        </form>
                    </div>
                </div>
        </div>
    </div>  : isAdmin ? <Dash admin={loginData.id} /> : <Home/>
    // <userDetail userId={loginData.id} 
      
}
    
    </>
  )
}

export default Login
