// import "../../style/popup_booking.css"

const RoomDetailsModal = ({ isOpen, onClose, roomDetails }) => {
  if (!isOpen) return null;
  console.log("hiiobb", isOpen);
  return (
    
     <div className="popup-roombooking"> 
      <div className="popup-modal">
        <span className="CloseBtn" onClick={onClose}>
          Close
        </span>
        <h1 className="poupmodalHeader">Room Details</h1>
        <div className="allGuestHouses-modal">
          {roomDetails.map((room, index) => (
            <div key={index} className="guestHouseDetails">
              <p className="guestHouseName-Modal">{room.guestHouseName}</p>
              <p className="totalRoomsAvailable">
                Total Rooms Available: {room.acCount + room.nonACCount}
              </p>
              <p>AC Rooms Available: {room.acCount}</p>
              <p>Non-AC Available: {room.nonACCount}</p>
              <p>Location : {room.location}</p>
              <p className="totalRoomsAvailable">Room Information</p>
              <p>Number of Beds : {room.numOfBeds}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
   
  );
};
export default RoomDetailsModal;
