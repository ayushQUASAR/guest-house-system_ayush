// BookingTable.jsx
import React, { useState } from 'react';
import { useUserContext } from '../ContextHooks/UserContext';
import './Report.css';
// import jsPDF from 'jspdf';
import {useNavigate} from 'react-router-dom'
const BookingTable = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [bookingType, setBookingType] = useState('past');
  const { userId } = useUserContext();
  const navigate=useNavigate();
  console.log(`this is my userId ${userId}`);

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleBookingTypeChange = (e) => {
    setBookingType(e.target.value);
  };

  // const handleDownloadReport = async () => {
  //   try {
  //     const reportData = await fetchReportData(bookingType, fromDate, toDate);
  //     const blob = new Blob([JSON.stringify(reportData)], { type: 'application/json' });
  //     const link = document.createElement('a');
  //     link.href = URL.createObjectURL(blob);
  //     link.download = ${bookingType}_report.json;
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } catch (error) {
  //     console.error('Error downloading report:', error);
  //   }
  // };


  const handleDownloadReport = async () => {
    try {
      const userId = '65b76d036cdb971024d4e6f0';
  
      const reportData = await fetchReportData(bookingType, fromDate, toDate, userId);

      // Navigate to another route and pass the fetched data as route state
      // navigate({
      //   pathname: "/downloadReport", // Specify the path of the target route
      //   state: { reportData }
      // });
    } catch (error) {
      console.error('Error downloading report:', error);
    }
  };

  
  // Recursive function to format an object for display
  const fetchReportData = async (type, fromDate, toDate, userId) => {
    try {
      let apiUrl;
  
      switch (type) {
        case 'upcoming':
          // apiUrl = ${import.meta.env.VITE_API_URL}/users/65b76d036cdb971024d4e6f0/bookingHistory/upcoming;
          navigate({
            pathname: "/upcomingReport", 
            // state: { apiUrl }
          });
          break;
        case 'past':
          // apiUrl = ${import.meta.env.VITE_API_URL}/users/65b76d036cdb971024d4e6f0/bookingHistory/past;
          navigate({
            pathname: "/pastReport", 
            // state: { apiUrl }
          });
          break;
        case 'cancelled':
          navigate({
            pathname: "/cancelledReport", 
            // state: { apiUrl }
          });
          break;
        default:
          throw new Error('Invalid booking type');
      }
  
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch report data. Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error('Error fetching report data:', error);
      throw error;
    }
  };

  
  
  

  return (
    <div className="booking-table-container">
      <div className="booking-report-row">
        <h1 className="mb-4 text-center">Booking Report</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="fromDate" className="form-label">From Date:</label>
            <input type="date" id="fromDate" className="form-control" value={fromDate} onChange={handleFromDateChange} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="toDate" className="form-label">To Date:</label>
            <input type="date" id="toDate" className="form-control" value={toDate} onChange={handleToDateChange} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="bookingType" className="form-label">Select Booking Type:</label>
            <select className="form-select" id="bookingType" value={bookingType} onChange={handleBookingTypeChange}>
              <option value="past">Past Bookings</option>
              <option value="cancelled">Cancelled Bookings</option>
              <option value="upcoming">Upcoming Bookings</option>
            </select>
          </div>
        </div>
      </div>
      <div className="text-center mb-3">
        <button className="btn btn-primary" onClick={handleDownloadReport}>
          Download Report
        </button>
      </div>
    </div>
  );
};

export default BookingTable;