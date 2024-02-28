import React from 'react';
import '../../style/userprofile.css';
import { useUserContext } from "../ContextHooks/UserContext";
import { useState, useEffect } from 'react';
import UserIcon from '../UserIcon';
const PersonalDetail = () => {
    const [user, setUserDetails] = useState([]);
    const { userId } = useUserContext();
    console.log(userId);

    //   // on initial render, Person Booking Details get saved
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUserDetails(data);
            }
            )
            .catch((err) => console.log(err.message));
    }, [userId]);


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
            <div>
                <div className="user-profile">
                    <div>
                        <UserIcon username={user?.userDetails?.name} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '40px', paddingLeft: '10px', justifyContent: 'center', alignItems: 'center' }}>User Profile</h2>
                    </div>
                </div>
                <div className='row mx-4' style={{ borderBottom: '1px solid #ccc' }}>
                    <div className='col-6'> <strong>Name</strong></div>
                    <div className='col-6'> <strong>{user?.userDetails?.name}</strong></div>
                </div>
                <div className='row mx-4' style={{ borderBottom: '1px solid #ccc' }}>
                    <div className='col-6'> Email</div>
                    <div className='col-6'> {user?.userDetails?.email}</div>
                </div>
                <div className='row mx-4' style={{ borderBottom: '1px solid #ccc' }}>
                    <div className='col-6'> Contact Number</div>
                    <div className='col-6'>{user?.userDetails?.phone ? user?.userDetails?.phone : "XXXXXXXXXX"}</div>
                </div>

                {
                    user?.userDetails?.address ? <div className='row mx-4' style={{ borderBottom: '1px solid #ccc' }}>

                        <div className='col-6'> Address</div>
                        <div className='col-6'>{user?.userDetails?.address}</div>
                    </div> : <></>
                }

                {
                    user?.userDetails?.registerOption ? <div className='row mx-4' style={{ borderBottom: '1px solid #ccc' }}>

                        <div className='col-6'> Registered as </div>
                        <div className='col-6'>{Number(user?.userDetails?.registerOption) === 1 ? "Faculty" : Number(user?.userDetails?.registerOption) === 2 ? "Student" : "Non Nit User"}</div>
                    </div> : <></>
                }

                <div className='row mx-4' style={{ borderBottom: '1px solid #ccc' }}>
                    <div className='col-6'> Govt approved proof attached</div>
                    <div className='col-6'>
                        {/* <img src={user?.userDetails?.idProof?.data} alt="" /> */}
                        <button className="popup-button button-outline-dark"><a style={{ color: 'white' }} target="_blank" href={user?.userDetails?.idProof?.data}>View</a></button>
                        {/* {dialog && (
                            <div className="dialog">
                                <div className="dialog-content">
                                    <button className="close-icon" onClick={toggleDialog}>&#10005;</button>
                                    <div className = "popup" style ={{background : 'transparent'}} onClick={toggleDialog}>
                                    <img className="popup-image" src={user?.userDetails?.idProof?.data} alt="Popup Image" />
                                    </div>
                                </div>
                            </div>
                        )} */}
                    </div>
                </div>
            </div>

            {user?.userDetails?.registerOption === 3 &&
                <div className='my-4'>
                    <h2>Reference Details</h2>
                    <div className='row mx-4 ' style={{ borderBottom: '1px solid #ccc' }}>
                        <div className='col-6'> <strong>Name</strong></div>
                        <div className='col-6'><strong>{user?.referenceDetails?.refTo?.name}</strong> </div>
                    </div>
                    <div className='row mx-4 ' style={{ borderBottom: '1px solid #ccc' }}>
                        <div className='col-6'> Reference Type</div>
                        <div className='col-6'> {user?.referenceDetails?.refType}</div>
                    </div>

                    {
                        user?.referenceDetails?.refType === 'student' && <>
                            <div className='row mx-4' style={{ borderBottom: '1px solid #ccc' }}>
                                <div className='col-6'> Roll Number</div>
                                <div className='col-6'> {user?.referenceDetails?.refTo?.roll}</div>
                            </div>
                            <div className='row mx-4' style={{ borderBottom: '1px solid #ccc' }}>
                                <div className='col-6'> Department</div>
                                <div className='col-6'> {user?.referenceDetails?.refTo?.branch}</div>
                            </div>
                        </>
                    }

                    {
                        user?.referenceDetails?.refType === 'faculty' && <>
                            <div className='row mx-4' style={{ borderBottom: '1px solid #ccc' }}>
                                <div className='col-6'> Contact Number</div>
                                <div className='col-6'> {user?.referenceDetails?.refTo?.phone}</div>
                            </div>
                            <div className='row mx-4' style={{ borderBottom: '1px solid #ccc' }}>
                                <div className='col-6'> Department</div>
                                <div className='col-6'> {user?.referenceDetails?.refTo?.dept}</div>
                            </div>
                        </>
                    }

                    {
                        user?.referenceDetails?.refType === 'alumni' && <>
                            <div className='row mx-4' style={{ borderBottom: '1px solid #ccc' }}>
                                <div className='col-6'> Contact Number</div>
                                <div className='col-6'> {user?.referenceDetails?.refTo?.phone}</div>
                            </div>
                            <div className='row mx-4' style={{ borderBottom: '1px solid #ccc' }}>
                                <div className='col-6'> Department</div>
                                <div className='col-6'> {user?.referenceDetails?.refTo?.branch}</div>
                            </div>
                            <div className='row mx-4' style={{ borderBottom: '1px solid #ccc' }}>
                                <div className='col-6'> Batch</div>
                                <div className='col-6'> {user?.referenceDetails?.refTo?.batch}</div>
                            </div>
                            <div className='row mx-4' style={{ borderBottom: '1px solid #ccc' }}>
                                <div className='col-6'> Current Job</div>
                                <div className='col-6'> {user?.referenceDetails?.refTo?.currentJob}</div>
                            </div>
                        </>
                    }


                    {/* <div className = 'row mx-4'style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Branch</div>
                        <div className='col-6'> {branch}</div>
                    </div> */}
                    {/* <div className = 'row mx-4'style = {{borderBottom: '1px solid #ccc'}}>
                        <div className='col-6'> Email</div>
                        <div className='col-6'> {email}</div>
                    </div> */}
                </div>
            }
        </div>
    );
};

export default PersonalDetail;
