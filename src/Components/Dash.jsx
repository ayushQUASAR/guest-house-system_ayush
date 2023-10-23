import React, { useState } from 'react'
import "../style/dash.css"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import BedroomParentRoundedIcon from '@mui/icons-material/BedroomParentRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Approve from './Approve';

const Dash = () => {
  const [sideState, setSidestate] = useState(true);
  const ToggleSidestate = () => {
    setSidestate(!sideState);
  }
  return (
    // <Header/>
    <>
          <Header Toggle={ToggleSidestate}/>
    <div className='dash-menu'>

      {/* <div className="admin-header" onClick={ToggleSidestate}>
     
       
      </div> */}
      {sideState &&
      
      <div className="dash-sidebar">
         <div className="admin-title">
          <span>
            <AdminPanelSettingsIcon />
            AdminPanel</span></div>
        <div className="dash-wrapper">
        <div className='side-title'> Administartion</div>
        <li>
          <div className="dash-optn"><span><DashboardIcon />Dashboard</span></div>
          <div className="dash-optn"><span><BedroomParentRoundedIcon/>Admin Room Booking</span></div>
          <div className="dash-optn"><span><AssignmentTurnedInIcon />Approve Bookings</span></div>
          <div className="dash-optn"><span><TaskAltIcon/>Booked Rooms</span></div>
          <div className="dash-optn"><span><HowToRegRoundedIcon/>Registered Users</span></div>
        </li>
        <div className='side-title'>Admin</div>
        <li>
          <div className="dash-optn"><span><PersonPinIcon />Profile</span></div>
          <div className="dash-optn"><span><SettingsIcon />Settings</span></div>
          <div className="dash-optn"><span><LogoutIcon />Logout</span></div>
        </li>
      </div> </div>}
      <div className="dash-area">
  <div className="dash-box">
    <Approve/>
  </div>
      </div>

     
    </div>
    </>
  )
}

export default Dash