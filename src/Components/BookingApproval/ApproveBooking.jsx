

// import React, { useState, useEffect } from "react";
// import "./ApproveBooking.css";

// const BookingApproval = () => {
//   const [requests, setRequests] = useState([
//     // {
//     //   id: 1,
//     //   name: "John",
//     //   guestHouse: 1,
//     //   roomId: 123,
//     //   email: "john@gmail.com",
//     //   contactNumber: "1234567890",
//     //   reference: "Student",
//     //   reason: "Vacation",
//     //   status: "Pending",
//     //   accepting: false,
//     // },
//     // {
//     //   id: 2,
//     //   name: "Alice",
//     //   guestHouse: 2,
//     //   roomId: 456,
//     //   email: "alice@gmail.com",
//     //   contactNumber: "9876543210",
//     //   reference: "Faculty",
//     //   reason: "Conference",
//     //   status: "Pending",
//     //   accepting: false,
//     // },
//     // Add more data as needed
//   ]);



//   const [undoRequest, setUndoRequest] = useState(null);
//   const [deletedRequests, setDeletedRequests] = useState([]);
//   const abortController = new AbortController();

//  useEffect(()=> {
//  fetch(import.meta.env.VITE_API_URL + "/booking/approved/pending")
//  .then((res) => res.json())
// .then((data) => setRequests(() => {
//    const dataSet = data.map((eachData) => {
//     return {...eachData, accepting: false}
//    })

//   return dataSet;
// }))
// .catch((err) => console.error(err.message));
//   }, [])

//   useEffect(() => {
//     const timerInterval = setInterval(() => {
//       const updatedRequests = requests && requests.map((request) => {
//         if (request.accepting && request.timer > 0) {
//           return { ...request, timer: request.timer - 1 };
//         }
//         return request;
//       });
//       setRequests(updatedRequests);
//     }, 1000);

//     return () => {
//       clearInterval(timerInterval);
//     };
   
//   }, [requests]);
  

//   const handleAcceptClick = (id) => {
//     const updatedRequests = requests.map((request) => {
//       if (request._id === id) {
//         // Simulate the API request after 10 seconds
//         setTimeout(() => {
//           // Check if the request has been canceled
//           if (abortController.signal.aborted) {
//             console.log("API request was canceled");
//             return;
//           }

//           // Replace the following with your actual API request code
//           // For example, using the fetch API:

//           fetch(import.meta.env.VITE_API_URL + "/admin/bookingApproval", {
//             method: "POST", // or "PUT" or "GET" depending on your API
//             body: JSON.stringify({
//               booking: request._id,
//               status: 'accept'
//             }), // You may need to adjust the request body
//             headers: {
//               "Content-Type": "application/json",
//             },
//             signal: abortController.signal, // Associate the signal with the request
//           })
//             .then((response) => {
//               if (response.ok) {
//                 return response.json();
//               } else {
//                 throw new Error("API request failed");
//               }
//             })
//             .then((data) => {
//               // Handle the API response as needed
//               console.log("API request success", data);
//             })
//             .catch((error) => {
//               // Handle API request error
//               console.error("API request error", error);
//             });
//         }, 10000); // 10 seconds

//         return { ...request, status: "Accepted", accepting: true, timer: 10 };
//       }
//       return request;
//     });
//     setRequests(updatedRequests);
//   };

//   const handleRejectClick = (id) => {
//       fetch(import.meta.env.VITE_API_URL + "/admin/bookingApproval", {
//         method: "POST",
//         mode : "cors",
//         headers : {
//           "Content-Type" : "application/json"
//         },
//         body : JSON.stringify({
//         booking: id,
//         status: 'reject'
//         })
//       })
//       .then((res)=> res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.error(err.message))
//     const rejectedRequest = requests.find((request) => request._id === id);
//     if (rejectedRequest) {
//       setDeletedRequests([...deletedRequests, rejectedRequest]);
//       const updatedRequests = requests.filter((request) => request._id !== id);
//       setRequests(updatedRequests);
//       setUndoRequest(rejectedRequest);
//     }
//   };

//   const handleUndoClick = () => {
//     if (undoRequest) {
//       const updatedRequests = [...requests];
//       const updatedDeletedRequests = [...deletedRequests]; // Create a copy of the deleted requests
  
//       // Retrieve and remove the most recent deleted request
//       const mostRecentDeletedRequest = updatedDeletedRequests.pop();
  
//       if (mostRecentDeletedRequest) {
//         updatedRequests.push(mostRecentDeletedRequest);
//       }
  
//       setRequests(updatedRequests);
//       setDeletedRequests(updatedDeletedRequests);
//       setUndoRequest(null);
//     }
//   };
  

  
//   const handleUndoApprovalClick = (id) => {
//     abortController.abort();
//     const updatedRequests = requests.map((request) => {
//       if (request.id === id) {
//         return { ...request, status: "pending", accepting: false, timer: 0 };
//       }
//       return request;
//     });
//     setRequests(updatedRequests);
//   };
  
