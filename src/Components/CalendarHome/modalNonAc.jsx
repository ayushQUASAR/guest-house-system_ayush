const RoomDetailsNonAc = ({ isOpen, onClose, nonAcCount1, nonAcCount2 }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay-calendar">
      <div className="modal-nonAc">
        <span className="CloseBtn-modal-calendar" onClick={onClose}>
          Close
        </span>
        <h1 className="modalHeader">Room Details</h1>
        <div className="modal-nonac-container-calendar">
          <div className="container-modal-nonac-calendar">
            <h2 className="modal-nonac-calendar-nameHouse">Snackers</h2>
            <h3 className="modal-nonac-calendar-loc">
              Location : Near Chemical Department
            </h3>

            <h2 className="total-val-present-nonac">
              Total Rooms Available : {8 - nonAcCount1}
            </h2>
          </div>
          <div className="container-modal-nonac-calendar">
            <h2 className="modal-nonac-calendar-nameHouse">Mega Guest House</h2>
            <h3 className="modal-nonac-calendar-loc">
              Location : Near Mega Boys Hostel
            </h3>

            <h2 className="total-val-present-nonac">
              Total Rooms Available : {12 - nonAcCount2}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoomDetailsNonAc;
