import React, { useState } from "react";
import BookedRoomsList from "./BookedRoomsList";
import "../style/BookedRooms.css";
function BookedRooms() {
  const [guestHouse, setGuestHouse] = useState(null);
  const handleClick = (e) => {
    // console.log(e.target.textContent);
    // alert("You have clicked on the button");
    setGuestHouse(e.target.textContent);
  };

  return (
    <div className="BookedRoomsContainer">
      <div className="bookedRoomsHeading">BOOKED ROOMS DETAILS</div>
      <div className="upperRow">
        <h3 className="guestHouseSelectionHeading">SELECT GUEST HOUSE</h3>
        <div className="guestHouseDivs">
          <div className="noOfGuestHouse" onClick={handleClick}>
          INSTITUTE GUEST HOUSE
          </div>

          <div className="noOfGuestHouse" onClick={handleClick}>
            MEGA GUEST HOUSE
          </div>
          <div className="noOfGuestHouse" onClick={handleClick}>
            SAC GUEST HOUSE
          </div>
        </div>
      </div>
      {guestHouse && (
        <div
          className="bookedRoomsList"
          style={{ marginLeft: "0px", marginRight: "0px" }}
        >
          <BookedRoomsList guestHouse={guestHouse} />
        </div>
      )}
    </div>
  );
}

export default BookedRooms;
