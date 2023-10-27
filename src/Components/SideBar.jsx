import React from "react";
// import Image from "./p.jpg"
const  SideBar = () => {
  return (
    
    <div className="tables-container">
        <img src={Image}/>
        <hr style = {{border : '1px rgb(44, 42, 42) dotted'}}/>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Name:</th>
            <td>John</td>
          </tr>
          <tr>
            <th scope="row">Address:</th>
            <td>Chandigarh Sector 22A</td>
          </tr>
          <tr>
            <th scope="row">Contact Number:</th>
            <td>8812313212</td>
          </tr>
          <tr>
            <th scope="row">ID:</th>
            <td>1234-2131-1231</td>
          </tr>
        </tbody>
      </table> 
      <table className="table">
         <h4>Reference:</h4>
        <tbody>
          <tr>
            <th scope="row"> Student Name</th>
            <td>John</td>
          </tr>
          <tr>
            <th scope="row">Roll Number</th>
            <td>21103136</td>
          </tr>
          <tr>
            <th scope="row">Branch</th>
            <td>CSE</td>
          </tr>
          <tr>
            <th scope="row">Contact</th>
            <td>8767654657</td>
          </tr>
        </tbody>
      </table>
      
 
    </div>
    
  );
};

export default SideBar;
