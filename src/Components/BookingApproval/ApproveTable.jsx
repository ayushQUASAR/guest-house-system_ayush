import React, {useState, useEffect} from "react";
// import  "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
 import "./Approvetable.css"
import BookingComponent from "../BOOKING/BookingComponent";



const Approvaltable = ({onSecondPage}) => { 
const [pendingBooking, setPendingBooking] = useState(null);
const [isFirstPage, setIsFirstPage] = useState(true);
const [currentUser, setCurrentUser] = useState(null);

useEffect(()=> {
  fetch("https://guest-house-back.onrender.com/booking/approved/pending")
  .then((res) => res.json())
  .then((data) =>{ setPendingBooking(data); console.log(data)})
  .then((err) => console.log(err));
}, []);
// useEffect(()=> {
//     fetch("https://guest-house-back.onrender.com/booking/approved/pending")
//     .then((res) => res.json())
//    .then((data) => setRequests(() => {
//       const dataSet = data.map((eachData) => {
//        return {...eachData, accepting: false}
//       })

const handleSubmit = () => {

}
const handleApproval = (id, status) => {
  if(status === 'accept') {
    setIsFirstPage(false);
    onSecondPage();
  }

  if(status === 'reject') {
    const rejectBody = {
      booking: id,
     status: "reject", 
   };

   console.log("reject body: ",rejectBody);
            fetch(`${import.meta.env.VITE_API_URL}/admin/bookingApproval`, {
        method: "POST",
        mode:"cors",
        body : JSON.stringify(rejectBody),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.json())
      .then((data)=> {
        console.log(data);
        window.alert(data.message);

        setPendingBooking((prev) => {
                const selectedUsers  = prev.filter((user) => user.user._id !== id);
                return selectedUsers;
        })
      
      })
      .catch((err) => console.log(err));

  }
}



// pendingUsers.map((user, index) => {
// return  <tr key={user._id}>
//                <td scope="row">{index+1}</td>
//             <td>{user.name}</td> 
//             <td>{user.email}</td>
//             <td>{user.phone}</td>
//             <td>{user.refInfo}</td> 
//             <td><button type="button" class="btn btn-success btn-sm">Accept</button> <button type="button" class="btn btn-danger btn-sm">Reject</button></td>
//   </tr>
// })

  return (
    <>
    {
      isFirstPage ? <div class="approval-table">
      <div className="d-flex flex-row justify-content-between">
      
          <div>S.No</div>
          <div>Name</div>
          <div>Guest House</div> 
          <div>No. of Rooms</div>
          <div>Email</div>
          <div>Contact Number</div>
          <div>Reason of Booking</div>
          <div>Reference</div>
          <div>Approval</div>
      
      </div>

      <div className="table-content">
        {
         pendingBooking && pendingBooking.length > 0 &&  pendingBooking.map((user, index) => {
            return  <div className="d-flex flex-row justify-content-between" key={user._id}>
                           <div>{index+1}</div>
                        <div>{user.name}</div> 
                        <div>{user.guestHouseSelected}</div>
                        <div>{user.roomsSelected}</div>
                        <div>{user.email}</div>
                        <div>{user.phone}</div>
                        <div>{user.roomBooker.name}</div> 
                        <div>{user.purpose}</div>
                        <div><button type="button" class="btn btn-success btn-sm mr-3" onClick={()=> {setCurrentUser(user);handleApproval(user._id, 'accept')}}>Accept</button> <button type="button" class="btn btn-danger btn-sm" onClick={() => handleApproval(user._id, 'reject')}>Reject</button></div>
              </div>
            })
        }


       
      </div>
    </div> : <BookingComponent id={currentUser._id} rooms={currentUser.roomsSelected} onSubmit={handleSubmit}/>
    }
      {/* <div class="approval-table">
        <div className="d-flex flex-row justify-content-between">
        
            <div>S.No</div>
            <div>Name</div>
            <div>Guest House</div> 
            <div>No. of Rooms</div>
            <div>Email</div>
            <div>Contact Number</div>
            <div>Reason of Booking</div>
            <div>Reference</div>
            <div>Approval</div>
        
        </div>

        <div className="table-content">
          {
           pendingBooking && pendingBooking.length > 0 &&  pendingBooking.map((user, index) => {
              return  <div className="d-flex flex-row justify-content-between" key={user._id}>
                             <div>{index+1}</div>
                          <div>{user.name}</div> 
                          <div>{user.guestHouseSelected}</div>
                          <div>{user.roomsSelected}</div>
                          <div>{user.email}</div>
                          <div>{user.phone}</div>
                          <div>{user.roomBooker.name}</div> 
                          <div>{user.purpose}</div>
                          <div><button type="button" class="btn btn-success btn-sm mr-3" onClick={()=> {handleApproval(user._id, 'accept')}}>Accept</button> <button type="button" class="btn btn-danger btn-sm" onClick={() => handleApproval(user._id, 'reject')}>Reject</button></div>
                </div>
              })
          }


         
        </div>
      </div> */}
    </>
  );
};

export default Approvaltable;
