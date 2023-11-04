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
import DashboardContent from './DashboardContent';
import AdminUserProfile from './AdminUserProfile'
import AdminRoomBooking from './AdminRoomBooking'
import BookedRooms from './BookedRooms'
import ApproveBooking from './BookingApproval/ApproveBooking';
import DashboardSettings from './DashboardSettings'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RegisteredUsers from './RegisteredUsers'
import { Settings } from '@mui/icons-material';
import { useLoginContext } from './ContextHooks/LoginContext';


const Dash = ({admin}) => {
  console.log(admin);
  const [sideState, setSidestate] = useState(true);
  const [contentType, setContentType] = useState('dashboard')
  const ToggleSidestate = () => {
    setSidestate(!sideState);
  }
  const selectContent = (content) => {
    setContentType(content);
    console.log(contentType)
   
  }
 const {isLogged,setIsLogged}=useLoginContext();
  
  const contentComponents = {
    dashboard: <DashboardContent />,
    adminRoomBooking: <AdminRoomBooking />,
    bookedRooms: <BookedRooms />,
    registeredUsers: <RegisteredUsers />,
    adminuserProfile: <AdminUserProfile />,
    settings: <DashboardSettings />,
    approve: <Approve />,
    approvebooking :<ApproveBooking/>,
  };

  const selectedContent = contentComponents[contentType];
  return (
  
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
          <div onClick={() => selectContent('dashboard')}v className="dash-optn"><span><DashboardIcon />Dashboard</span></div>
          <div onClick={() => selectContent('adminRoomBooking')} className="dash-optn"><span><BedroomParentRoundedIcon/>Admin Room Booking</span></div>
          <div  onClick={() => selectContent('approvebooking')} className="dash-optn"><span><AssignmentTurnedInIcon />Approve Bookings</span></div>
          <div  onClick={() => selectContent('approve')} className="dash-optn"><span><PersonAddIcon />Approve Registrations</span></div>
          <div onClick={() => selectContent('bookedRooms')} className="dash-optn"><span><TaskAltIcon/>Booked Rooms</span></div>
          <div onClick={() => selectContent('registeredUsers')} className="dash-optn"><span><HowToRegRoundedIcon/>Registered Users</span></div>
        </li>
        <div className='side-title'>Admin</div>
        <li>
          <div  onClick={() => selectContent('adminuserProfile')} className="dash-optn"><span><PersonPinIcon />Profile</span></div>
          <div onClick={() => selectContent('settings')} className="dash-optn"><span><SettingsIcon />Settings</span></div>
          <div onClick={() =>setIsLogged(false)} className="dash-optn"><span><LogoutIcon />Logout</span></div>
        </li>
      </div> </div>}
      <div className="dash-area">
  <div className="dash-box">
    {selectedContent}
    
  </div>
      </div>

    
    </div>
    </>
  )
}

export default Dash