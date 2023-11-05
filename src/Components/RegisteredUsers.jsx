
import React, { useState, useEffect } from 'react';
import "../style/registered.css"
import SideBar from "./SideBar"
import CancelIcon from '@mui/icons-material/Cancel';
import Table from "./Table";

export default function RegisteredUsers() {


  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    contactNumber: '',
    email: '',
  });
  const [view, setProfileview] = useState(null);
  const viewUserProfile = (user) => {
    setProfileview(user);
   


  };


  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/users/approved/registered")
      .then((res) => res.json())
      .then((data) => { setUsers(data); console.log("regusers",data) })
      .catch((err) => console.error(err));
  }, []);

  const addNewUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ name: '', contactNumber: '', email: '' });
  };



  return (
    <div className='registered-container my-5'>
      {view && <div className="profile-popup">
        <div className='profile-close-btn' onClick={() => setProfileview(false)}>
          <CancelIcon style={{ fontSize: 50 , color : '#275cb6'  }} />
        </div>
        <div className="card rounded-4 w-100" >
        <div className="card-header rounded-4" style={{ backgroundColor: '#0275d8', color: 'white', border: '5px solid #0275d8' }}>
          <h1>USER PROFILE</h1>
        </div>

        <div className="card-body">

          <div class="d-flex flex-row bd-highlight mb-2">
            <div class="p-2 bd-highlight">
              <SideBar user={view} /> 
            </div>
            <div class="p-2 bd-highlight" className="table2">
              <h1 className="bookingTable">BOOKINGS HISTORY</h1>
              <div className="t">
                <Table />
              </div>
            </div>

          </div>

        </div>

      </div>
      </div>}

      <div className="card rounded-4 w-100" style={{ backgroundColor: '#4c74b9', color: 'white' }}>
        <div className="card-header mx-4" >
          <h3 style={{fontWeight:'700'}}className="car" >REGISTERED USERS</h3>
          <p style={{color:'white'}}>Total number of Registration Users:  {users.length}</p>
        </div>
        <div className="card-body text-black bg-white rounded-bottom-4 ">

          <div className="search-bar">
            <input className={"border-3 rounded-2 border-primary-subtle"}
              type="text"
              placeholder="Search by name, email, or contact number"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="button" className={"rounded-2 border-primary mx-3"} style={{ backgroundColor: '#0275d8', color: 'white' }}>  Search  </button>
            <select className={"border-2 rounded-2 border-secondary"}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">Filter</option>
              <option value="name">Name</option>
              <option value="contactnumber">Contact Number</option>
              <option value="email">Email ID</option>
            </select>
          </div>

          <table className="table">
            <thead>
              <tr className="fw-semibold">
                <th scope="col">S.No.</th>
                <th scope="col">Name</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Email Id</th>
                <th scope="col">User Profile,<br />Booking History</th>
              </tr>
            </thead>
            <tbody>
              {users && users.length > 0 && users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.user.name}</td>
                  <td>{user.user.phone}</td>
                  <td>{user.user.email}</td>
                  <td>
                    <button className={"rounded-2 border-primary mx-3"} style={{ backgroundColor: '#0275d8', color: 'white' }} onClick={() => viewUserProfile(user.user)}>
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className={"rounded-2 border-primary"} style={{ backgroundColor: '#0275d8', color: 'white' }} onClick={addNewUser}>Add New User</button>
        </div>
      </div>
    </div>
  );
}; 