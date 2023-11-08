// import React from 'react';
import './BookingComponent.css';
import './BookingCompoment.js'
import MyComponent from './MyComponent';
import './MyComponent.css';
// import React, { useState } from 'react';

const BookingComponent = () => {



  const handleDivClick1 = () => {
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
      sacg1.style.pointerEvents = 'auto';
      

      sacg3.style.pointerEvents = 'none';
      sacg2.style.pointerEvents = 'none';
      // sacg3.className = 'roombookingu';
      // const childDivs = sacg3.querySelectorAll('div');

      // childDivs.forEach((childDiv) => {
      //   childDiv.className = 'divtt';
      // });




    }
  };
  const handleDivClick2 = () => {
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
      sacg1.style.pointerEvents = 'none';
      sacg3.style.pointerEvents = 'none';
      sacg2.style.pointerEvents = 'auto';

    }
  };
  const handleDivClick3 = () => {
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
      sacg3.style.pointerEvents = 'auto';
      sacg1.style.pointerEvents = 'none';
      sacg2.style.pointerEvents = 'none';


    }
  };
 





  return (
    <div className="mai">

      <div className="head1">
        Booking Rooms
      </div>
      <div className="main1">
        <div>
    
          <p className="para">Select Guest House</p>
        </div>

        <div className="flex-containerTY">


          <div id="gh1" onClick={handleDivClick1}>Guest House 1</div>
          <div id="gh2" onClick={handleDivClick2}>Guest House 2</div>
          <div id="gh3" onClick={handleDivClick3}>Guest House 3</div>



        </div>


        
        <div className="new">
          <div> Select Your Room(s):</div>
          <div className="roombooking">
            <div id="available"></div>Available
            <div id="selected"></div>Selected
            <div id="booked"></div>Booked
          </div>
        </div>


        <div style={{ marginTop: '20px' }} id="sacg1">
          SAC Guest House (Non A.C)
          {/* <MyComponent n={8,2}/> */}
          <MyComponent n={8} maxRooms={2} />
        </div>

        
        <div style={{ marginTop: '10px' }} id="sacg2">
          Guest House 1 (A.C)
         
          <MyComponent n={10} maxRooms={2}/>
        </div>

        <div style={{ marginTop: '10px' }} id="sacg3">
          Mega Guest House (Non A.C)

          <MyComponent n={10} maxRooms={2}/>
        </div>


        <div className="book">Book Now</div>
      </div>
    </div>
  );
};

export default BookingComponent;
