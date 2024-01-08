import React from 'react'; 
import '../../style/userprofile.css';
import {useUserContext} from "../ContextHooks/UserContext";
import {useState, useEffect} from 'react'; 
const PersonalDetail = () => {
    const [profilePhoto, setProfilePhoto] = useState('./p.jpg');
    const [newPhoto, setNewPhoto] = useState(null); 
    const [user, setUserDetails] = useState([]);
     const { userId } = useUserContext();

     console.log(userId);

//   // on initial render, Person Booking Details get saved
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`)
      .then((res) => res.json())
      .then((data) =>{
        console.log(data);
        setUserDetails(data);
      }
      )
      .catch((err) => console.log(err.message));
  }, []);

     
    const[saveButton, setSaveButton] = useState(false);
    const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
    const reader = new FileReader();
    reader.onload = () => {
        setNewPhoto(reader.result);
    };
    reader.readAsDataURL(file);
    }
    setSaveButton(true);
    };
    const handleSave = () => {
        if (newPhoto) {
            setProfilePhoto(newPhoto);
            setNewPhoto(null);
        }
        setSaveButton(false);
    };
   

//   const handleUpdatePhoto = () => {
//     if (newPhoto) {
//       setProfilePhoto(newPhoto);
//       setModalOpen(false);
//     }
//   };
    // const [StudentData, setStudentData] = useState({
    //     name: 'Student Name',  
    //     rollNumber : '2110423',
    //     branch :'CSE',
    //     ContactNumber2: '123-456-7890', 
    //     email: 'student@gmail.com'
    // }); 
    
    // const { name, ContactNumber2, rollNumber, email, branch } = StudentData;
      // image pop up
      const [dialog, setDialog] = useState(false);
      const toggleDialog = () => {
        setDialog(!dialog);
      };
  return (
    <div className='container-fluid'>
        <div className = 'row'>
        <div className = "col-4" >
            <div className = "row" style = {{margin : '15% 15% 0% 15%'}}>
                <img src={profilePhoto}     alt="Profile" style={{ width: '10rem', height: 'auto', padding : 'auto 0px'}} />
            </div >
            {/* <div style = {{position : 'relative', left : '50%' }}> */}
                <div style = {{alignItems : 'Right', textAlign : 'Right', right : '20%'}}>
                <label htmlFor="fileInput" style={{ cursor: 'pointer', color : 'black'}}>
                <i className="fa fa-camera" style = {{fontSize : '150%'}}></i> 
                </label>
                <input type="file"
                    accept="image/*"
                    id="fileInput"
                    onChange={handlePhotoChange}
                    style={{ display: 'none' }}
                />
                {saveButton && <button onClick={handleSave} style = {{backgroundColor : 'white', color : 'black', fontSize : '100%'}}>Save Photo</button> }
                    </div> 
                </div> 
            <div className = 'col-8'>
                <div>
                    <h2>Personal Details</h2>

                    <div className = 'row mx-4'style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> <strong>Name</strong></div>
                        <div className='col-6'> <strong>{user?.userDetails?.name}</strong></div>
                    </div>
                    <div className = 'row mx-4'style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Email</div>
                        <div className='col-6'> {user?.userDetails?.email}</div>
                    </div>
                    <div className = 'row mx-4' style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Contact Number</div>
                        <div className='col-6'>{user?.userDetails?.phone?user?.userDetails?.phone:"XXXXXXXXXX"}</div>
                    </div>
                    <div className = 'row mx-4' style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Address</div>
                        <div className='col-6'>{user?.userDetails?.address?user?.userDetails?.address:"No address"}</div>
                    </div>
                    <div className = 'row mx-4'style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Govt approved proof attached</div>
                        <div className = 'col-6'>

                        <button className="popup-button" onClick={toggleDialog}>View</button>
                        {dialog && (
                            <div className="dialog">
                            <div className="dialog-content">
                                <button className="close-icon" onClick={toggleDialog}>&#10005;</button>
                                <img className="popup-image" src={user?.userDetails?.idProof?.data} alt="Popup Image" />
                            </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
                <div className = 'my-4'>
                    <h2>Reference Details (for {user?.userDetails?.refInfo})</h2>
                    <div className = 'row mx-4 ' style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Name</div>
                        <div className='col-6'> {user?.referenceDetails?.refTo?.name}</div>
                    </div>
                    {/* <div className = 'row mx-4'style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Roll Number</div>
                        <div className='col-6'> {rollNumber}</div>
                    </div> */}
                    <div className = 'row mx-4'style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Contact Number</div>
                        <div className='col-6'> {user?.referenceDetails?.refTo?.phone}</div>
                    </div>
                    {/* <div className = 'row mx-4'style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Branch</div>
                        <div className='col-6'> {branch}</div>
                    </div> */}
                    {/* <div className = 'row mx-4'style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Email</div>
                        <div className='col-6'> {email}</div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default PersonalDetail;
