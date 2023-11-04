import React, { useState } from 'react'
import "../style/loginbox.css"
import Logo from "../images/logo_250.png.png"
import "../style/auth.css"
import { NavLink, useFetcher } from 'react-router-dom'
import userDetail from './UserDetail'
import Dash from './Dash'
import Home from '../../src/Home'
import { useUserContext } from './ContextHooks/UserContext'
import { useLoginContext } from './ContextHooks/LoginContext'

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loginData, setLoginData] = useState(null);
  // const [isLogged, setIsLogged] = useState(false);
  const {isLogged,setIsLogged}=useLoginContext();
  const [isAdmin, setIsAdmin] = useState(false);
// console.log(loginData);

  const [data, setData] = useState([]);

  const { userId,setUserId, updateUserId } = useUserContext();
  const setSubmit = (e) => {
    e.preventDefault();
    const newEntry = { Email: Email, Password: Password }
    setData([...data, newEntry]);



    fetch(`${import.meta.env.VITE_API_URL}/login`, {
    method: "POST",
      body: JSON.stringify(newEntry),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => res.json())
      .then((data) => {
        setLoginData(data);
        // setUserId(data.id);
        updateUserId(data.id);
        if (data.id !== undefined) {
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
                      

                      </div>
                      <h3 style={{ color: ' #346BD4' }}>Forgot password?</h3>
                      <button type="submit" className="sign-btn">Sign In</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {console.log("isadmindiv",isAdmin)}
          </div> : isAdmin ? <Dash admin={loginData.id} /> :  <Home/>
      
      }

    </>
  )
}

export default Login