//   const handleRecoverClick = (id) => {
//     const reversedRequest = requests.find((request) => request.id === id);
//     if (reversedRequest) {
//       const updatedRequests = requests.map((request) => {
//         if (request.id === id) {
//           return { ...request, status: "Pending" };
//         }
//         return request;
//       });
//       setRequests(updatedRequests);
//     }
//   };


//   return (
//     <div className="container">
//      <div className="topbar">
//         <h1>PENDING REQUESTS</h1>
//       </div>
//      <div className="d-flex flex-row bd-highlight mb-3 searchflex">
//         <div className="p-2 bd-highlight">
//           <input type="text" placeholder="Search" />
//         </div>
//         <div className="p-2 bd-highlight">
//           <button type="button" className="btn btn-primary btn-sm">
//             Search
//           </button>
//         </div>
//         <div className="p-2 bd-highlight">
//           <div className="dropdown">
//             <button
//               className="btn btn-secondary dropdown-toggle btn-sm"
//               type="button"
//               id="dropdownMenuButton"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               FILTER
//             </button>
//             <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//               <a className="dropdown-item" href="#">
//                 Action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="table-container">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">S.No</th>
//               <th scope="col">Name</th>
//               <th scope="col">Guest House</th>
//               <th scope="col">No. of Rooms</th>
//               <th scope="col">Email id</th>
//               <th scope="col">Contact Number</th>
//               <th scope="col">Reason of Booking</th>
//               <th scope="col">Approval</th>
//             </tr>
//           </thead>
//           <tbody>
//         {requests.map((request, index) => (
//           <tr key={request.id}>
//              <td scope="row">{index + 1}</td>
//                 <td>{request.name}</td>
//                 <td>{request.guestHouseSelected}</td>
//                 <td>{request.roomsSelected}</td>
//                 <td>{request.email}</td>
//                 <td>{request.phone}</td>
//                 <td>{request.purpose}</td>
//                 <td>{request.status}</td>
//             {/* ... other table cells ... */}
//             <td>
//               {request.status === "pending" ? (
//                 request.accepting ? (
//                   `Accepting (${request.timer}s)`
//                 ) : (
//                   <>
//                     <button
//                       type="button"
//                       className="btn btn-success btn-sm"
//                       onClick={() => handleAcceptClick(request._id)}
//                       disabled={request.status !== "pending" || request.accepting}
//                       style={{ marginRight: "5px", marginLeft: "5px" }}
//                     >
//                       Accept
//                     </button>
//                     <button
//                       type="button"
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleRejectClick(request._id)}
//                       disabled={request.status !== "pending"}
//                       style={{ marginLeft: "1px" }}
//                     >
//                      Reject
//                     </button>
//                   </>
//                 )
//               ) : (
//                 <>
//                   <button
//                     type="button"
//                     className="btn btn-success btn-sm"
//                     onClick={() => handleAcceptClick(request.id)}
//                     disabled={request.status !== "pending" || request.accepting}
//                     style={{ marginRight: "5px", marginLeft: "5px" }}
//                   >
//                     {request.accepting
//                       ? `Accepting (${request.timer}s)`
//                       : "Accepted"}
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-primary btn-sm"
//                     onClick={() => handleUndoApprovalClick(request.id)}
//                     disabled={request.status !== "approved"}
//                     style={{ marginLeft: "5px" }}
//                   >
//                     Undo Approval
//                   </button>
//                 </>
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//         </table>
//       </div>

//       {/* <div className="footbutton">
//         <button type="button" className="btn btn-primary"  onClick={()=>handleUndoClick()}>
//           revert
//         </button>
//       </div> */}
//     </div>
//   );
// };

// export default BookingApproval;


import React, {useState} from "react";
import Table from "./ApproveTable";
// import "../style/middle.css";
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import  "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Approve = () => {
  const [isFirstPage, setIsFirstPage] = useState(true);

  const removeFilter = () => {
    setIsFirstPage(false);
  }

  
  return (
    <>
      <div className="Approve-container">
        <div className="approve-topbar">
          <h1>APPROVAL BOOKING</h1>
      
      { isFirstPage ? <div className="d-flex flex-row bd-highlight mb-3 searchflex">
          <div className="p-2 bd-highlight">
            <input
              type="text"
              placeholder="Search..."
              className="form-control" // Added form-control class for consistent sizing
            />
          </div>
          <div className="p-2 bd-highlight">
            <button type="button" className="btn btn-primary">
              Search
            </button>
          </div>
          <div className="p-2 bd-highlight">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                FILTER
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </div> : <></> }
        </div>
        <div className="approve-table-wrapper">
          <Table onSecondPage={removeFilter} />
        </div>
        {/* <div className="footbutton">
          <button type="button" className="btn btn-primary">
            Add new user
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Approve;
