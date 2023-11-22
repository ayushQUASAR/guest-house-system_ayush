

// export default BookingComponent;
import React, { useState, useEffect } from 'react';
import './BookingComponent.css';

import MyComponent from './MyComponent';
import Popup from '../PopUp/Popup';
import './MyComponent.css';
import ApproveBooking from '../BookingApproval/ApproveBooking.jsx'
// import { useHistory } from 'react-router-dom';
// import React, { useState } from 'react';




const BookingComponent = ({ guesthouseno, rooms, id, onBack }) => {
  const [messageHead_m, setMessagehead] = useState('')

  const [para1_m, setPara1] = useState('')
  const [para2_m, setPara2] = useState('')
  const [popup, setPopup] = useState(false)
  const handleBack = onBack;

  useEffect(() => {
    const ghh1 = document.getElementById('gh1');
    const ghh2 = document.getElementById('gh2');
    const ghh3 = document.getElementById('gh3');

    console.log("inside use effect");

    if (guesthouseno === 1) {
      ghh1.style.backgroundColor = 'black';
    }
    if (guesthouseno === 2) {
      ghh2.style.backgroundColor = 'black';
    }
    if (guesthouseno === 3) {
      ghh3.style.backgroundColor = 'black';
    }

    // Clean-up function (optional)
    return () => {
      // Reset styles or perform any clean-up when the component unmounts
      ghh1.style.backgroundColor = '';
      ghh2.style.backgroundColor = '';
      ghh3.style.backgroundColor = '';
    };
  }, [guesthouseno]);



  const [selectedGuestHouse, setSelectedGuestHouse] = useState(guesthouseno);
  const [selectedRooms, setSelectedRooms] = useState([]);

  const [selectedDeadlineValue, setSelectedDeadlineValue] = useState(null);


  const handleChange = (event) => {
    setSelectedDeadlineValue(Number(event.target.value));
  };


  const handleApproval = () => {

    const data = {
      booking: id,
      status: 'accept',
      guestHouseAllotted: selectedGuestHouse,
      roomsAllotted: selectedRooms,
      paymentDeadline: selectedDeadlineValue
    };



    console.log("Accept Body :", data);
    fetch(`${import.meta.env.VITE_API_URL}/admin/bookingApproval`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        

        setMessagehead('Booking Successful')
      console.log()
        setPopup(true)
        console.log(data)
     
      })
      .catch((err) => console.error(err.message))

  }

  const handleRooms = (x) => {
    setSelectedRooms(x);
  }

  // const history = useHistory();

  // const goBack = () => {
  //   history.goBack();
  // };



  return (
    <div className="mai">

      <span onClick={handleBack} style={{ fontSize: "13px", cursor: "pointer", position: "absolute", color: "white", borderRadius: "4px", backgroundColor: "#0073cf", marginLeft: "2px", marginTop: "2px", padding: "2px" }}>
        Back
      </span>
      <div className="head1">

        <div>
          Booking Rooms
        </div>
      </div>
      <div className="main1">
        <div>

          <p className="para">Select Guest House</p>
        </div>

        <div className="flex-containerTY">
          <div id="gh1"  >Guest House 1</div>
          <div id="gh2"  >Guest House 2</div>
          <div id="gh3" >Guest House 3</div>
        </div>



        <div className="new">

          <div> Select {rooms}  {rooms === 1 ? "room" : "rooms"} </div>
          <div className="roombooking">
            <div id="available"></div>Available
            <div id="selected"></div>Selected
            <div id="booked"></div>Booked
          </div>
        </div>


        {
          selectedGuestHouse === 1 ?
            <div style={{ marginTop: '20px' }} id="sacg1">
              SAC Guest House (Non A.C)
              <MyComponent setRooms={handleRooms} maxRooms={rooms} n={8} />
            </div>
            : selectedGuestHouse === 2 ?
              <div style={{ marginTop: '10px' }} id="sacg2">
                Main Guest House (A.C)
                <MyComponent setRooms={handleRooms} maxRooms={rooms} n={10} />
              </div>
              : <div style={{ marginTop: '10px' }} id="sacg3">
                Mega Guest House (Non A.C)
                <MyComponent setRooms={handleRooms} maxRooms={rooms} n={12} />
              </div>
        }


        <div className='bookButtons'>
          <div className="book" style={{ cursor: "pointer" }} onClick={handleApproval}>Book Now</div>
          <div class="dropdown">
            {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            TIME
          </button> */}
            {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">24</a></li>
              <li><a class="dropdown-item" href="#">48</a></li>
              <li><a class="dropdown-item" href="#">72</a></li>
            </ul> */}
            <select style={{ position: 'relative', right: "5rem", bottom: "6px" }} onChange={handleChange}>
              <option value="24">
                24 hrs
              </option>
              <option value="48">
                48 hrs
              </option>
              <option value="72">
                72 hrs
              </option>


            </select>
          </div>
        </div>

        {popup && <Popup messageHead={messageHead_m} para1={para1_m} para2={para2_m} />}
      </div>
    </div>
  );
};

export default BookingComponent;

