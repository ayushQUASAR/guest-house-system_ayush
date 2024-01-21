import React, { useState, useEffect } from "react";
import { useLoginContext } from "./ContextHooks/LoginContext";
import "../style/dashNav.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import logo from "../images/logo_250.png.png";
import { NavLink } from "react-router-dom";
import LocalDiningRoundedIcon from "@mui/icons-material/LocalDiningRounded";
import ContactlessIcon from "@mui/icons-material/Contactless";
import AlignHorizontalLeftOutlinedIcon from "@mui/icons-material/AlignHorizontalLeftOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from "react-scroll";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

const HomeHeader = () => {
  const { isLogged } = useLoginContext();
  const [isAdmin, setIsAdmin] = useState(false);

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
            <div className="colg-name ">
              Dr. B R Ambedkar National Institute <br />of Technology Jalandhar, Punjab
            </div>
            <div className="h-navlogo">
              <img src={logo} alt="NIT_logo" />
            </div>
            <div className="bg-nav">
              <li>
                {/* <Link to="/" smooth={true} duration={50}>
                  <div className="nav-optn">
                    <HomeRoundedIcon color="white" />
                    <div className="optn-name">Home</div>{" "}
                  </div>
                </Link> */}
                <Link to="AboutUs" smooth={true} duration={50} style={{ cursor: 'pointer' }}>
                  <div className="nav-optn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>
                     <div className="optn-name">About Us</div>
                  </div>
                </Link>

                <Link to="guidelinesHeader" smooth={true} duration={50} style={{ cursor: 'pointer' }}>
                  <div className="nav-optn">
                    <AlignHorizontalLeftOutlinedIcon />
                    <div className="optn-name"> Guidelines</div>
                  </div>
                </Link>
                <Link to="availabilityHeader" smooth={true} duration={75} style={{ cursor: 'pointer' }}>
                  <div className="nav-optn">
                    <LocalDiningRoundedIcon /><div className="optn-name"> Room Availability</div>
                  </div>
                </Link>
                <Link to="contactHeader" smooth={true} duration={100} style={{ cursor: 'pointer' }}>
                  <div className="nav-optn">
                    <ContactlessIcon />

                    <div className="optn-name"> Contact Us</div>
                  </div>
                </Link>

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
                            </Link> */}
                {/* <Link
                                to="Availability"
                                smooth={true}
                                duration={100}
                                className="nav-optn"
                            >

                                Availability
                            </Link> */}
                {/* {!isAdmin && (
                  <NavLink to="/UserDetails">
                    <div className="nav-optn">Profile</div>
                  </NavLink>
                )} */}
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

                {/* {isLogged && !isAdmin && (<NavLink to="/login">

                                <div className="nav-optn">Book Now</div>
                            </NavLink>)} */}

                {/* <NavLink to="/Booking">
                            <div className="nav-optn" id="BookNow">
                                Book Now
                            </div>
                            </NavLink> */}
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
