

import React, { useState, useEffect } from "react";
import "../style/registered.css";
import SideBar from "./SideBar";
import CancelIcon from "@mui/icons-material/Cancel";
import Table from "./Table";
import ConfirmationPopup from "./PopUp/ConfirmationPopup.jsx"; // Assuming you have renamed your component to ConfirmationPopup
import { useNavigate } from "react-router-dom";

export default function RegisteredUsers() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState(""); 
  const usersPerPage = 6; // Number of users to display per page
  const [filteredUsers, setFilteredUsers] = useState([]);
  // const [newUser, setNewUser] = useState({
  //   name: "",
  //   contactNumber: "",
  //   email: "",
  // });
  const [view, setProfileview] = useState(null);
  const [isConfirmationPopupOpen, setConfirmationPopup] = useState(false);
  // const viewUserProfile = (user) => {
  //   setProfileview(user);
  // };
  const viewUserProfile = (user) => {
    // setProfileview(user);
    window.open(`/profile/${user._id}`, '_blank');
  };
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/users/approved/registered")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data); 
        console.log("regusers", data);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    filterUsers();
  }, [search, filter, users]);

  const filterUsers = () => {
    let filteredList = [...users];

    if (search) {
      const searchLowerCase = search.toLowerCase();
      filteredList = filteredList.filter(
        (user) =>
          user.user?.name.toLowerCase().includes(searchLowerCase) 
      );
    }

    if (filter) {
      filteredList.sort((a, b) =>
        a.user[filter].localeCompare(b.user[filter])
      );
    }

    setFilteredUsers(filteredList);
  };
  const deleteUser = (user) => {
    const userId = user._id;
    console.log(userId);
    const confirm = window.confirm(
      `Are you sure you want to delete ${user.name}?`
    );

    if (confirm === true) {
      // Make a DELETE request to the API endpoint
      fetch(`${import.meta.env.VITE_API_URL}/users/${userId}?status=registered`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            // If the deletion is successful, update the state or perform any necessary actions
            console.log("User deleted successfully");
            navigate(0);
            // Update the state or perform any necessary actions here
          } else {
            console.error("Failed to delete user");
            // Handle the error or show a message to the user
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const pages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    // <div className="registered-container my-5">
    <div className = "registered-container">
      {view && (
        <div className="profile-popup">
          <div
            className="profile-close-btn"
            onClick={() => setProfileview(false)}
          >
            <CancelIcon style={{ fontSize: 50, color: "#275cb6" }} />
          </div>
          <div className="card rounded-4 w-100">
            {/* <div
              className="card-header rounded-4"
              style={{
                backgroundColor: "#0275d8",
                color: "white",
                border: "5px solid #0275d8",
              }}
            >
              <h1>USER PROFILE</h1>
            </div> */}
            <div className="card-body">
              <div className="d-flex flex-row bd-highlight mb-2">
                <div className="p-2 bd-highlight">
                  <SideBar view={view} />
                </div>
                {/* <div className="p-2 bd-highlight table2">
                  <h1 className="bookingTable" >BOOKINGS HISTORY</h1>
                  <div className="t">
                    <Table />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="data-container" >
        <div className="registered-header">
          <h3 style={{ fontWeight: "700", color : 'white' }} className="car">
            REGISTERED USERS
          </h3>
          <p style={{ color: "white" }}>
            Total number of Registration Users: {users.length}
          </p>
        </div>
        <div className="search-box">
          <div className="search-bar">
            <input
              className="border-3 rounded-2 border-primary-subtle"
              type="text"
              placeholder="Search by name, email, or contact number"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="button"
              className="rounded-2 border-primary mx-3"
              style={{ backgroundColor: "#0275d8", color: "white" }}
            >
              Search
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="fw-semibold">
                <th scope="col">S.No.</th>
                <th scope="col">Name</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Email Id</th>
                <th scope="col">User Profile, Booking History</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {(!search || search === "") && currentUsers &&
                currentUsers.length > 0 &&
                currentUsers.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.user?.name}</td>
                    <td>{user.user?.phone}</td>
                    <td>{user.user?.email}</td>
                    <td>
                      <button
                        className="rounded-2 border-primary mx-3"
                        style={{ backgroundColor: "#0275d8", color: "white" }}
                        onClick={() => viewUserProfile(user.user)}
                      >
                        View Profile
                      </button>
                    </td>

                    <td>
                      <button
                        className="rounded-2 border-danger mx-3"
                        style={{ backgroundColor: "red", color: "white" }}
                        onClick={() => deleteUser(user.user)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>

            <tbody>
              {(search && search !== "") && currentUsers &&
                currentUsers.length > 0 &&
                currentUsers.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.user?.name}</td>
                    <td>{user.user?.phone}</td>
                    <td>{user.user?.email}</td>
                    <td>
                      <button
                        className="rounded-2 border-primary mx-3"
                        style={{ backgroundColor: "#0275d8", color: "white" }}
                        onClick={() => viewUserProfile(user.user)}
                      >
                        View Profile
                      </button>
                    </td>

                    <td>
                      <button
                        className="rounded-2 border-danger mx-3"
                        style={{ backgroundColor: "red", color: "white" }}
                        onClick={() => deleteUser(user.user)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          <tfoot>
            <tr>
              <td colSpan="6">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                    >
                              <span aria-hidden="true">&laquo;</span>
                              <span className="sr-only">Previous</span>
                    </button>
                  </li>
                  {Array.from({ length: pages }).map((_, index) => (
                    <li key={index + 1} className="page-item">
                      <button
                        className={`page-link ${currentPage === index + 1 && "active"}`}
                        onClick={() => paginate(index + 1)}
                        >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={handleNextPage}
                      disabled={currentPage === pages}
                      >
                     <span aria-hidden="true">&raquo;</span>
                     <span class="sr-only">Next</span>
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
          </tfoot>
         </table>
          {isConfirmationPopupOpen && (
            <ConfirmationPopup
              confirmationP={setConfirmationPopup}
              messageHead="Do you want to delete this user ?"
              username=""
            />
          )}
        </div>
      </div>
    </div>
  );
}
