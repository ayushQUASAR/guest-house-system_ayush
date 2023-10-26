import React from 'react'
import { useState } from "react";
import "../style/regform.css"
import { NavLink } from "react-router-dom";
import Regleftside from "./Regleftside"

const buttonStyle = {
  backgroundColor: "#007BFF", // Change to the desired background color
  color: "white", // Text color
  border: "none",
  cursor: "pointer",
  padding: "10px",
  borderRadius: "5px",
  margin: "5px",
};

const AdminRegistration = () => {
  

  const [Firstname, setFirstname] = useState("")
  const [Lastname, setLastname] = useState("")
  const [Phnnumber, setPhnnumber] = useState("")
  const [Address, setAddress] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [data, setData] = useState([]);
  const [idProof, setIdProof] = useState(null);



  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleFileChange = (e) => {
    let file = e.target.files[0];

    if(!file) {
      window.alert("File not uploaded.");
    }

    if(file.size<= 1000000) {
      console.log(file.type);
      if(file.type.startsWith("image/") || file.type === "application/pdf") {
        setIdProof(file);
      }
      else {
        window.alert("ONLY IMAGES AND PDF ALLOWED");
      }
    }
    else {
      window.alert("file size can be max. 1MB");
    }
  
  }
  const setSubmit = (e) => {
    e.preventDefault();
    const newEntry = { Email: Email,
       Firstname: Firstname, 
       Lastname: Lastname, 
       Address: Address,
        Phnnumber: Phnnumber,
         Password: Password,
          idProof: idProof,

        }
   setData([...data,newEntry]);
   const formData = new FormData();
formData.append("Firstname", Firstname);
formData.append("Lastname", Lastname);
formData.append("Phnnumber", Phnnumber);
formData.append("Email", Email);
formData.append("Password", Password);
formData.append("Address", Address);
formData.append("idProof", idProof);






   fetch("http://localhost:4000/register", {
    method: "POST",
    body: formData,
    mode: "cors",
   }).then((res)=> res.json())
   .then((data) => console.log(data))
   .catch((err) => console.log(err));

    console.log("hi")
  }

    



  return (
    <>
    
    <div className="reg-rightside"> <form action="" onSubmit={setSubmit}>
    
    
    <div>
      <div className="r">
        <h1 className="rheading">Create an Account</h1>
      </div>
   
    
        <div className="row input">
          <div className="col-md-6 col-sm-12">
            <input  required type="text" className="form-control mb-3" onChange={(e) => setFirstname(e.target.value)} value={Firstname} placeholder="First Name" />
          </div>
          <div className="col-md-6 col-sm-12">
            <input  required type="text" className="form-control mb-3" onChange={(e) => setLastname(e.target.value)} value={Lastname} placeholder="Last Name" />
          </div>
        </div>
        <div className="row input">
          <div className="col-md-3 col-sm-12">
            <div className="input-group">
              <input  required type="text" className="form-control" value="+91" readOnly />
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            <input  required type="text" value={Phnnumber} onChange={(e) => setPhnnumber(e.target.value)} className="form-control" placeholder="Phone Number" />
          </div>
        </div>
        <div className="row input">
          <div className="col-12">
            <input  required type="text" value={Address} onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder="Address" />
          </div>
        </div>
        <div className="row input">
          <div className="col-12">
            <input  required type="email" value={Email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="row input">
          <div className="col-12">
            <div className="input-group">
              <span className="input-group-text">
                <img src="password-icon.png" alt="Password Icon" />
              </span>
              <input  required onChange={(e) => setPassword(e.target.value)} value={Password} type="password" className="form-control" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="row input">
          <div className="col-12">
            <div className="input-group">
              <h2 className="govt-id-heading">Upload Govt ID</h2>
            </div>
          </div>
        </div>
        <div className="row input">
          <div className="col-12">
            <div className="input-group">
              <input  required type="file" className="form-control" id="fileInput" />
            </div>
          </div>
        </div>

       
        <div className="row input">
        <NavLink to ="/" >
         
              Already have an account? Login
           
          </NavLink> 
          {/* <div className="col-md-6 col-sm-12">
            <button disabled={selectedOption === null}  onClick={()=>setNext(false)} className="form-control btn btn-success rounded" style={buttonStyle}>
              Next
            </button>
          </div> */}
        </div>
        
    </div> 

    </form>
    </div>
    </>
 

  )
}

export default AdminRegistration