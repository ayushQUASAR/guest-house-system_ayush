// import React, {useState} from 'react';
// import './BookingComponent.css';
// import Popup from '../PopUp/Popup';
// import MyComponent from './MyComponent';
// import './MyComponent.css';
// import HomeHeader from '../Homeheader';
// import React, { useState } from 'react';

// const BookingComponent = ({rooms, id}) => {
// const [selectedGuestHouse, setSelectedGuestHouse] = useState(1);
// const [selectedRooms, setSelectedRooms] = useState([]);
// const [isPopupOpen, setPopupOpen] = useState(false);
// const openPopup = () => {
//   setPopupOpen(true);
// };

// const closePopup = () => {
//   setPopupOpen(false);
// }
// const handleApproval = () => {

//   const data = {
//     booking: id, 
//   status : 'accept',
//   guestHouseAllotted : selectedGuestHouse,
//   roomsAllotted : selectedRooms
// };

// console.log("Accept Body :",data);
// fetch(`${import.meta.env.VITE_API_URL}/admin/bookingApproval`, {
//   method:"POST",
//   mode: "cors",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-Type" : "application/json"
//   }
// })
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.error(err.message))
// openPopup();
// }

// const handleRooms = (rooms) => {
// setSelectedRooms(rooms);
// }




//   const handleDivClick1 = () => {
//     setSelectedGuestHouse(1);
//     // Find the div element by its id
//     const ghh1 = document.getElementById('gh1');
//     const ghh2 = document.getElementById('gh2');
//     const ghh3 = document.getElementById('gh3');
//     const sacg1 = document.getElementById('sacg1');
//     const sacg2 = document.getElementById('sacg2');
//     const sacg3 = document.getElementById('sacg3');
//     if (ghh1) {
//       // Modify the div's properties or content
//       ghh1.style.backgroundColor = 'rgb(8, 110, 101)';
//       ghh2.style.backgroundColor = 'rgb(74, 170, 162)';
//       ghh3.style.backgroundColor = 'rgb(74, 170, 162)';
//       // sacg1.style.pointerEvents = 'auto';
//       // sacg3.style.pointerEvents = 'none';
//       // sacg2.style.pointerEvents = 'none';
//     }
//   };
//   const handleDivClick2 = () => {
//     setSelectedGuestHouse(2);
//     // Find the div element by its id
//     const ghh1 = document.getElementById('gh1');
//     const ghh2 = document.getElementById('gh2');
//     const ghh3 = document.getElementById('gh3');
//     const sacg1 = document.getElementById('sacg1');
//     const sacg2 = document.getElementById('sacg2');
//     const sacg3 = document.getElementById('sacg3');

//     if (ghh2) {
//       // Modify the div's properties or content
//       ghh2.style.backgroundColor = 'rgb(8, 110, 101)';
//       ghh1.style.backgroundColor = 'rgb(74, 170, 162)';
//       ghh3.style.backgroundColor = 'rgb(74, 170, 162)';
//       // sacg1.style.pointerEvents = 'none';
//       // sacg3.style.pointerEvents = 'none';
//       // sacg2.style.pointerEvents = 'auto';

//     }
//   };
//   const handleDivClick3 = () => {
//     setSelectedGuestHouse(3);
//     // Find the div element by its id
//     const ghh1 = document.getElementById('gh1');
//     const ghh2 = document.getElementById('gh2');
//     const ghh3 = document.getElementById('gh3');
//     const sacg1 = document.getElementById('sacg1');
//     const sacg2 = document.getElementById('sacg2');
//     const sacg3 = document.getElementById('sacg3');

//     if (ghh3) {
//       // Modify the div's properties or content
//       ghh3.style.backgroundColor = 'rgb(8, 110, 101)';
//       ghh2.style.backgroundColor = 'rgb(74, 170, 162)';
//       ghh1.style.backgroundColor = 'rgb(74, 170, 162)';
//       // sacg3.style.pointerEvents = 'auto';
//       // sacg1.style.pointerEvents = 'none';
//       // sacg2.style.pointerEvents = 'none';


//     }
//   };


 
 
//   return (
//     <>
//     {/* <HomeHeader/> */}
//     <div className="mai">

