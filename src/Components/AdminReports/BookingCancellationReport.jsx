import React, { useState, useEffect,useRef } from "react";
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
  { id: "SNO", label: "SNO.", minWidth: 50 },
  { id: "NAME", label: "NAME", minWidth: 150 },
  { id: "BRANCH", label: "BRANCH", minWidth: 150 },
  { id: "GUESTHOUSE", label: "GUEST HOUSE", minWidth: 170 },
  { id: "ACCOUNTNUMBER", label: "ACCOUNT NUMBER", minWidth: 190 },
  { id: "IFSC", label: "IFSC CODE", minWidth: 120 },
  { id: "DATEOFARRIVAL", label: "DATE OF ARRIVAL", minWidth: 190 },
  { id: "DATEOFCANCELLATION", label: "DATE OF CANCELLATION", minWidth: 220 },
  { id: "NOOFDAYS", label: "NO. OF DAYS", minWidth: 130 },
  { id: "NOOFROOMS", label: "NO. OF ROOMS", minWidth: 130 },
  { id: "AMOUNTTOTAL", label: "TOTAL AMOUNT", minWidth: 190 },
  { id: "AMOUNTDEDUCTED", label: "AMOUNT DEDUCTED", minWidth: 190 },
  { id: "AMOUNTTOBEREFUNDED", label: "AMOUNT TO BE REFUNDED", minWidth: 250 },
];
function noDays(startDate, endDate) {
  let differenceInMilliseconds = endDate - startDate;
  let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
  return Math.round(differenceInDays);
}

function amtDeducted( originalAmount, leftDays) {
   
  let amountDeducted; 
  if(leftDays >= 3) {
    amountDeducted = 0.25 * originalAmount;
  }else{
    amountDeducted = 0.50 * originalAmount;
  } 
  return amountDeducted;
}
const cost = [1000, 600, 600]
const guestHouse = ['Institute Guest House', 'Mega Guest House', 'SAC Guest House']
function createData(data) {
  const guestHouseNumber = data.booking?data.booking.guestHouseSelected -1: '';
  const startDate = data.booking ? new Date(data.booking.startDate) : null;
  const endDate = data.booking ? new Date(data.booking.endDate) : null;
  const noOfDays = startDate && endDate ? noDays(startDate, endDate) : 0;
  const originalAmount = data.booking ? 
  (noOfDays*cost[guestHouseNumber]* (data.booking?data.booking.roomsAllotted :0 )): 0;
  const deductedAmount = data.booking ? amtDeducted(
    originalAmount,
    new Date(data.createdAt),
    data.booking?data.booking.roomsAllotted:0 
  ) : 0;

  return {
    SNO: data._id,
    NAME: data.name,
    BRANCH: data.booking ? data.booking.roomBooker.dept : '-',
    GUESTHOUSE: data.booking ? guestHouse[guestHouseNumber] : '-',
    ACCOUNTNUMBER: data.accountNumber,
    IFSC: data.IFSC,
    DATEOFARRIVAL:data.booking ? startDate.toLocaleDateString() : '-',
    DATEOFCANCELLATION: data.createdAt ? new Date(data.createdAt).toLocaleDateString() : '',
    NOOFROOMS : data.booking?data.booking.roomsAllotted:0,
    NOOFDAYS: noOfDays,
    AMOUNTTOTAL : originalAmount,
    AMOUNTDEDUCTED: deductedAmount,
    AMOUNTTOBEREFUNDED: originalAmount - deductedAmount 
  };
} 

const BookingCancellationReport = () => {
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
    fetch(`${import.meta.env.VITE_API_URL}/refund`)
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
      <h1 style={{ color: "black", fontWeight: 550 }}>BOOKING CANCELLATION REPORT</h1>
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
                    fontSize:"1.2rem"
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
                      {column.format && typeof value === "number"
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
       <button onClick={handleDownloadPDF}>Download PDF</button>
    </Paper>
    
  );
};

export default BookingCancellationReport;
