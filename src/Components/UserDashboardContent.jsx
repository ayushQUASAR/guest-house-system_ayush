import React from 'react'
import "../style/userdashboard.css"

const UserDashboard = () => {
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
    guestHouseName: 'Sample Guest House 1',
    paymentStatus: 'Paid',
    ApprovalStatus: 'Approved',
    paymentFee: 200,
    comments: 'No special comments',
  },
  {
    id: 2,
    checkIn: '2023-11-10',
    checkOut: '2023-11-15',
    guestHouseName: 'Sample Guest House 2',
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
    guestHouseName: 'Sample Guest House 3',
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
          <th className="user-dashboard-header">Check In</th>
          <th className="user-dashboard-header">Check Out</th>
          <th className="user-dashboard-header">Guest House Name</th>
          <th className="user-dashboard-header">Guest House Name</th>
          <th className="user-dashboard-header">Approval Status</th>
          
          <th className="user-dashboard-header">Payment Fee</th>
          <th className="user-dashboard-header">Comments</th>
          <th className="user-dashboard-header">Payment Window</th>
          <th className="user-dashboard-header">Time Left</th>
          <th className="user-dashboard-header ">Payment Button</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="user-dashboard-row-even">
            <td>{item.checkIn}</td>
            <td>{item.checkOut}</td>
            <td>{item.guestHouseName}</td>
            <td>{item.ApprovalStatus}</td>
            <td>{item.paymentStatus}</td>
          
            <td>Rs.{item.paymentFee}</td>
            <td>{item.comments}</td>
            <td>5 days</td>
            <td>2 hours</td>
            <td>
              <button className="user-dashboard-payment-button">{item.paymentStatus==='Paid' ?'Pay Now':'Paid'}</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
  <div>
     <div className="admin-comments-table-container">
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
    </div>
  </div>
  </>
);
};


export default  UserDashboard;