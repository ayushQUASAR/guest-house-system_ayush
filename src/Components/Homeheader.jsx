import React from 'react'
import "../style/dashNav.css"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import logo from "../images/logo_250.png.png"
import { NavLink } from 'react-router-dom';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import ContactlessIcon from '@mui/icons-material/Contactless';
import AlignHorizontalLeftOutlinedIcon from '@mui/icons-material/AlignHorizontalLeftOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from "react-scroll";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
const HomeHeader = () => {
    return (
        <div>
            <div className="h-nav">

                <div className="nav-wrapper">
                    <div className='colg-name'>National Institute Of Technology jalandhar</div>
                    <div className="h-navlogo">
                        <img src={logo} alt="NIT_logo" />
                    </div>
                    <div className="bg-nav">
                        <li>

                            <Link
                                to="/"
                                smooth={true}
                                duration={50}
                            >

                                <div className="nav-optn"><HomeRoundedIcon color="white" /><div className='optn-name'>Home</div>       </div>
                            </Link>


                            <Link
                                to="contactHeader"
                                smooth={true}
                                duration={100}

                            >
                                <div className="nav-optn">
                                    <ContactlessIcon /> 
                                    
                                 <div className="optn-name"> ContactUs</div>  
                                </div>
                            </Link>
                            <div className="nav-optn">
                                <LocalDiningRoundedIcon />  Food
                            </div>
                            <Link
                                to="guidelinesHeader"
                                smooth={true}
                                duration={50}

                            >
                                <div className="nav-optn">
                                    <AlignHorizontalLeftOutlinedIcon />  
                                    <div className="optn-name"> ContactUs</div> 
                                </div>
                            </Link>

                            <Link
                                to="AboutUs"
                                smooth={true}
                                duration={50}

                            >

                                <div className="nav-optn">
                                    <HelpCenterIcon />  <div className="optn-name">About</div> 
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
                            <NavLink to="/UserDetails">

                                <div className="nav-optn">Profile</div>
                            </NavLink> 
                            <NavLink to="/login">

                                <div className="nav-optn">Login</div>
                            </NavLink>
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
    )
}

export default HomeHeader