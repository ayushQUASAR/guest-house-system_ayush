import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Receipt.css';
import { useUserContext } from '../ContextHooks/UserContext'; 
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ReceiptDownload = ({bookingId}) => {
  const [invoiceData, setInvoiceData] = useState(null);
  const { userId } = useUserContext();

  useEffect(() => {
    if (userId) {
      fetch(`${import.meta.env.VITE_API_URL}/booking/${bookingId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Fetched data new:', data);
          setInvoiceData(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    } else {
      console.error('Invalid ObjectId:', userId);
    }
  }, [userId, bookingId]);

  const generatePDF = () => {
    if (!invoiceData) {
      console.error('No data to generate PDF');
      return;
    }
  
    const doc = new jsPDF();
    const startY = 20;
    const lineHeight = 10;
  
    // Define noOfDays function
    const noOfDays = (startDate, endDate) => {
      const startDateTime = new Date(startDate).getTime();
      const endDateTime = new Date(endDate).getTime();
      const differenceInMilliseconds = endDateTime - startDateTime;
      const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
      return Math.round(differenceInDays);
    };
  
    doc.setFontSize(16);
    doc.text('NIT Jalandhar - Guest House', doc.internal.pageSize.width / 2, startY, { align: 'center' });
    doc.setFontSize(14);
    doc.text('Payment Receipt', doc.internal.pageSize.width / 2, startY + lineHeight, { align: 'center' });
    const details = [
      { label: 'Name:', value: invoiceData[0].roomBooker.name },
      { label: 'Guest House Name:', value: guestHouse[invoiceData[0].guestHouseSelected - 1] },
      { label: 'Phone Number:', value: invoiceData[0].roomBooker.phone },
      { label: 'Email:', value: invoiceData[0].roomBooker.email },
      { label: 'Date of Arrival:', value: new Date(invoiceData[0].startDate).toLocaleDateString() },
      { label: 'No of Days:', value: `${noOfDays(invoiceData[0].startDate, invoiceData[0].endDate)}` },
      { label: 'Cost of Each Room:', value: `₹${guestHouseCost[invoiceData[0].guestHouseSelected - 1]}` },
      { label: 'Total Rooms:', value: `${invoiceData[0].roomsSelected}` },
      { label: 'Total Payment:', value: `₹${guestHouseCost[invoiceData[0].guestHouseSelected - 1] * invoiceData[0].roomsSelected * noOfDays(invoiceData[0].startDate, invoiceData[0].endDate)}` }
    ];
  
    details.forEach((detail, index) => {
      doc.text(detail.label, 10, startY + (index + 3) * lineHeight);
      doc.text(detail.value, 60, startY + (index + 3) * lineHeight);
    });
  
    // Save the PDF
    doc.save('receipt.pdf');
  };
   

  if (!invoiceData) {
    // Loading state, you can customize this part as per your needs
    return <p>Loading...</p>;
  }

  const guestHouse = ["Institute Guest House", "Mega Guest House", "SAC Guest House"];
  const guestHouseCost = [1000, 600, 600];

  return ( 
    <>
      <button onClick={generatePDF}>Download Receipt</button>
    </>
  );
};

export default ReceiptDownload;
