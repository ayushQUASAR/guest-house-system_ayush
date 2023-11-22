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
import UserDetail from './UserDetail';
import CancelledBooking from './UserProfile/CancelledBooking';
import BookingDetail from './UserProfile/BookingDetail';
import BookingDetails from './BookingForm/BookingDetails';
import BookingComponent from './BOOKING/BookingComponent';
import PersonalDetail from './UserProfile/PersonalDetail';
import  Container  from './BookingForm/Container';
import UpcomingBooking from './UserProfile/UpcomingBooking';
import { useUserContext } from './ContextHooks/UserContext';


const UserDash = () => {
  // console.log(user);
  const [sideState, setSidestate] = useState(true);
  const [contentType, setContentType] = useState('UpcomingBooking')
  const [user, setUserDetails] = useState([]);
   
  const { userId } = useUserContext();

  console.log(userId);

// on initial render, Person Booking Details get saved
useEffect(() => {
 fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/bookingHistory`)
   .then((res) => res.json())
   .then((data) =>{
     console.log(data);
     setUserDetails(data)
   }
   )
   .catch((err) => console.log(err.message));
}, []);

  const ToggleSidestate = () => {
    setSidestate(!sideState);
  }
  const selectContent = (content) => {
    setContentType(content);
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
    bookingCancellationTab: <CancelledBooking />,
    UserProfile: <PersonalDetail user={user} />,
    settings: <DashboardSettings />,
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
            User Panel</span></div>
        <div className="dash-wrapper">
        {/* <div className='side-title'> Administration</div> */}
        <li>
          {/* <div onClick={() => selectContent('dashboard')}v className="dash-optn"><span><DashboardIcon />Dashboard</span></div> */}
          <div  onClick={() => selectContent('UpcomingBooking')} className="dash-optn"><span><PersonAddIcon />Upcoming Booking</span></div> 
          <div onClick={() => selectContent('Booking')} className="dash-optn"><span><BedroomParentRoundedIcon/>Booking</span></div>
          <div  onClick={() => selectContent('bookingHistory')} className="dash-optn"><span><AssignmentTurnedInIcon />Booking History</span></div>
        </li>
        <div className='side-title'>User</div>
        <li>
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