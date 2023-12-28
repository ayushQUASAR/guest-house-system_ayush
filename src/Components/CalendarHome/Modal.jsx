const RoomDetailsModalAC = ({ isOpen, onClose, acCount }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay-calendar" onClick={onClose}>
      <div className="modal-ac">
        <span className="CloseBtn-modal-calendar" onClick={onClose}>
          Close
        </span>
        <h1 className="modalHeader">Room Details</h1>
        <div className="modal-container-calendar">
          <div className="container-modal-calendar">
            <h2 className="modal-calendar-nameHouse">Main Guest House</h2>
            <h3 className="modal-calendar-loc">Location : Near Girls Hostel</h3>

            <h2 className="total-val-present-ac">
              Total Rooms Available : {acCount}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoomDetailsModalAC;
