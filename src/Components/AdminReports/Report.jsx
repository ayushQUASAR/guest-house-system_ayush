// BookingTable.jsx
import React, { useState } from 'react';
import './Report.css';

const BookingTable = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [bookingType, setBookingType] = useState('past');

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleBookingTypeChange = (e) => {
    setBookingType(e.target.value);
  };

  const handleDownloadReport = async () => {
    try {
      const reportData = await fetchReportData(bookingType, fromDate, toDate);
      const blob = new Blob([JSON.stringify(reportData)], { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${bookingType}_report.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading report:', error);
    }
  };

  const fetchReportData = async (type, fromDate, toDate) => {
    return {
      type,
      fromDate,
      toDate,
      data: 'Sample report data',
    };
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
