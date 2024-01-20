import React, { useState, useEffect } from "react";
import { useLoginContext } from "./ContextHooks/LoginContext";
import "../style/dashNav.css";
import logo from "../images/logo_250.png.png";
import { NavLink } from "react-router-dom";
import LocalDiningRoundedIcon from "@mui/icons-material/LocalDiningRounded";
import ContactlessIcon from "@mui/icons-material/Contactless";
import AlignHorizontalLeftOutlinedIcon from "@mui/icons-material/AlignHorizontalLeftOutlined";
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
                <nav class="navbar navbar-expand-lg" style = {{margin : '0px', padding : '1rem', borderRadius : '0px', backgroundColor : '#'}}>
                    <div class="container-fluid">  
                        <div class="navbar-brand">
                            <img src={logo} alt="NIT_logo" width="80" height="80" class="d-inline-block align-text-top" />
                                <div class="d-inline-block align-text-top" style = {{color : 'white', fontSize : '1.2rem', paddingTop : '1.6rem', paddingLeft : '1rem' }}>
                                <strong>Dr. B R Ambedkar NationalInstitute of Technology, Jalandhar</strong>
                                </div>
                            </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0" style = {{ padding : '0rem'}}>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="AboutUs" smooth={true} duration={25} style={{ cursor: 'pointer' }}>
                                        <div className="nav-optn">
                                            <HelpCenterIcon /> <div className="optn-name">About</div>
                                        </div>
                                    </Link>
                                </li>
                                <li class="nav-item"  >
                                    <Link class="nav-link active" aria-current="page" to="guidelinesHeader" smooth={true} duration={50} style={{ cursor: 'pointer' }}>
                                        <div className="nav-optn">
                                        <AlignHorizontalLeftOutlinedIcon /><div className="optn-name">Guidelines</div>
                                        </div>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="availabilityHeader" smooth={true} duration={75} style={{ cursor: 'pointer' }}>
                                        <div className="nav-optn">
                                        <LocalDiningRoundedIcon /> <div className="optn-name">Room Availability</div>
                                        </div>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="contactHeader" smooth={true} duration={100} style={{ cursor: 'pointer' }}>
                                        <div className="nav-optn">
                                        <ContactlessIcon /> <div className="optn-name">Contact</div>
                                        </div>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    {!isLogged && (
                                    <NavLink class="nav-link active" aria-current="page" to="/login" style = {{paddingTop : '2rem'}} >
                                        <div className="nav-optn">
                                            Login
                                        </div>
                                    </NavLink>
                                    )}
                                    
                                    {!isLogged && isAdmin && (
                                    <NavLink class="nav-link active" aria-current="page" to="/login" style = {{paddingTop : '2rem'}} >
                                        <div className="nav-optn">
                                            Dashboard
                                        </div>
                                    </NavLink>
                                    )}

                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default HomeHeader;
