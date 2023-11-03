import React from "react";
// import Image from "./p.jpg"
const  SideBar = ({user}) => {
  
  return (
    
    <div className="tables-container">
        <img src={Image}/>
        <hr style = {{border : '1px rgb(44, 42, 42) dotted'}}/>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Name:</th>
            <td>{user.name}</td>
          </tr>
          <tr>
            <th scope="row">Address:</th>
            <td>{user.address}</td>
          </tr>
          <tr>
            <th scope="row">Contact Number:</th>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <th scope="row">ID:</th>
            <td>{user._id}</td>
          </tr>
        </tbody>
      </table> 
      {/* <table className="table">
         <h4>Reference:</h4>
        <tbody>
          <tr>
            <th scope="row"> Reference Name</th>
            <td>{user.refTo.phone}</td>
          </tr>
          
          <tr>
            <th scope="row"> Reference Email</th>
            <td>{user.refTo.email}</td>
          </tr>
          <tr>
            <th scope="row">Contact</th>
            <td>{user.refTo.phone}</td>
          </tr>
        </tbody>
      </table> */}
      
 
    </div>
    
  );
};

export default SideBar;
