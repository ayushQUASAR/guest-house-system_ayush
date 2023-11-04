import React, {useState, useContext} from 'react';
import { FormContext } from "../ContextHooks/FormContext";
import './BookingComponent1.css';

const BookingComponent1 = ({onBookNowClick}) => {
  const [selectedGuestHouse, setSelectedGuestHouse] = useState(-1);
  const [rooms,setRooms] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const {updateFormData} = useContext(FormContext);

  const handleClick = () => {
    updateFormData("guestHouseSelected", selectedGuestHouse);
    updateFormData("roomsSelected", rooms);
    updateFormData("arrivalDate", startDate);
    updateFormData("departureDate", endDate);
  onBookNowClick({
    guestHouseSelected: selectedGuestHouse,
    roomsSelected: rooms,
    startDate,
    endDate
  });
}

  const handleDivClick11 = () => {

    setSelectedGuestHouse(1);
    // Find the div element by its id
    const gh11 = document.getElementById('gh11');
    const gh21 = document.getElementById('gh21');
    const gh31 = document.getElementById('gh31');
    if (gh11) {
      // Modify the div's properties or content
      gh11.style.backgroundColor = 'rgb(8, 110, 101)';
      gh21.style.backgroundColor = 'rgb(74, 170, 162)';
      gh31.style.backgroundColor = 'rgb(74, 170, 162)';

    }
  };

  const handleDivClick21 = () => {
    setSelectedGuestHouse(2);
    // Find the div element by its id
    const gh11 = document.getElementById('gh11');
    const gh21 = document.getElementById('gh21');
    const gh31 = document.getElementById('gh31');
    if (gh11) {
      // Modify the div's properties or content
      gh21.style.backgroundColor = 'rgb(8, 110, 101)';
      gh11.style.backgroundColor = 'rgb(74, 170, 162)';
      gh31.style.backgroundColor = 'rgb(74, 170, 162)';

    }
  };
  const handleDivClick31 = () => {

    setSelectedGuestHouse(3);
    // Find the div element by its id
    const gh11 = document.getElementById('gh11');
    const gh21 = document.getElementById('gh21');
    const gh31 = document.getElementById('gh31');
    if (gh11) {
      // Modify the div's properties or content
      gh31.style.backgroundColor = 'rgb(8, 110, 101)';
      gh21.style.backgroundColor = 'rgb(74, 170, 162)';
      gh11.style.backgroundColor = 'rgb(74, 170, 162)';

    }
  };





  return (
    <div className="main12">
      <div className="head12">Booking Rooms</div>
      <div>
        <form className="form34">
          <label for="from">From:</label><br className='breakk'></br>
          <input type="date" id="from" name="from" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="inputboc56" style={{ marginRight: '20px' }} />

          <label for="to">To:</label>
          <input type="date" id="to" name="to" value={endDate} onChange={(e) => setEndDate(e.target.value)}  className="inputboc56" />
        </form>
        <p className="para64">Select Guest House</p>
      </div>
      <div className="flex-container56">
        <div id="gh11" onClick={handleDivClick11}>Guest House 1</div>
        <div id="gh21" onClick={handleDivClick21}>Guest House 2</div>
        <div id="gh31" onClick={handleDivClick31}>Guest House 3</div>
      </div>
      <div>
        <form className="form134">
          <label for="noofrooms">Enter the No of Rooms:</label>
          <input type="number" id="from" name="from" value={rooms} onChange={(e) => setRooms(e.target.value)} className="inputboc56" />
        </form>
      </div>
      <div className="book24" onClick={handleClick}>Book Now</div>
    </div>
  );
};

export default BookingComponent1;
