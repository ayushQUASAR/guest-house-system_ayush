import React, { useState } from 'react'
import "../style/dash.css"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { NavLink } from 'react-router-dom';

const Dash = () => {
  const [sideState, setSidestate] = useState(true);
  const ToggleSidestate = () => {
    setSidestate(!sideState);
  }
  return (
    <div className='dash-menu'>
      <div className="admin-header" onClick={ToggleSidestate}>
        <div className="admin-title">
          <span>
            <AdminPanelSettingsIcon />
            AdminPanel</span></div>
        <NavLink to="/">
          <div className="admin-home"><HomeRoundedIcon color="white" /></div>

        </NavLink>
      </div>
      {sideState &&
      
      <div className="dash-sidebar">
        <div className="dash-wrapper">
        <div className='side-title'> Administartion</div>
        <li>
          <div className="dash-optn"><span><DashboardIcon />Dashboard</span></div>
          <div className="dash-optn"><span><ManageAccountsIcon />Manage</span></div>
          <div className="dash-optn"><span><AssignmentTurnedInIcon />Auth</span></div>
        </li>
        <div className='side-title'>User</div>
        <li>
          <div className="dash-optn"><span><PersonPinIcon />Profile</span></div>
          <div className="dash-optn"><span><SettingsIcon />Settings</span></div>
          <div className="dash-optn"><span><LogoutIcon />Logout</span></div>
        </li>
      </div> </div>}
      <div className="dash-area">

      </div>

     
    </div>
  )
}

export default Dash