import React from 'react';
import './BookingComponent.css';

const BookingComponent = () => {
  return (
    <div className="mai">
      <div className="head1">
        Booking Rooms
      </div>
      <div className="main1">
        <div>
          <form className="form">
            <label for="from">From:</label>
            <input type="date" id="from" name="from" value="01-11-2023" style={{ marginRight: '20px' }} />
            <label for="to">To:</label>
            <input type="date" id="to" name="to" value="02-11-2023" />
          </form>
          <p className="para">Select Guest House</p>
        </div>
        <div className="flex-containerTY">
          <div>Guest House 1</div>
          <div>Guest House 2</div>
          <div>Guest House 3</div>
        </div>
        <div className="new">
          <div> Select Your Room(s):</div>
          <div className="roombooking">
            <div></div>Available
            <div></div>Selected
            <div></div>Booked
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          SAC Guest House (Non A.C)
        </div>
        <div className="roombooking">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div style={{ marginTop: '10px' }}>
          Guest House 1 (A.C)
        </div>
        <div className="roombooking">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div style={{ marginTop: '10px' }}>
          Mega Guest House (Non A.C)
        </div>
        <div className="roombooking">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="book">Book Now</div>
      </div>
    </div>
  );
};

export default BookingComponent;
