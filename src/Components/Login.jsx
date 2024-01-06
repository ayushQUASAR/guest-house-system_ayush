import React, { useState, useEffect } from 'react'
import "../style/loginbox.css"
import Logo from "../images/logo_250.png.png"
import "../style/auth.css"
import { NavLink, useFetcher } from 'react-router-dom'
import userDetail from './UserDetail'
import Dash from './Dash'
import Home from '../../src/Home'
import { useUserContext } from './ContextHooks/UserContext'
import { useLoginContext } from './ContextHooks/LoginContext'
import { useNavigate } from 'react-router-dom';
import UserDash from './UserDash'


const Login = () => {

  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loginData, setLoginData] = useState(null);
  // const [isLogged, setIsLogged] = useState(false);
  const { isLogged, setIsLogged } = useLoginContext();
  const [isAdmin, setIsAdmin] = useState();
  const [isMainAdmin, setIsMainAdmin] = useState(false);
  // console.log(loginData);

  const [data, setData] = useState([]);

  const { userId, setUserId, updateUserId } = useUserContext();

  // for session check
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/check-session`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          setIsLogged(true);
          updateUserId(data.id);
          setIsAdmin(data.isAdmin);
          if (data.isAdmin) {
            navigate('/Dashboard');
          } else {
            navigate('/UserDetails');
          }
        }
      });
  }, []);

  const setSubmit = (e) => {
    e.preventDefault();
    const newEntry = { Email: Email, Password: Password }
    setData([...data, newEntry]);



    fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(newEntry),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => res.json())
      .then((data) => {
        setLoginData(data);
        setUserId(data);
        // console.log("userId: ", data.id);
        updateUserId(data.id);
        console.log(data);
        if (data.id !== undefined) {

          setIsLogged(true);
          console.log("islog ID NULL", isLogged)


        }
        if (data.isAdmin) {
          setIsAdmin(true);

          console.log("islog ADMIN", isLogged)


        }

        if (data.isMainAdmin) {
          setIsMainAdmin(true);

          console.log("islog MAINADMIN", isLogged)
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


            <div className="lleft-box">
<<<<<<< HEAD
              <div>Dr. BR Ambedkar National Institute of Technology Jalandhar</div>
=======
              <div className="login-logo">
                <img src={Logo} alt="NIT logo" />
              </div>
              {/* <div>NIT Jalandhar </div> */}
              <div style={{color: 'White', fontSize: '36px',}}>Welcome To NITJ</div>
              <div style={{color: 'White', fontSize: '36px',}}>Guest House
              </div>
>>>>>>> 52687f35fd7a1a177256312f8a7fef4e9da748f2

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
                      <NavLink to="/forgot-password">
                        <p style={{ color: ' #346BD4' }}>Forgot password?</p>
                      </NavLink>

                      <button type="submit" className="sign-btn">Sign In</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {console.log("isadmindiv", isAdmin)}
          </div> : isAdmin ? <Dash admin={true} isMainAdmin={isMainAdmin} /> : <UserDash />

      }

    </>
  )
}

export default Login
