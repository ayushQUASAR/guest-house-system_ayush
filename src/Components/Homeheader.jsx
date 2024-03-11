import React, { useState, useEffect } from "react";
import { useLoginContext } from "./ContextHooks/LoginContext";
import "../style/dashNav.css";
import logo from "../images/logo_250.png.png";
import { NavLink } from "react-router-dom";
import LocalDiningRoundedIcon from "@mui/icons-material/LocalDiningRounded";
import ContactlessIcon from "@mui/icons-material/Contactless";
import AlignHorizontalLeftOutlinedIcon from "@mui/icons-material/AlignHorizontalLeftOutlined"; 
import { Link } from "react-scroll"; 
import menu from '../images/menu.png';
const HomeHeader = () => {
  const { isLogged } = useLoginContext();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/check-session`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          setIsAdmin(data.isAdmin);
        }
      });
  }, []);

  return (
    <>
      <div>
        <div className="h-nav">
          <div className="nav-wrapper">
            <div className="colg-name">
              Dr B R Ambedkar National Institute of Technology
              <br/> Jalandhar, Punjab, India
            </div>
            <div className="h-navlogo">
              <img src={logo} alt="NIT_logo" />
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
                <img src={menu} alt="" style = {{width : '30px', height : '30px', marginRight : '20px'}} />
            </div>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
              <ul>
                {/* <Link to="/" smooth={true} duration={50}>
                  <div className="nav-optn">
                    <HomeRoundedIcon color="white" />
                    <div className="optn-name">Home</div>{" "}
                  </div>
                </Link></li> */}
                <li><Link to="AboutUs" smooth={true} duration={25} style={{ cursor: 'pointer' }}>
                  <div className="nav-optn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>
                     <div className="optn-name">About Us</div>
                  </div>
                </Link></li>
                <li><Link to="guidelinesHeader" smooth={true} duration={50} style={{ cursor: 'pointer' }}>
                  <div className="nav-optn">
                    <AlignHorizontalLeftOutlinedIcon />
                    <div className="optn-name"> Guidelines</div>
                  </div>
                </Link></li>
                <li><Link to="availabilityHeader" smooth={true} duration={75} style={{ cursor: 'pointer' }}>
                  <div className="nav-optn">
                    <LocalDiningRoundedIcon /><div className="optn-name"> Room Availability</div>
                  </div>
                </Link></li>
                <li><Link to = "imageGallery" smooth = {true} duration = {75} style = {{cursor : 'pointer'}}>
                  <div className = "nav-optn"> 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"width = "20" height = "20"><path fill="#ffffff" d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
                    <div className = "optn-name">Image Gallery</div>
                  </div>
                </Link></li>
                <li><Link to="contactHeader" smooth={true} duration={100} style={{ cursor: 'pointer' }}>
                  <div className="nav-optn">
                    <ContactlessIcon />

                    <div className="optn-name"> Contact Us</div>
                  </div>
                </Link></li>

                {/* <div className="nav-optn">
                                <CurrencyRupeeIcon /> Charges
                            </div> */}
                {/* <Link
                                to="Facility"
                                smooth={true}
                                duration={50}
                                className="nav-optn"
                            >
                                <div className="nav-optn">
                                    Facility</div>
                            </Link></li> */}
                {/* <Link
                                to="Availability"
                                smooth={true}
                                duration={100}
                                className="nav-optn"
                            >

                                Availability
                            </Link></li> */}
                {/* {!isAdmin && (
                  <NavLink to="/UserDetails">
                    <div className="nav-optn">Profile</div>
                  </NavLink>
                )} */}
                <li>

                {!isLogged && (
                  <NavLink to="/login">
                    <div className="nav-optn"><div className="optn-name"> Login</div></div>
                  </NavLink>
                )}

                {isLogged && isAdmin && (
                  <NavLink to="/login">
                    <div className="nav-optn"><div className="optn-name"> Dashboard</div></div>
                  </NavLink>
                )}

                </li>
                {/* {isLogged && !isAdmin && (<NavLink to="/login">

                                <div className="nav-optn">Book Now</div>
                            </NavLink>)} */}

                {/* <NavLink to="/Booking">
                            <div className="nav-optn" id="BookNow">
                                Book Now
                            </div>
                            </NavLink> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
