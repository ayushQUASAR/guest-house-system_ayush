import {React,useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import "./cancellation.css"
const CancellationSlip = () => {
  const [cancelData, setCancelData] = useState(null);
  const location = useLocation();
  const bookingId = location.state?.bookingId;
  useEffect(() => {
    if (bookingId) {
      fetch(`${import.meta.env.VITE_API_URL}/booking/${bookingId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Fetched data:', data);
          setCancelData(data);

          // Chain the next fetch for booking history here

        }).catch((error) => console.error('Error fetching data:', error));
    } else {
      console.error('Invalid ObjectId:', bookingId);
    }
  }, [bookingId]);

  return (
    <div className="cancellation-slip">
     
      <img src="[Your Logo URL]" alt="Your Logo" className="logo" />
      
      <div className="center-info">
      <div className="business-info">
        <p>{cancelData[0].name}</p>
        <p>Account Number: 1231241414</p>
        <p>IFSC Code: 141241241241</p>
        <p>Bank Name: SBI BANK</p>
      </div>

  
      <div className="cancellation-info">
        <p>Dear Mohit Yadav,</p>
        <p>We confirm that your booking has been cancelled</p>
        <p>Booking ID: 41241f1341f12r</p>
        <p>Cancellation Date: 24-02-24</p>
        <p>Refund Amount: 1000</p>
      </div>


      </div>
     
     
      <button onClick={()=>{window.print();}}>Download</button>
    </div>
  );
};

export default CancellationSlip;
