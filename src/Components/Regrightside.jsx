
import { useState } from "react";
import "../style/regform.css"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { NavLink } from "react-router-dom";
import Alumni from './AlumniDetails/AlumniRight'
import Faculty from './FacultyDetails/FacultyRight'
import Student from './StudentDetails/StudentRight'

export default function Regrightside() {
  const defaultButtonClass = "btnDefault";
const clickedButtonClass = "btnClicked";

  const [Firstname, setFirstname] = useState("")
  const [Lastname, setLastname] = useState("")
  const [Phnnumber, setPhnnumber] = useState("")
  const [Address, setAddress] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [contentType, setContentType] = useState('')
  const [selectedOption, setSelectedOption] = useState(null);
  const [data, setData] = useState([]);
  const [reffirstName, setReffirstName] = useState('');
  const [reflastName, setReflastName] = useState('');
  const [refphoneNumber, setRefphoneNumber] = useState('');
  const [idProof, setIdProof] = useState(null);
  // Alumni
  console.log(contentType==='student')

  const [branch, setBranch] = useState('');
  const [batch, setBatch] = useState('');

  const [jobProfile, setJobProfile] = useState('');

  // student

 
  const [studrollNumber, setSrollNumber] = useState('');
  const [studbranch, setSbranch] = useState('');

  // faculty
  
  const [facultyemail, setFacultyemail] = useState('');
  const [department, setDepartment] = useState('');


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
        window.alert("ONLY IMAGES AND PDF ARE ALLOWED. Please Upload again");
      }
    }
    else {
      window.alert(" file size can be maximum upto. 1MB. Please Upload file within the limit ");
    }
  
  }
  const setSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
       Email: Email,
       Firstname: Firstname, 
       Lastname: Lastname, 
       Address: Address,
        Phnnumber: Phnnumber,
         Password: Password,
          selectedOption:selectedOption,
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
formData.append("selectedOption", selectedOption);
formData.append("idProof", idProof);
// Alumni
formData.append("RefFirstName", reffirstName);
formData.append("RefLastName", reflastName);
formData.append("RefPhoneNumber", refphoneNumber);
formData.append("AlumniBatch", batch);
formData.append("AlumniBranch", branch);
formData.append("ALumniJobProfile", jobProfile);

// Student
formData.append("StudentRollNumber", studrollNumber);
formData.append("StudentBranch", studbranch);

// Faculty
formData.append("FacultyEmail", facultyemail);
formData.append("Department", department);





   fetch(import.meta.env.VITE_API_URL + "/register", {
    method: "POST",
    body: formData,
    mode: "cors",
   }).then((res)=> res.json() )
   .then((data) =>{console.log("data:",data) 
  })
   .catch((err) => console.log("error",err));

    console.log("registered")
 
  }


  return (
    <>
    <div className="reg-rightside"> <form action="" onSubmit={setSubmit}>
    
    
    <div>
    <NavLink className="nav-tohome" to="/">
                                <div  className="nav-tohome"><HomeRoundedIcon color="white" /><div className='optn-name'>Home</div></div>

                            </NavLink>
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
<input  required type="file" onChange={handleFileChange} className="form-control" id="fileInput" />
            </div>
          </div>
        </div>

        <div className="row input align-items-center">
          <div className="col-md-3 col-sm-6 col-12">
            <h2 className="reference-heading">Reference</h2>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <label>
              {/* <input  required
                type="radio"
                value="student"
                onClick={()=>setContentType('student')}
                checked={selectedOption === 'student'}
                onChange={handleOptionChange}
              /> */}
              <button type="button" onClick={()=>setContentType('student')}  className={` ${
                    contentType === 'student'
                      ?clickedButtonClass : defaultButtonClass
                      
                      
                  } `}
                 >
                <img src="student-icon.png" alt="Icon" style={{ marginRight: "10px" }} />
                Student
              </button>
            </label>
          </div>

          <div className="col-md-3 col-sm-6 col-12">
            <label>
              {/* <input  required
              onClick={()=>setContentType('faculty')}
                type="radio"
                value="faculty"
                checked={selectedOption === 'faculty'}
                onChange={handleOptionChange}
              /> */}
              <button type="button" onClick={()=>setContentType('faculty')}  className={` ${
                    contentType === 'faculty'
                      ?  clickedButtonClass : defaultButtonClass
                  } `}
                 >
                <img src="faculty-icon.png" alt="Icon" style={{ marginRight: "10px" }} />
                Faculty
              </button>
            </label>
          </div>

          <div className="col-md-3 col-sm-6 col-12">
            <label>
              {/* <input
                type="radio"  required
                onClick={()=>setContentType('alumni')}
                value="alumni"
                checked={selectedOption === 'alumni'}
                onChange={handleOptionChange}
              /> */}
              <button type="button"onClick={()=>setContentType('alumni')}  className={` ${
                    contentType === 'alumni'
                      ? clickedButtonClass : defaultButtonClass
                  } `}
                 >
                <img src="alumni-icon.png" alt="Icon" style={{ marginRight: "10px" }} />
                Alumni
              </button>
            </label>
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
    { contentType=='student'&& <Student prop={{reffirstName,reflastName, refphoneNumber,studbranch,studrollNumber,setReffirstName,setReflastName,setRefphoneNumber,setSbranch,setSrollNumber}}/>   }
    { contentType=='faculty'&& <Faculty prop={{reffirstName,reflastName, refphoneNumber,department,facultyemail,setReffirstName,setReflastName,setRefphoneNumber,setFacultyemail,setDepartment}}/>   }
    { contentType=='alumni'&& <Alumni prop={{reffirstName,reflastName, refphoneNumber,batch,branch,jobProfile,setReffirstName,setReflastName,setRefphoneNumber,setBatch,setBranch,setJobProfile}}/>   }
    </form>
    </div>
    </>
  );
}
