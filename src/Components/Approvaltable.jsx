import React, { useEffect, useState } from "react";
import  "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
const Approvaltable = () => {
  const [loginData, setLoginData] = useState([]);
  useEffect(()=>{

    fetch("guest-house-back.onrender.com/users/approved/pending").then((res) => res.json())
  .then((data) =>{
    setLoginData(data); })
  .catch((err) => console.log(err));
      console.log("hi")
  },[])

  const handleAccept = (userId) => {
    // fetch(`https://your-api-url-for-accept/${userId}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
       
    //     console.log("User accepted:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error accepting user:", error);
    //   });
    console.log("hello")
  };
  
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
    {loginData.map((indx,val)=>(    
    <tr>
      <td scope="row">{indx}</td>
      <td>{val.name}</td> 
      <td>{val.email}</td>
      <td>{val.phnnumber}</td>
      <td>{val.ref}</td> 
      <td><button type="button"  onClick={() => handleAccept(user.id)} class="btn btn-success btn-sm">Accept</button> <button type="button" class="btn btn-danger btn-sm">Reject</button></td>
    </tr>
    ))}
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