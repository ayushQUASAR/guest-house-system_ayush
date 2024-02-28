import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Receipt.css';
import { useUserContext } from '../ContextHooks/UserContext';
import TestGate from './TestGate';


// import { useUserContext } from './ContextHooks/UserContext';
const Receipt = () => {
  const [invoiceData, setInvoiceData] = useState(null);
  const location = useLocation();
  const bookingId = location.state?.bookingId;
  console.log(bookingId);
  const { userId } = useUserContext();
  // fetch(${import.meta.env.VITE_API_URL}/users/${userId}/bookingHistory);
  //   useEffect(() => {
  //     if (userId) {
  //       fetch(${import.meta.env.VITE_API_URL}/users/${userId})
  //         .then((response) => response.json())
  //         .then((data) => {
  //           console.log('Fetched data:', data);
  //           setInvoiceData(data);

  //           // Chain the next fetch for booking history here
  //           return fetch(${import.meta.env.VITE_API_URL}/users/${userId}/bookingHistory);
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
      fetch(`${import.meta.env.VITE_API_URL}/booking/${bookingId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Fetched data:', data);
          setInvoiceData(data);

          // Chain the next fetch for booking history here

        }).catch((error) => console.error('Error fetching data:', error));
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
  const noOfDays = (startDate, endDate) => {
    const startDateTime = new Date(startDate).getTime();
    const endDateTime = new Date(endDate).getTime();
    const differenceInMilliseconds = endDateTime - startDateTime;
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    return Math.round(differenceInDays);
  };
  const guestHouse = ["Institute Guest House", "Mega Guest House", "SAC Guest House"];
  const guestHouseCost = [1000, 600, 600]
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
                <strong>Director</strong><br />
                <strong> NIT JALANDHAR</strong>
              </div>
              <div>{invoiceData.address}</div>
              
              {/* <div>Email: {invoiceData.userDetails.email}</div> */}
              {/* <div>Phone: {invoiceData.senderPhone}</div> */}
            </div>

            <div className="col-sm-6">
              <h6 className="mb-3">To:</h6>
              <div>
                <strong>{invoiceData[0].name}</strong>
              </div>
              <div>{invoiceData[0].address}</div>
              <div>Email: {invoiceData[0].email}</div>
              <div>Phone: {invoiceData[0].phone}</div>
            </div>
          </div>


          <div className="table-responsive-sm">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="center">#</th>
                  <th>Guest House</th>
                  <th>Arrival Date</th>
                  <th>Departure Date</th>
                  <th>Duration of stay</th>
                  <th>No of Rooms</th> 
                  <th className="center">Charges of 1 Room</th>
                  <th className="right">Total</th>
                </tr>
              </thead>
              <tbody>
            {invoiceData &&
              invoiceData.map((item, index) => (
                <tr key={index}>
                  <td className="center">{index + 1}</td>
                  <td className="left strong">{guestHouse[item.guestHouseSelected-1]}</td>
                  <td className="left">{new Date(item.startDate).toLocaleDateString()}</td>
                  <td className="left">{new Date(item.endDate).toLocaleDateString()}</td>
                  <td>{noOfDays(item.startDate, item.endDate)}</td>
                  <td className="left">{item.roomsSelected}</td>
                  <td className="center">{guestHouseCost[item.guestHouseSelected-1]}</td>
                  <td className="right">&#8377;{guestHouseCost[item.guestHouseSelected-1] * item.roomsSelected * noOfDays(item.startDate, item.endDate)}</td>
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
                      <strong>Total</strong>
                    </td>
                    <td className="right">
                      <strong>{guestHouseCost[invoiceData[0].guestHouseSelected-1] * invoiceData[0].roomsSelected * noOfDays(invoiceData[0].startDate, invoiceData[0].endDate)}</strong>
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