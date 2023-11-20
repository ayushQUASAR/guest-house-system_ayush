import React, { useEffect, useState } from 'react'
import "../style/userdashboard.css"

const UserDashboard = ({ user }) => {
  let formattedEndDate = null
  let formattedStartDate = null;




  // Format the date as you need
  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  };
  const [filteredUser, setFilterdetails] = useState(null)
  const [item, setItem] = useState()
  useEffect(() => {

    console.log("idbruh", user)
    const targetId = "654c11f0f975a0300e15217d"; // Replace with the ID you're looking for

    fetch(`${import.meta.env.VITE_API_URL}/users/bookingHistory`)
      .then((response) => response.json())
      .then((data) => {
        console.log("bro", data)
        // Assuming data is an array of user details
        if (data.userDetails._id === user.userDetails._id) {
          // If it matches, set the filteredUserDetails
          const filteredUserDetails = data;

          //  const filteredUserDetails = data.filter(obj => obj.userDetails._id === user.userDetails._id);

          console.log("hi", filteredUserDetails);
          setItem(filteredUserDetails.bookingHistory)
          setFilterdetails(filteredUserDetails);
        }

        // Now you can use filteredUserDetails in your component or perform further actions.
      })
      .catch((error) => console.error(error));

  }, [])
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
  const data = [{
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

           

      {/* //  filteredUser.map((item) => {
      //   {formattedStartDate = new Date(item.bookingHistory.startDate).toLocaleDateString('en-US', {
      //     year: 'numeric',
      //     month: 'long',
      //     day: 'numeric',
      //   });

      //    formattedEndDate = new Date(item.bookingHistory.endDate).toLocaleDateString('en-US', {
      //     year: 'numeric',
      //     month: 'long',
      //     day: 'numeric',
      //   }); */}




      
       {/* return ( */}
         {/* <tr key={item._id} className="user-dashboard-row-even">
              <td>{item.bookingHistory.name}</td>
           <td>{formattedStartDate}</td>
           <td>{formattedEndDate}</td>
            <td>{item.bookingHistory.address}</td>
            <td></td>
        <td></td>
         <td>{item.bookingHistory.guestHouseAllotted}</td>

        <td>{item.bookingHistory.status}</td> */}
         {/* <td>{item.bookingHistory.designation}</td> */}
       {/* {item.status==="approved" ? <td>{item.paymentstatus}</td> :<div>wait for approval</div> } */}


        {/* <td>Rs.{item.paymentFee}</td> */}
        {/* <td>{item.comments}</td> */}
        {/* <td>5 days</td> */}
        {/* <td>2 hours</td> */}
        {/* <td>
         {item.status==="approved" ?<button className="user-dashboard-payment-button"> Pay Now</button>:<div>Wait for Approval</div>}
        </td>
      </tr>)
     :<div>No Data Exist </div> */}


 
{  filteredUser &&
                filteredUser.bookingHistory._id !=null?

  <tr className = "user-dashboard-row-even" >
    <td>{item.name}</td>
    <td>{formattedStartDate}</td>
    <td>{formattedEndDate}</td>
    <td>{item.address}</td>
    {/* Other columns */ }
    <td> { item.guestHouseAllotted }</td>
            <td>{item.status}</td>
            <td>{item.designation}</td>
            {/* Add your other columns as needed */}
            <td>
              {item.status === "approved" ? (
                <button className="user-dashboard-payment-button">Pay Now</button>
              ) : (
                <div>Wait for Approval</div>
              )}
            </td>
          </tr>
          
          :<div>Doesnt not Exit</div> } 



        </tbody>
      </table>
    </div >
  </div >
  <div>
    <br />

  </div>
  </>
);
};


export default UserDashboard;