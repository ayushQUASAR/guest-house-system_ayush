import React, { useEffect, useState } from 'react'
import "../style/userdashboard.css"

const UserDashboard = ({user}) => {
let formattedEndDate=null
let formattedStartDate=null;
// console.log("id",user.userDetails._id)


// Format the date as you need

  const [filteredUser,setFilterdetails]=useState()
  useEffect(()=>{


    const targetId = "654c11f0f975a0300e15217d"; // Replace with the ID you're looking for

    fetch("https://guest-house-back.onrender.com/booking/")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of user details
         const filteredUserDetails = data.filter(obj => obj.roomBooker._id === user.userDetails._id);
    
        // console.log("hi",filteredUserDetails);
        setFilterdetails(filteredUserDetails.id);
    
        // Now you can use filteredUserDetails in your component or perform further actions.
      })
      .catch((error) => console.error(error));
    
  },[ ])
  const adminComments = [
    {
      id: 1,
      comment: 'This is an unresolved comment from the admin.',
      status: 'Unresolved',
      dateTime: '2023-11-08 09:30:00',
    },
    {
      id: 2,
      comment: 'This is a resolved comment from the admin.',
      status: 'Resolved',
      dateTime: '2023-11-09 14:15:00',
    }]
 const data=[ {
    id: 1,
    checkIn: '2023-11-08',
    checkOut: '2023-11-12',
    guestHouseName: 'Guest House 1',
    paymentStatus: 'Paid',
    ApprovalStatus: 'Approved',
    paymentFee: 200,
    comments: 'No special comments',
  },
  {
    id: 2,
    checkIn: '2023-11-10',
    checkOut: '2023-11-15',
    guestHouseName: 'Guest House 2',
    paymentStatus: 'Pending',
    ApprovalStatus: 'Approved',
    paymentFee: 250,
    comments: 'Payment due soon',
  },
  {
    id: 3,
    checkIn: '2023-11-12',
    checkOut: '2023-11-18',
    ApprovalStatus: 'Approved',
    guestHouseName: 'Guest House 3',
    paymentStatus: 'Paid',
    paymentFee: 180,
    comments: 'No comments',
  },
];

return (
  <>
  <div className="user-dashboard-content">
  <div className="user-dashboard-table-container">
    <table className="user-dashboard-table">
      <thead>
        <tr>
          <th className="user-dashboard-header">Username</th>
          <th className="user-dashboard-header">Check In</th>
          <th className="user-dashboard-header">Check Out</th>
          <th className="user-dashboard-header">Address</th>
          <th className="user-dashboard-header">Guest House Name</th>
          <th className="user-dashboard-header">Approval Status</th>
          
          <th className="user-dashboard-header">Designation</th>
          {/* <th className="user-dashboard-header">Comments</th> */}
          {/* <th className="user-dashboard-header">Payment Window</th> */}
          {/* <th className="user-dashboard-header">Time Left</th> */}
          <th className="user-dashboard-header ">Payment Button</th>
        </tr>
      </thead>
      <tbody>

        {
          filteredUser!=null?

       filteredUser.map((item) => {
        {formattedStartDate = new Date(item.startDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

         formattedEndDate = new Date(item.endDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
          
          
          
          
          ;}
        return (
          <tr key={item.id} className="user-dashboard-row-even">
               <td>{item.name}</td>
            <td>{formattedStartDate}</td>
            <td>{formattedEndDate}</td>
         
            <td>{item.address}</td>
            {/* <td></td> */}
            {/* <td></td> */}
            <td>{item.guestHouseAllotted}</td>
        
            <td>{item.status}</td>
            <td>{item.designation}</td>
            {/* {item.status==="approved" ? <td>{item.paymentstatus}</td> :<div>wait for approval</div> } */}
            
          
            {/* <td>Rs.{item.paymentFee}</td> */}
            {/* <td>{item.comments}</td> */}
            {/* <td>5 days</td> */}
            {/* <td>2 hours</td> */}
            <td>
             {item.status==="approved" ?<button className="user-dashboard-payment-button"> Pay Now</button>:<div>Wait for Approval</div>}
            </td>
          </tr>)})
        :<div>No Data Exist </div>}
      </tbody>
    </table>
  </div>
  </div>
  <div>
    <br/>
     {/* <div className="admin-comments-table-container">
      <table className="admin-comments-table">
        <thead>
          <tr>
            <th>Comment</th>
            <th>Status</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {adminComments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.comment}</td>
              <td className={`comment-status ${comment.status.toLowerCase()}`}>
                {comment.status}
              </td>
              <td>{comment.dateTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> */}
  </div>
  </>
);
};


export default  UserDashboard;