import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
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
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Approve from './Approve';
import UserDashboardContent from './UserDashboardContent';
import AdminUserProfile from './AdminUserProfile'
import AdminRoomBooking from './AdminRoomBooking'
import BookedRooms from './BookedRooms'
import ApproveBooking from './BookingApproval/ApproveBooking';
import DashboardSettings from './DashboardSettings'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RegisteredUsers from './RegisteredUsers'
import { Settings } from '@mui/icons-material';
import { useLoginContext } from './ContextHooks/LoginContext'; 
import BookingDetail from './UserProfile/BookingDetail';
import BookingDetails from './BookingForm/BookingDetails';
import BookingComponent from './BOOKING/BookingComponent';
import PersonalDetail from './UserProfile/PersonalDetail';
import  Container  from './BookingForm/Container';
import UpcomingBooking from './UserProfile/UpcomingBooking';
import { useUserContext } from './ContextHooks/UserContext';
import UserResetPassword from './FORGETPASS/UserResetPassword';
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';


const UserDash = () => {
  // console.log(user);
  const [sideState, setSidestate] = useState(true);
  const [contentType, setContentType] = useState('UpcomingBooking')
  const [user, setUserDetails] = useState([]);
   
  const { userId } = useUserContext();

  console.log(userId);

// on initial render, Person Booking Details get saved
useEffect(() => {
 fetch(`{${import.meta.env.VITE_API_URL}/users/${userId}/bookingHistory}`)
   .then((res) => res.json())
   .then((data) =>{
     console.log(data);
     setUserDetails(data)
   }
   )
   .catch((err) => console.log(err.message));
}, []);

useEffect(() => {
  const handleResize = () => {
    setX(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  const ToggleSidestate = () => {
    setSidestate(!sideState);
  }
  const selectContent = (content) => {
    setContentType(content);
    if(x < 1000){
      setSidestate(!sideState);
   }
    console.log(contentType)
   
  }

  const navigate = useNavigate();
 const {isLogged,setIsLogged}=useLoginContext();

 const handleLogout = () => {
  fetch(`${import.meta.env.VITE_API_URL}/logout`, {
    method: 'GET',
    credentials: 'include',
  })
  .then((res) => res.json())
  .then((data) => {
    if (data.message === 'Logged out successfully') {
      setIsLogged(false);
      navigate('/login');
       // Reload the page after navigating to /login
       window.location.reload();
    } else {
      console.error('Error logging out');
    }
  });
};
  
  const contentComponents = {
    dashboard: <UserDashboardContent user ={user} />,
    Booking: <Container />,
    UpcomingBooking : <UpcomingBooking user ={user}/>,
    bookingHistory: <BookingDetail user={user}/>, 
    UserProfile: <PersonalDetail user={user} />,
    settings: <UserResetPassword />,
  };
  const [x, setX] = useState(window.innerWidth);

  const selectedContent = contentComponents[contentType];
  return (
  
    <>
        <Header/>
        <div className="reponsive-sidepanel-header">
        {x < 1000 ? (
          <div className='burger' >
            <div className="btn-div">
              <IconButton onClick={ToggleSidestate}>
                {!sideState ? <MenuIcon style={{ color: 'white' }} />
                  : <ClearIcon style={{ color: 'white' }} />}
              </IconButton>
            </div>
          </div>
        ) : null}
      </div>
    <div className='dash-menu'>
     
      {(x > 1000 || sideState) &&
      <div className="dash-sidebar">
         <div className="admin-title">
          <span style={{cursor:'pointer'}}>
            <AdminPanelSettingsIcon />
            User Panel
          </span>
          </div>
        <div className="dash-wrapper">
        {/* <div className='side-title'> Administration</div> */}
        <li style={{cursor:'pointer'}}>
          {/* <div onClick={() => selectContent('dashboard')}v className="dash-optn"><span><DashboardIcon />Dashboard</span></div> */}
          <div  onClick={() => selectContent('UpcomingBooking')} className="dash-optn"><span><PersonAddIcon />Upcoming Booking</span></div> 
          <div onClick={() => selectContent('Booking')} className="dash-optn"><span><BedroomParentRoundedIcon/>Booking</span></div>
          <div  onClick={() => selectContent('bookingHistory')} className="dash-optn"><span><AssignmentTurnedInIcon />Booking History</span></div>
        </li>
        <div className="admin-title">
          <span style={{cursor:'pointer'}}>
            <PersonIcon />
            User
          </span>
          </div>
        <li style={{cursor:'pointer'}}>
          <div  onClick={() => selectContent('UserProfile')} className="dash-optn"><span><PersonPinIcon />Profile</span></div>
          <div onClick={() => selectContent('settings')} className="dash-optn"><span><SettingsIcon />Settings</span></div>
          <div onClick={handleLogout} className="dash-optn"><span><LogoutIcon />Logout</span></div>
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

export default UserDash;