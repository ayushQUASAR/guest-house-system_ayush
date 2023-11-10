import React, { useState,useEffect } from "react";
import Table from './Table'
// import Image from "./p.jpg"
const SideBar = ({ view }) => {
  const [userdata,setUserData]=useState(null)
  console.log(" hum hai", userdata)


  useEffect(() => {
    if(view!== null) {
      console.log("its' working");
      //http://localhost:4000/users/6545eecab7f0c070a5456b17/bookingHistory

      fetch(`${import.meta.env.VITE_API_URL}/users/${view._id}`)
      .then((res) => res.json())
      .then((data) =>{console.log("this is data", data)
      setUserData(data)
      console.log("humnihai",userdata)
     })
      .catch((err) => console.error(err.message))
    }
      
  },[])

  const renderIdProofContent = () => {
    if (userdata != null)
    // <>Nodata</>
    {  if (userdata.userDetails.idProof.contentType.startsWith('image/')) {
        // Render an image if the content type starts with 'image/'
        return <img src={userdata.userDetails.idProof.data} alt='' />;
      } else if (userdata.userDetails.idProof.contentType === 'application/pdf' || userdata.userDetails.idProof.data.endsWith('.pdf')) {
        // Render a PDF using an iframe
        return <iframe title="ID Proof" src={userdata.userDetails.idProof.data} width="100%" height="500px" />;
      } else if (userdata.userDetails.idProof.data.startsWith('http') || userdata.userDetails.idProof.data.startsWith('www')) {
        // Handle URLs that are not PDFs or images
        return <a href={userdata.userDetails.idProof.data} target="_blank" rel="noopener noreferrer">View ID Proof</a>;
      } else {
        // Handle other content types or unsupported URLs
        return <p>Unsupported file format or URL: {userdata.userDetails.idProof.contentType}</p>;
      }}
      else return <>Nodata</>
  };


  return (
    <div className="card rounded-4 w-100" >
      <div className="card-header rounded-4" style={{ backgroundColor: '#0275d8', color: 'white', border: '5px solid #0275d8' }}>
        <h1>USER PROFILE</h1>
      </div>
      <div className="tables-container">

        {/* ## COMMENTED BY MRIDUL:   IMAGE WILL NOT WORK WITH RENDER, WILL HAVE TO WAIT FOR API TO HOSTED TO ANOTHER SERVICE */}
        {/* <div  >
          {renderIdProofContent(userdata)}
        </div> */}
        <hr style={{ border: '1px rgb(44, 42, 42) dotted' }} />
     <div>{userdata && <><table className="table">

          <tbody>
            <tr>
              <th scope="row">Name:</th>
              <td>{userdata.userDetails.name}</td>
            </tr>
            <tr>
              <th scope="row">Address:</th>
              <td>{userdata.userDetails.address}</td>
            </tr>
            <tr>
              <th scope="row">Contact Number:</th>
              <td>{userdata.userDetails.phone}</td>
            </tr>
            <tr>
              <th scope="row">Email ID:</th>
              <td>{userdata.userDetails.email}</td>
            </tr>
          </tbody>
        </table>
        <table className="table">
          <h4>Reference:</h4>
          <tbody>
            <tr>
              <th scope="row"> Reference Name</th>
              <td>{userdata.referenceDetails.refTo.name}</td>
            </tr>


    {/* ##COMMENTED BY MRIDUL: EMAIL IS NOT AVAILABLE TO ALL TYPE OF REFERNCE, CHANGE FIELDS ACCORDING TO THE REFERENCE TYPE  */}
            {/* <tr>
              <th scope="row"> Reference Email</th>
              <td>{userdata.referenceDetails.refTo.email}</td>
            </tr> */}
            <tr>
              <th scope="row">Contact</th>
              <td>{userdata.referenceDetails.refTo.phone}</td>
            </tr>
          </tbody>
        </table></> }</div>


      </div>
      <div className="card-body">

        <div class="d-flex flex-row bd-highlight mb-2">
          <div class="p-2 bd-highlight">

          </div>
          <div class="p-2 bd-highlight" className="table2">
            <h1 className="bookingTable">BOOKINGS HISTORY</h1>
            <div className="t">
              <Table userId={view._id}/>
            </div>
          </div>

        </div>

      </div>

    </div>



  );
};

export default SideBar;
