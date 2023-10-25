import React from "react";
import  "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
const Approvaltable = () => {
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <td scope="col">S.No</td>
            <td scope="col">Name</td> 
            <td scope="col">Email id</td>
            <td scope="col">Contact Number</td>
            <td scope="col">Reference</td> 
            <td scope="col">Approval</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">1</td>
            <td>John</td> 
            <td>user@gmail.com</td>
            <td>8989898989</td>
            <td>Student</td> 
            <td><button type="button" class="btn btn-success btn-sm">Accept</button> <button type="button" class="btn btn-danger btn-sm">Reject</button></td>
          </tr>
          <tr>
            <td scope="row">2</td>
            <td>Mark</td> 
            <td>user@gmail.com</td>
            <td>8989898989</td>
            <td>Student</td> 
            <td><button type="button" class="btn btn-success btn-sm">Accept</button> <button type="button" class="btn btn-danger btn-sm">Reject</button></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Approvaltable;