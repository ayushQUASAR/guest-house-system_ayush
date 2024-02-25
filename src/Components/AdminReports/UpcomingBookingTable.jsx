import React, { useState, useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const columns = [
  { id: "BOOKING_ID", label: "Booking ID", minWidth: 50 },
  { id: "NAME", label: "Name", minWidth: 150 },
  { id: "ROOMNO", label: "Room Number", minWidth: 100 },
  { id: "DESIGNATION", label: "Designation", minWidth: 150 },
  { id: "GUESTHOUSE", label: "Guest House", minWidth: 170 },
  { id: "PHONENUMBER", label: "Phone Number", minWidth: 150 },
  { id: "EMAIL", label: "Email", minWidth: 150 },
  { id: "DATEOFARRIVAL", label: "Date of Arrival", minWidth: 190 },
  { id: "NOOFDAYS", label: "Number of Days", minWidth: 130 },
];
function noDays(startDate, endDate){
  let differenceInMilliseconds = endDate - startDate;
let differenceInSeconds = differenceInMilliseconds / 1000;
let differenceInMinutes = differenceInSeconds / 60;
let differenceInHours = differenceInMinutes / 60;
let leftDays = differenceInHours / 24;
  return leftDays;
}
function createData(data) {
  return {
    BOOKING_ID: data._id,
    NAME: data.name,
    ROOMNO: null,
    DESIGNATION: data.designation,
    GUESTHOUSE: data.guestHouseAllotted,
    PHONENUMBER: data.phone,
    EMAIL: data.email,
    DATEOFARRIVAL: data.startDate,
    NOOFDAYS: noDays(new Date(data.startDate), new Date(data.endDate)),
  };
}

const UpcomingBookingTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const tableRef = useRef(null);


  const handleDownloadPDF = () => {
    const input = tableRef.current;
  
    if (!input) {
      console.error("Table element is null.");
      return;
    }
  
    html2canvas(input)
      .then((canvas) => {
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
        // Adjust the scale factor for better readability
        const scaleFactor = 1; // You can adjust this value
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, imgWidth * scaleFactor, imgHeight * scaleFactor);
        pdf.save("table.pdf");
      })
      .catch((error) => {
        console.error("Error converting table to PDF:", error);
      });
  };
  

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch(`${import.meta.env.VITE_API_URL}/booking`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of objects
        const formattedData = data.map(createData);
        setRows(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <h1 style={{ color: "black", fontWeight: 550 }}>PAST BOOKINGS</h1>
      <TableContainer sx={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>
        <Table stickyHeader aria-label="sticky table" ref={tableRef}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#0275d8",
                    fontWeight: 600,
                    color: "white",
                    fontSize: "1.2rem",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "DATEOFARRIVAL"
                            ? new Date(value).toLocaleDateString()
                            : column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{
          fontWeight: 600,
        }}
      />
      <button style = {{backgroundColor : '#0275d8', color : 'white', margin : '0px 0px 10px 30px', padding : '5px', border : 'None'}} onClick={handleDownloadPDF}>Download PDF</button>
    </Paper>
    
  );
};

export default UpcomingBookingTable;