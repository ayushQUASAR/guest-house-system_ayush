import React, {useEffect, useState} from 'react'
import '../style/userprofile.css';
import PersonalDetail from "./UserProfile/PersonalDetail";
import BookingDetail from "./UserProfile/BookingDetail";
import CancelledBooking from "./UserProfile/CancelledBooking";
import { useUserContext } from './ContextHooks/UserContext';
import HomeHeader from './Homeheader';

const UserDetail = () => {
 const [user, setUser] = useState(null);
 const [isAvailable,setIsAvailable] = useState(false);
 const [selectedOption, setSelectedOption] = useState("PersonalDetails");
 const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
};
 const {userId}=useUserContext();
const username = "USER";
 useEffect(()=> {
    console.log(userId);
       fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`)
       .then((res) => res.json())
       .then((data) =>{setUser(data); setIsAvailable(true);console.log(data)})
       .catch((err) => console.log(err));
 }, []);
  return (
   <>
   <HomeHeader/> 
   <div className="top-container">
      <div className="topbars">
         <div className = 'row row2' style = {{color : 'white'}}>
          <div className = 'col-8 mx-4'>
            <h3>User Profile</h3></div>
          <div className = 'col-2'><h6>{username}</h6></div>
          <div className = "col-1"><button  style = {{backgroundColor : '#0275d8', color: 'white', border : '0px'}}><strong>Logout</strong></button></div>
        </div>
      </div>
      <div> 
        <div>
          <div className="d-inline mx-4" style = {{backgroundColor : '#f5f9fe'}}>
            <label>
            <input type="radio" 
            value = "PersonalDetails"
            checked= {selectedOption === 'PersonalDetails'} onChange={handleOptionChange} />
              <span>Personal Details</span>
            </label>
          </div>
          <div className="d-inline mx-4" style = {{backgroundColor : '#f5f9fe'}}>
            <label>
            <input type="radio" 
            value = "BookingDetails"
            checked= {selectedOption === 'BookingDetails'} onChange={handleOptionChange}/>
              <span>Booking Details </span>
            </label>
          </div>
          <div className="d-inline mx-4" style = {{backgroundColor : '#f5f9fe'}}>
            <label>
            <input type="radio" 
            value = "CancelledBooking"
            checked= {selectedOption === 'CancelledBooking'} onChange={handleOptionChange}/>
              <span>Cancelled Bookings</span>
            </label>
          </div>
          {selectedOption === "PersonalDetails" && <PersonalDetail user = {user}/>}
          {selectedOption === "BookingDetails" && <BookingDetail />}
          {selectedOption === "CancelledBooking" && <CancelledBooking/>}
        </div>
      </div>
    </div> 
    </>
  )
}

export default UserDetail;