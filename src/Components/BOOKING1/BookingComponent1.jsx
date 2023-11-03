import React from 'react';
import './BookingComponent1.css';

const BookingComponent1 = () => {
  return (
    <div className="main1">
      <div className="head1">Booking Rooms</div>
      <div>
        <form className="form">
          <label for="from">From:</label>
          <input type="date" id="from" name="from" value="01-11-2023" className="inputboc" style={{ marginRight: '20px' }} />
          <label for="to">To:</label>
          <input type="date" id="to" name="to" value="02-11-2023" className="inputboc" />
        </form>
        <p className="para">Select Guest House</p>
      </div>
      <div className="flex-container">
        <div>Guest House 1</div>
        <div>Guest House 2</div>
        <div>Guest House 3</div>
      </div>
      <div>
        <form className="form1">
          <label for="noofrooms">Enter the No of Rooms:</label>
          <input type="number" id="from" name="from" value="01" className="inputboc" />
        </form>
      </div>
      <div className="book">Book Now</div>
    </div>
  );
};

export default BookingComponent1;
