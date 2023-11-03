

import React, { useState, useEffect } from "react";
import "./ApproveBooking.css";

const BookingApproval = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "John",
      guestHouse: 1,
      roomId: 123,
      email: "john@gmail.com",
      contactNumber: "1234567890",
      reference: "Student",
      reason: "Vacation",
      status: "Pending",
      accepting: false,
    },
    {
      id: 2,
      name: "Alice",
      guestHouse: 2,
      roomId: 456,
      email: "alice@gmail.com",
      contactNumber: "9876543210",
      reference: "Faculty",
      reason: "Conference",
      status: "Pending",
      accepting: false,
    },
    // Add more data as needed
  ]);

  const [undoRequest, setUndoRequest] = useState(null);
  const [deletedRequests, setDeletedRequests] = useState([]);
  const abortController = new AbortController();


  useEffect(() => {
    const timerInterval = setInterval(() => {
      const updatedRequests = requests.map((request) => {
        if (request.accepting && request.timer > 0) {
          return { ...request, timer: request.timer - 1 };
        }
        return request;
      });
      setRequests(updatedRequests);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
   
  }, [requests]);
  

  const handleAcceptClick = (id) => {
    const updatedRequests = requests.map((request) => {
      if (request.id === id) {
        // Simulate the API request after 10 seconds
        setTimeout(() => {
          // Check if the request has been canceled
          if (abortController.signal.aborted) {
            console.log("API request was canceled");
            return;
          }

          // Replace the following with your actual API request code
          // For example, using the fetch API:

          fetch("/backend", {
            method: "POST", // or "PUT" or "GET" depending on your API
            body: JSON.stringify(request), // You may need to adjust the request body
            headers: {
              "Content-Type": "application/json",
            },
            signal: abortController.signal, // Associate the signal with the request
          })
            .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error("API request failed");
              }
            })
            .then((data) => {
              // Handle the API response as needed
              console.log("API request success", data);
            })
            .catch((error) => {
              // Handle API request error
              console.error("API request error", error);
            });
        }, 10000); // 10 seconds

        return { ...request, status: "Accepted", accepting: true, timer: 10 };
      }
      return request;
    });
    setRequests(updatedRequests);
  };

  const handleRejectClick = (id) => {
    const rejectedRequest = requests.find((request) => request.id === id);
    if (rejectedRequest) {
      setDeletedRequests([...deletedRequests, rejectedRequest]);
      const updatedRequests = requests.filter((request) => request.id !== id);
      setRequests(updatedRequests);
      setUndoRequest(rejectedRequest);
    }
  };

  const handleUndoClick = () => {
    if (undoRequest) {
      const updatedRequests = [...requests];
      const updatedDeletedRequests = [...deletedRequests]; // Create a copy of the deleted requests
  
      // Retrieve and remove the most recent deleted request
      const mostRecentDeletedRequest = updatedDeletedRequests.pop();
  
      if (mostRecentDeletedRequest) {
        updatedRequests.push(mostRecentDeletedRequest);
      }
  
      setRequests(updatedRequests);
      setDeletedRequests(updatedDeletedRequests);
      setUndoRequest(null);
    }
  };
  

  
  const handleUndoApprovalClick = (id) => {
    abortController.abort();
    const updatedRequests = requests.map((request) => {
      if (request.id === id) {
        return { ...request, status: "Pending", accepting: false, timer: 0 };
      }
      return request;
    });
    setRequests(updatedRequests);
  };
  
  const handleRecoverClick = (id) => {
    const reversedRequest = requests.find((request) => request.id === id);
    if (reversedRequest) {
      const updatedRequests = requests.map((request) => {
        if (request.id === id) {
          return { ...request, status: "Pending" };
        }
        return request;
      });
      setRequests(updatedRequests);
    }
  };


  return (
    <div className="container">
      <div className="topbar">
        <h1>PENDING REQUESTS</h1>
      </div>
      <div className="d-flex flex-row bd-highlight mb-3 searchflex">
        <div className="p-2 bd-highlight">
          <input type="text" placeholder="Search" />
        </div>
        <div className="p-2 bd-highlight">
          <button type="button" className="btn btn-primary btn-sm">
            Search
          </button>
        </div>
        <div className="p-2 bd-highlight">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle btn-sm"
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
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Guest House</th>
              <th scope="col">Room id</th>
              <th scope="col">Email id</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Reference</th>
              <th scope="col">Reason of Booking</th>
              <th scope="col">Approval</th>
            </tr>
          </thead>
          <tbody>
        {requests.map((request, index) => (
          <tr key={request.id}>
             <td scope="row">{index + 1}</td>
                <td>{request.name}</td>
                <td>{request.guestHouse}</td>
                <td>{request.roomId}</td>
                <td>{request.email}</td>
                <td>{request.contactNumber}</td>
                <td>{request.reference}</td>
                <td>{request.reason}</td>
                <td></td>
            {/* ... other table cells ... */}
            <td>
              {request.status === "Pending" ? (
                request.accepting ? (
                  `Accepting (${request.timer}s)`
                ) : (
                  <>
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      onClick={() => handleAcceptClick(request.id)}
                      disabled={request.status !== "Pending" || request.accepting}
                      style={{ marginRight: "5px", marginLeft: "5px" }}
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRejectClick(request.id)}
                      disabled={request.status !== "Pending"}
                      style={{ marginLeft: "5px" }}
                    >
                      Reject
                    </button>
                  </>
                )
              ) : (
                <>
                  <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick={() => handleAcceptClick(request.id)}
                    disabled={request.status !== "Pending" || request.accepting}
                    style={{ marginRight: "5px", marginLeft: "5px" }}
                  >
                    {request.accepting
                      ? `Accepting (${request.timer}s)`
                      : "Accepted"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => handleUndoApprovalClick(request.id)}
                    disabled={request.status !== "Accepted"}
                    style={{ marginLeft: "5px" }}
                  >
                    Undo Approval
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
        </table>
      </div>

      <div className="footbutton">
        <button type="button" className="btn btn-primary"  onClick={()=>handleUndoClick()}>
          revert
        </button>
      </div>
    </div>
  );
};

export default BookingApproval;