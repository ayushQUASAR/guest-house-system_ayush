import React from 'react'; 
import '../../style/userprofile.css';
import {useState} from 'react';
const PersonalDetail = ({user}) => {
    const [StudentData, setStudentData] = useState({
        name2: 'Student Name',  
        rollNumber : '2110423',
        branch :'CSE',
        ContactNumber2: '123-456-7890', 
        email2: 'student@gmail.com'
      }); 
    const { name2, ContactNumber2, rollNumber, email2, branch } = StudentData;
      // image pop up
      const [dialog, setDialog] = useState(false);
      const toggleDialog = () => {
        setDialog(!dialog);
      };
  return (
    <div className='container-fluid'>
        <div className = 'row'>
            <div className = 'col-4'>
                <div className = 'row user-image'>
                    <img  style={{ width: "500%", height: "600%" }}src='./p.jpg' alt="" />
                </div> 
            </div>
            <div className = 'col-8'>
                <div>
                    <h2>Personal Details</h2>
                    <div className = 'row mx-4'style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> <strong>Name</strong></div>
                        <div className='col-6'> <strong>"User Name"</strong></div>
                    </div>
                    <div className = 'row mx-4'style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Email</div>
                        <div className='col-6'> abc@gmail.com</div>
                    </div>
                    <div className = 'row mx-4' style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Contact Number</div>
                        <div className='col-6'> 5435465745</div>
                    </div>
                    <div className = 'row mx-4' style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Address</div>
                        <div className='col-6'> NIT_JALANDHAR</div>
                    </div>
                    <div className = 'row mx-4'style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Govt approved proof attached</div>
                        <div className = 'col-6'>

                        <button className="popup-button" onClick={toggleDialog}>View</button>
                        {dialog && (
                            <div className="dialog">
                            <div className="dialog-content">
                                <button className="close-icon" onClick={toggleDialog}>&#10005;</button>
                                <img className="popup-image" src='./Logo_of_NIT_Jalandhar.png' alt="Popup Image" />
                            </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
                <div className = 'my-4'>
                    <h2>Reference Details (for Student)</h2>
                    <div className = 'row mx-4 ' style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Name</div>
                        <div className='col-6'> {name2}</div>
                    </div>
                    <div className = 'row mx-4'style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Roll Number</div>
                        <div className='col-6'> {rollNumber}</div>
                    </div>
                    <div className = 'row mx-4'style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Contact Number</div>
                        <div className='col-6'> {ContactNumber2}</div>
                    </div>
                    <div className = 'row mx-4'style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Branch</div>
                        <div className='col-6'> {branch}</div>
                    </div>
                    <div className = 'row mx-4'style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Email</div>
                        <div className='col-6'> {email2}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PersonalDetail;