//       {/* <div className="head1">
//         Booking Rooms
//       </div> */}
//       <div className="main1">
//         <div>
//           {/* <form className="form">
//             <label for="from">From:</label>
//             <input type="date" id="from" name="from" value="01-11-2023" style={{ marginRight: '20px' }}
//               // onChange={handleDateChange}
//               className="inputboc568" />
//             <label for="to">To:</label>
//             <input type="date" id="to" name="to" value="02-11-2023" className="inputboc568" />
//           </form> */}
//           <p className="para">Select Guest House</p>
//         </div>

//         <div className="flex-containerTY">
//           <div id="gh1" onClick={handleDivClick1}>Guest House 1</div>
//           <div id="gh2" onClick={handleDivClick2}>Guest House 2</div>
//           <div id="gh3" onClick={handleDivClick3}>Guest House 3</div>
//         </div>


        
//         <div className="new">
//           <div> Select {rooms} {rooms === 1 ? "room" : "rooms"}: </div>
//           <div className="roombooking">
//             <div id="available"></div>Available
//             <div id="selected"></div>Selected
//             <div id="booked"></div>Booked
//           </div>
//         </div>

//         {
//           selectedGuestHouse === 1 ? 
//           <div style={{ marginTop: '20px' }} id="sacg1">
//           SAC Guest House (Non A.C)
//           <MyComponent setRooms={handleRooms} maxRooms={rooms} n={8} />
//         </div> 
//         : selectedGuestHouse === 2 ? 
//         <div style={{ marginTop: '10px' }} id="sacg2">
//         Main Guest House (A.C)
//         <MyComponent setRooms={handleRooms} maxRooms={rooms} n={10} />
//       </div> 
//       :  <div style={{ marginTop: '10px' }} id="sacg3">
//       Mega Guest House (Non A.C)
//       <MyComponent setRooms={handleRooms} maxRooms={rooms} n={12} />
//     </div>
//         }
//         {/* <div style={{ marginTop: '20px' }} id="sacg1">
//           SAC Guest House (Non A.C)
//           <MyComponent n={8} />
//         </div>

//         <MyComponent n={8}/> 
//         <div style={{ marginTop: '10px' }} id="sacg2">
//           Guest House 1 (A.C)

//           <MyComponent n={10} />
//         </div>

//         <div style={{ marginTop: '10px' }} id="sacg3">
//           Mega Guest House (Non A.C)

//           <MyComponent n={12} />
//         </div> */}

//         <div className="book" onClick={handleApproval}>Book Now</div>
//       </div>
//     </div>
//     <Popup isOpen={isPopupOpen} onClose={closePopup} />
//     </>
//   );
// };

// export default BookingComponent;

import React, {useState} from 'react';
import './BookingComponent.css';
<<<<<<< HEAD
// import './BookingComponent.js
=======
>>>>>>> 7cbfe042a48abe0a3cd55b3324133af0d192c08f
import MyComponent from './MyComponent';
import Popup from '../PopUp/Popup';
import './MyComponent.css';
// import React, { useState } from 'react';

const BookingComponent = ({rooms, id, onBack}) => {
const [selectedGuestHouse, setSelectedGuestHouse] = useState(1);
const [selectedRooms, setSelectedRooms] = useState([]);
const [isPopupOpen, setPopupOpen] = useState(false);
const openPopup = () => {
  setPopupOpen(true);
};

const closePopup = () => {
  setPopupOpen(false);
}
const handleApproval = () => {

  const data = {
    booking: id, 
  status : 'accept',
  guestHouseAllotted : selectedGuestHouse,
  roomsAllotted : selectedRooms
};



console.log("Accept Body :",data);
fetch(`${import.meta.env.VITE_API_URL}/admin/bookingApproval`, {
  method:"POST",
  mode: "cors",
  body: JSON.stringify(data),
  headers: {
    "Content-Type" : "application/json"
  }
})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.error(err.message))
openPopup();
}

