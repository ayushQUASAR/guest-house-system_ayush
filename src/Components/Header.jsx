import React from 'react'
import "../style/dashNav.css"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import logo from "../images/logo_250.png.png"
import { NavLink } from 'react-router-dom';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import ContactlessIcon from '@mui/icons-material/Contactless';
import AlignHorizontalLeftOutlinedIcon from '@mui/icons-material/AlignHorizontalLeftOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
const Header = () => {
    return (
        <div>


            <div className="h-nav">
               
                <div className="nav-wrapper">
<<<<<<< HEAD
                <div className='colg-name'>Dr. BR Ambedkar National Institute Of Technology Jalandhar, Punjab</div>
=======
                <div className='colg-name'>Dr. B. R. Ambedkar National Institute Of Technology Jalandhar</div>
>>>>>>> 52687f35fd7a1a177256312f8a7fef4e9da748f2
                    <div className="h-navlogo">
                        <img src={logo} alt="NIT_logo" />
                    </div>
                    {/* <div className="bg-nav">
                        <li> */}
                            {/* <NavLink className="nav-underline" to="/">
                                <div  className="nav-optn"><HomeRoundedIcon color="white" /><div className='optn-name'>Home</div></div>

                            </NavLink> */}

                            {/* <div className="nav-optn">
                                <ContactlessIcon /> ContactUs
                            </div> <div className="nav-optn">
                                <LocalDiningRoundedIcon />  Food
                            </div> <div className="nav-optn">
                                <AlignHorizontalLeftOutlinedIcon />   Guidelines
                            </div> <div className="nav-optn">
                                <HelpCenterIcon />   About
                            </div> <div className="nav-optn">
                                <CurrencyRupeeIcon /> Charges
                            </div> */}
                        {/* </li>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Header