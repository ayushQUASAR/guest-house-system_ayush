import React, { useState, useEffect } from 'react';
import './Receipt.css';
import { useUserContext } from '../ContextHooks/UserContext';
import TestGate from './TestGate';


// import { useUserContext } from './ContextHooks/UserContext';
const Receipt = () => {
  const [invoiceData, setInvoiceData] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const { userId } = useUserContext();
  // fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/bookingHistory`);
//   useEffect(() => {
//     if (userId) {
//       fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`)
//         .then((response) => response.json())
//         .then((data) => {
//           console.log('Fetched data:', data);
//           setInvoiceData(data);
          
//           // Chain the next fetch for booking history here
//           return fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/bookingHistory`);
//         })
//         .then((response) => response.json())
//         .then((data2) => {
//             if (data2) {
//               console.log('Booking data:', data2);
//               setBookingData(data2);
//             } else {
//               console.log('Booking data is undefined or empty.');
//             }
//           })
          
//         .catch((error) => console.error('Error fetching data:', error));
//     } else {
//       console.error('Invalid ObjectId:', userId);
//     }
//   }, [userId]);
  
useEffect(() => {
        if (userId) {
            fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/bookingHistory`)
            .then((response) => response.json())
            .then((data) => {
              console.log('Fetched data:', data);
              setInvoiceData(data);
              
              // Chain the next fetch for booking history here
             
            }) .catch((error) => console.error('Error fetching data:', error));
                } else {
                  console.error('Invalid ObjectId:', userId);
                }
              }, [userId]);

   console.log(invoiceData)
  const handlePrint = () => {
    window.print();
  };

  if (!invoiceData) {
    // Loading state, you can customize this part as per your needs
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <strong>NIT Jalandhar - Guest House</strong>
          <strong>PAYMENT RECEIPT</strong>
        </div>
        <div className="card-body">
        <div className="row mb-4">
  <div className="col-sm-6">
    <h6 className="mb-3">From:</h6>
    <div>
      <strong>Director</strong><br/>
      <strong> NIT JALANDHAR</strong>
    </div>
    <div>{invoiceData.senderAddressLine1}</div>
    <div>{invoiceData.senderAddressLine2}</div>
    {/* <div>Email: {invoiceData.userDetails.email}</div> */}
    {/* <div>Phone: {invoiceData.senderPhone}</div> */}
  </div>

  <div className="col-sm-6">
    <h6 className="mb-3">To:</h6>
    <div>
      <strong>{invoiceData.userDetails.name}</strong>
    </div>
    <div>{invoiceData.recipientAddressLine1}</div>
    <div>{invoiceData.recipientAddressLine2}</div>
    <div>Email: {invoiceData.userDetails.email}</div>
    <div>Phone: {invoiceData.userDetails.phone}</div>
  </div>
</div>


          <div className="table-responsive-sm">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="center">#</th>
                  <th>Mbh guestHouse</th>
                  <th>Duration of stay</th>
                  <th className="right">{invoiceData.roomsSelected}</th>
                  <th className="center">Charges of 1 Room</th>
                  <th className="right">Total</th>
                </tr>
              </thead>
              <tbody>
  {invoiceData.items && invoiceData.items.map((item) => (
    <tr key={item.id}>
      <td className="center">{item.id}</td>
      <td className="left strong">{item.itemName}</td>
      <td className="left">{item.description}</td>
      <td className="right">{`$${item.unitCost}`}</td>
      <td className="center">{item.quantity}</td>
      <td className="right">{`$${item.total}`}</td>
    </tr>
  ))}
</tbody>

            </table>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-5"></div>

            <div className="col-lg-4 col-sm-5 ml-auto">
              <table className="table table-clear">
                <tbody>
                  <tr>
                    <td className="left">
                      <strong>Subtotal</strong>
                    </td>
                    <td className="right">{`$${invoiceData.subtotal}`}</td>
                  </tr>
                  <tr>
                    <td className="left">
                      <strong>Discount (20%)</strong>
                    </td>
                    <td className="right">{`$${invoiceData.discount}`}</td>
                  </tr>
                  <tr>
                    <td className="left">
                      <strong>VAT (10%)</strong>
                    </td>
                    <td className="right">{`$${invoiceData.vat}`}</td>
                  </tr>
                  <tr>
                    <td className="left">
                      <strong>Total</strong>
                    </td>
                    <td className="right">
                      <strong>{`$${invoiceData.total}`}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button onClick={handlePrint}>Print</button>
      </div>
    </div>
  );
};

export default Receipt;