const handleRooms = (x) => {
setSelectedRooms(x);
}

  const handleDivClick1 = () => {
    setSelectedGuestHouse(1);
    // Find the div element by its id
    const ghh1 = document.getElementById('gh1');
    const ghh2 = document.getElementById('gh2');
    const ghh3 = document.getElementById('gh3');
    const sacg1 = document.getElementById('sacg1');
    const sacg2 = document.getElementById('sacg2');
    const sacg3 = document.getElementById('sacg3');
    if (ghh1) {
      // Modify the div's properties or content
      ghh1.style.backgroundColor = 'rgb(8, 110, 101)';
      ghh2.style.backgroundColor = 'rgb(74, 170, 162)';
      ghh3.style.backgroundColor = 'rgb(74, 170, 162)';
      // sacg1.style.pointerEvents = 'auto';
      

      // sacg3.style.pointerEvents = 'none';
      // sacg2.style.pointerEvents = 'none';
      // sacg3.className = 'roombookingu';
      // const childDivs = sacg3.querySelectorAll('div');

      // childDivs.forEach((childDiv) => {
      //   childDiv.className = 'divtt';
      // });




    }
  };
  const handleDivClick2 = () => {
    setSelectedGuestHouse(2);
    // Find the div element by its id
    const ghh1 = document.getElementById('gh1');
    const ghh2 = document.getElementById('gh2');
    const ghh3 = document.getElementById('gh3');
    const sacg1 = document.getElementById('sacg1');
    const sacg2 = document.getElementById('sacg2');
    const sacg3 = document.getElementById('sacg3');

    if (ghh2) {
      // Modify the div's properties or content
      ghh2.style.backgroundColor = 'rgb(8, 110, 101)';
      ghh1.style.backgroundColor = 'rgb(74, 170, 162)';
      ghh3.style.backgroundColor = 'rgb(74, 170, 162)';
      // sacg1.style.pointerEvents = 'none';
      // sacg3.style.pointerEvents = 'none';
      // sacg2.style.pointerEvents = 'auto';

    }
  };
  const handleDivClick3 = () => {
    setSelectedGuestHouse(3);
    // Find the div element by its id
    const ghh1 = document.getElementById('gh1');
    const ghh2 = document.getElementById('gh2');
    const ghh3 = document.getElementById('gh3');
    const sacg1 = document.getElementById('sacg1');
    const sacg2 = document.getElementById('sacg2');
    const sacg3 = document.getElementById('sacg3');

    if (ghh3) {
      // Modify the div's properties or content
      ghh3.style.backgroundColor = 'rgb(8, 110, 101)';
      ghh2.style.backgroundColor = 'rgb(74, 170, 162)';
      ghh1.style.backgroundColor = 'rgb(74, 170, 162)';
      // sacg3.style.pointerEvents = 'auto';
      // sacg1.style.pointerEvents = 'none';
      // sacg2.style.pointerEvents = 'none';


    }
  };


  return (
    <div className="mai">
      
      <span onClick={onBack} style={{fontSize:"13px",cursor:"pointer",position:"absolute", color: "white",borderRadius:"4px", backgroundColor: "#0073cf", marginLeft: "2px", marginTop: "2px", padding: "2px"}}>
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
          <div id="gh1" style={{cursor:"pointer"}} onClick={handleDivClick1}>Guest House 1</div>
          <div id="gh2" style={{cursor:"pointer"}} onClick={handleDivClick2}>Guest House 2</div>
          <div id="gh3" style={{cursor:"pointer"}} onClick={handleDivClick3}>Guest House 3</div>
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
      :  <div style={{ marginTop: '10px' }} id="sacg3">
      Mega Guest House (Non A.C)
      <MyComponent setRooms={handleRooms} maxRooms={rooms} n={12} />
 </div>
       }
        {/* <div style={{ marginTop: '20px' }} id="sacg1"> */}
          {/* SAC Guest House (Non A.C) */}
          {/* <MyComponent n={8,2}/> */}
          {/* <MyComponent n={8} maxRooms={rooms} /> */}
        {/* </div>     */}
        {/* <div style={{ marginTop: '10px' }} id="sacg2"> */}
          {/* Guest House 1 (A.C) */}
         
          {/* <MyComponent  n={10} maxRooms={rooms}/> */}
        {/* </div> */}
        {/* <div style={{ marginTop: '10px' }} id="sacg3"> */}
          {/* Mega Guest House (Non A.C) */}

          {/* <MyComponent n={10} maxRooms={rooms}/> */}
        {/* </div>  */}

        <div className='bookButtons'>
        <div className="book" style={{cursor:"pointer"}} onClick={handleApproval}>Book Now</div>
        <div class="dropdown">
          {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            TIME
          </button> */}
            {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">24</a></li>
              <li><a class="dropdown-item" href="#">48</a></li>
              <li><a class="dropdown-item" href="#">72</a></li>
            </ul> */}
            <select style={{ position:'relative', right: "5rem", bottom: "6px"}}>
              <option>
                24 hrs
              </option>
              <option>
                48 hrs
              </option>
              <option>
                72 hrs
              </option>


            </select>
        </div>
        </div>

   <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </div>
  );
};

export default BookingComponent;

