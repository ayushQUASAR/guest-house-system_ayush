import React from "react";

const Table = () => {
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Booking Date</th>
            <th scope="col">Guest House</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in/out</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">1</td>
            <td>November 20,2022</td>
            <td>Guest house 1</td>
            <td>301</td>
            <td>20 dec 2022-23 dec 2022</td>
            <td>Waiting for approval</td>
          </tr>
          <tr>
            <td scope="row">2</td>
            <td>November 20,2022</td>
            <td>Guest house 2</td>
            <td>302</td>
            <td>25 dec 2022-26 dec 2022</td>
            <td>Approved</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;