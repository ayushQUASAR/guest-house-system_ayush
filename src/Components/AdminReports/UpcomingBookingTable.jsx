import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

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
  { id: "AMOUNTDEDUCTED", label: "AMOUNT DEDUCTED", minWidth: 190 },
  { id: "AMOUNTTOBEREFUNDED", label: "AMOUNT TO BE REFUNDED", minWidth: 250 },
];

function createData(
  SNO,
  NAME,
  BRANCH,
  GUESTHOUSE,
  ACCOUNTNUMBER,
  IFSC,
  DATEOFARRIVAL,
  DATEOFCANCELLATION,
  NOOFDAYS,
  AMOUNTDEDUCTED,
  AMOUNTTOBEREFUNDED
) {
  return {
    SNO,
    NAME,
    BRANCH,
    GUESTHOUSE,
    ACCOUNTNUMBER,
    IFSC,
    DATEOFARRIVAL,
    DATEOFCANCELLATION,
    NOOFDAYS,
    AMOUNTDEDUCTED,
    AMOUNTTOBEREFUNDED,
  };
}

const UpcomingBookingTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch(`${import.meta.env.VITE_API_URL}/booking`)
      .then((response) => response.json())
      .then((data) => setRows(data))
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
      <h1 style={{ color: "black", fontWeight: 550 }}>PAST BOOKING(s)</h1>
      <TableContainer sx={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>
        <Table stickyHeader aria-label="sticky table">
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
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                  >
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
    </Paper>
  );
};

export default UpcomingBookingTable;
