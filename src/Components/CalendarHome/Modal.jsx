const RoomDetailsModalAC = ({
  isOpen,
  onClose,
  acCount,
  nonAcCount1,
  nonAcCount2,
}) => {
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
            <h3 className="modal-calendar-loc">
              Location : Near Director's Bungalow
            </h3>

            <h2 className="total-val-present-ac">
              Total Rooms Available : {acCount}
            </h2>
          </div>
          <div className="container-modal-calendar">
            <h2 className="modal-calendar-nameHouse">SAC Guest House</h2>
            <h3 className="modal-calendar-loc">
              Location : Student Activities Center
            </h3>

            <h2 className="total-val-present-ac">
              Total Rooms Available : {8 - nonAcCount1}
            </h2>
          </div>
          <div className="container-modal-calendar">
            <h2 className="modal-calendar-nameHouse">Mega Guest House</h2>
            <h3 className="modal-calendar-loc">
              Location : Near Mega Boys Hostel
            </h3>

            <h2 className="total-val-present-ac">
              Total Rooms Available : {12 - nonAcCount2}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoomDetailsModalAC;
