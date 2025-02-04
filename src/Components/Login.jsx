import React, { useState, useEffect } from 'react'
import "../style/loginbox.css"
import Logo from "../images/logo_250.png.png"
import "../style/auth.css"
import { NavLink, useFetcher } from 'react-router-dom' 
import Dash from './Dash'
import Home from '../../src/Home'
import { useUserContext } from './ContextHooks/UserContext'
import { useLoginContext } from './ContextHooks/LoginContext'
import { useNavigate } from 'react-router-dom';
import UserDash from './UserDash'


const Login = () => {

  const navigate = useNavigate();

  const [activeDiv, setActiveDiv] = useState(null);


  const handleborderClick1 = () => {
    setActiveDiv(1); // Set div 1 as active
  };


  const handleborderClick2 = () => {
    setActiveDiv(2); // Set div 2 as active
  };
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loginData, setLoginData] = useState(null);
  // const [isLogged, setIsLogged] = useState(false);
  const { isLogged, setIsLogged, setIsAdm } = useLoginContext();
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
            setIsAdm(true);
            navigate('/Dashboard');
          } else {
            setIsAdm(false);
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
          setIsAdm(true);
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
              <div className="login-logo">
                <img src={Logo} alt="NIT logo" />
              </div>
              {/* <div>NIT Jalandhar </div> */}
              <div style={{ color: '#ffffff', fontSize: '30px', fontWeight: '900' }}>Welcome to NITJ </div>
              <div style={{ color: '#ffffff', fontSize: '30px', fontWeight: '900' }}> Guest House</div>
              <div style={{ color: '#ffffff', fontSize: '30px', fontWeight: '900' }}> Booking System
              </div>

            </div>
            <div className="lright-box">
              <div className="auth-box">



                <div className="details" >
                  <form action="" onSubmit={setSubmit}>

                    <div className="email">
                      <h3>Email address</h3>
                      <div style={{ border: activeDiv === 1 ? '2px solid #346BD4' : 'none' }} onClick={handleborderClick1} tabIndex="0" className='inputf'>
                        <input required onChange={(e) => setEmail(e.target.value)} type="email" value={Email} name="email" id="" />
                      </div>

                      <h3>Password</h3>
                      <div style={{ border: activeDiv === 2 ? '2px solid #346BD4' : 'none' }}
                        onClick={handleborderClick2} tabIndex="0" className="inputf">
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
