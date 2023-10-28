import React, { useState } from 'react'
import "../style/loginbox.css"
import Logo from "../images/logo_250.png.png"
import "../style/auth.css"
import { NavLink, useFetcher } from 'react-router-dom'
import userDetail from './UserDetail'
import Dash from './Dash'
import Home from '../../src/Home'
import { useUserContext } from './ContextHooks/UserContext'

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loginData, setLoginData] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [data, setData] = useState([]);

  const { setUserId } = useUserContext();
  const setSubmit = (e) => {
    e.preventDefault();
    const newEntry = { Email: Email, Password: Password }
    setData([...data, newEntry]);



    fetch("http://localhost:4000/login", {


      method: "POST",
      body: JSON.stringify(newEntry),
      mode: "cors",
      "headers": {
        "Content-Type": "application/json",
      }
    }).then((res) => res.json())

      .then((data) => {
        console.log(data);

        setLoginData(data);
        setUserId(data.id)
        if (data.id !== null) {
          setIsLogged(true);
          console.log("islog ID NULL", isLogged)
        }
        if (data.isAdmin) {
          setIsAdmin(true);
          console.log("islog ADMIN", isLogged)
        }

        window.alert(data.message);
        console.log("islog", isLogged)
      }
      )
      .catch((err) => console.log(err));
  }
  return (
    <>
      {
        !isLogged ?
          <div className="login-box">
         
            <div className="login-logo">
              <img src={Logo} alt="NIT logo" />
            </div>
            <div className="lleft-box">
              <div>NIT Jalandhar</div>
              <div>Computer Centre</div>

            </div>
            <div className="lright-box">
              <div className="auth-box">



                <div className="details">
                  <form action="" onSubmit={setSubmit}>

                    <div className="email">
                      <h3>Email address</h3>
                      <div className='inputf'>
                        <input required onChange={(e) => setEmail(e.target.value)} type="email" value={Email} name="email" id="" />
                      </div>

                      <h3>Password</h3>
                      <div className="inputf">
                        <input required onChange={(e) => setPassword(e.target.value)} type="password" value={Password} name="password" id="" />
                      </div>
                      <div className="reg-optn">
                        <div>
                          <NavLink to="/Register">
                            <p>Dont have Account? Register here</p></NavLink>
                        </div>
                        {/* <div>
                          <NavLink to ="/AdminRegistration">
                              Admin Registration
                              </NavLink>
                            </div> */}

                      </div>
                      <h3 style={{ color: ' #346BD4' }}>Forgot password?</h3>
                      <button type="submit" className="sign-btn">Sign In</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> : isAdmin ? <Dash admin={loginData.id} /> :  <Home/>
        // <userDetail userId={loginData.id} 
        // console.log("hd", isLogged)
      }

    </>
  )
}

export default Login
