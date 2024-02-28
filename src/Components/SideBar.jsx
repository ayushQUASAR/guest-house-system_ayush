import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from './Table';
// import Image from "./p.jpg"
const SideBar = () => {
  const [user, setuser] = useState(null)
  console.log(" hum hai", user)

  const { userId } = useParams();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("this is data", data)
        setuser(data)
        console.log("humnihai", user)
      })
      .catch((err) => console.error(err.message))

  }, [])

  const renderIdProofContent = () => {
    if (user != null)
    // <>Nodata</>
    {
      if (user.userDetails.idProof.contentType.startsWith('image/')) {
        // Render an image if the content type starts with 'image/'
        return <img src={user.userDetails.idProof.data} alt='' />;
      } else if (user.userDetails.idProof.contentType === 'application/pdf' || user.userDetails.idProof.data.endsWith('.pdf')) {
        // Render a PDF using an iframe
        return <iframe title="ID Proof" src={user.userDetails.idProof.data} width="100%" height="500px" />;
      } else if (user.userDetails.idProof.data.startsWith('http') || user.userDetails.idProof.data.startsWith('www')) {
        // Handle URLs that are not PDFs or images
        return <a href={user.userDetails.idProof.data} target="_blank" rel="noopener noreferrer">View ID Proof</a>;
      } else {
        // Handle other content types or unsupported URLs
        return <p>Unsupported file format or URL: {user.userDetails.idProof.contentType}</p>;
      }
    }
    else return <>Nodata</>
  };


  return (
    <div className="container">


      <div className="card rounded-4 w-100" >

        <div className="card-header rounded-4" style={{ backgroundColor: '#0275d8', color: 'white', border: '5px solid #0275d8' }}>
          <h1>USER PROFILE</h1>
        </div>
        <div className="tables-container">

          {/* ## COMMENTED BY MRIDUL:   IMAGE WILL NOT WORK WITH RENDER, WILL HAVE TO WAIT FOR API TO HOSTED TO ANOTHER SERVICE */}
          {/* <div  >
          {renderIdProofContent(user)}
        </div> */}
          <hr style={{ border: '1px rgb(44, 42, 42) dotted' }} />
          <div>{user &&
            <>
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
              {user?.userDetails?.registerOption === 3 &&
                <div className='my-4'>
                  <div style = {{display : 'flex', justifyContent : 'center'}}>
                  <h2 >Reference Details</h2>

                  </div>
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
              {/* <table className="table">

          <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>{user.userDetails.name}</td>
            </tr>
            {
              user.userDetails.address &&  <tr>
              <th scope="row">Address</th>
              <td>{user.userDetails.address}</td>
            </tr>
            }
            <tr>
              <th scope="row">Registered as</th>
               <td>{user.userDetails.registerOption === 1 ? "Faculty" : user.userDetails.registerOption === 2 ? "Student" : "Non Nit User"}</td>
            </tr>
           
            <tr>
              <th scope="row">Contact Number</th>
              <td>{user.userDetails.phone}</td>
            </tr>
            <tr>
              <th scope="row">Email ID</th>
              <td>{user.userDetails.email}</td>
            </tr>
            <tr>
              <th scope="row">Govt. approved proof attached</th>
              <td><button className="popup-button button-outline-dark"><a style = {{color : 'white'}} target = "_blank" href={user?.userDetails?.idProof?.data}>View</a></button></td>
            </tr>
          </tbody>
        </table>
        <table className="table">

        
         { user?.userDetails?.registerOption === 3 && <>
          <h4>Reference:</h4>
          <tbody>
            <tr>
              <th scope="row"> Reference Name</th>
              <td>{user.referenceDetails.refTo.name}</td>
            </tr>
            <tr>
              <th scope="row">Reference Type</th>
              <td>{user.referenceDetails.refType}</td>
            </tr>
            {
             user.referenceDetails.refType === 'student'  && <>
                <tr>
              <th scope="row">Roll No.</th>
              <td>{user.referenceDetails.refTo.roll}</td>
            </tr>
            <tr>
              <th scope="row">Branch</th>
              <td>{user.referenceDetails.refTo.branch}</td>
            </tr>
             </>
            }

            {
              user.referenceDetails.refType === 'faculty' && <>
                <tr>
              <th scope="row">Contact Number.</th>
              <td>{user.referenceDetails.refTo.phone}</td>
            </tr>
            <tr>
              <th scope="row">Department</th>
              <td>{user.referenceDetails.refTo.dept}</td>
            </tr>
              </>
            }

            {
              user.referenceDetails.refType === 'alumni' && <>
                 <tr>
              <th scope="row">Branch</th>
              <td>{user.referenceDetails.refTo.branch}</td>
            </tr>
            <tr>
              <th scope="row">Contact No.</th>
              <td>{user.referenceDetails.refTo.phone}</td>
            </tr>
            <tr>
              <th scope="row">Batch</th>
              <td>{user.referenceDetails.refTo.batch}</td>
            </tr>
            <tr>
              <th scope="row">Current Job</th>
              <td>{user.referenceDetails.refTo.currentJob}</td>
            </tr>

              </>
            }
          </tbody>
         </>}
        </table> */}

            </>

          }</div>


        </div>
        <div  style = {{display : 'flex', justifyContent : 'center'}} className="card-body">

          <div class="d-flex flex-row bd-highlight mb-2">
            <div class="p-2 bd-highlight">

            </div>
            <div class="p-2 bd-highlight" className="table2">
              <h1 className="bookingTable" style={{ color: 'black' }}>BOOKINGS HISTORY</h1>
              <div>
                <Table userId={userId} />
              </div>
            </div>

          </div>

        </div>

      </div>


    </div>
  );
};

export default SideBar;
