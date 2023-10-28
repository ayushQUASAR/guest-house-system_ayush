
import React, { useState,useEffect } from 'react';


export default function RegisteredUsers() {


  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    contactNumber: '',
    email: '',
  });
  const [selectedUserId, setSelectedUserId] = useState(null);
  const viewUserProfile = (userId) => {
    setSelectedUserId(userId);
  };


  useEffect(()=> {
      fetch("http://localhost:4000/users/approved/registered")  
      .then((res) => res.json()) 
    .then((data) => {setUsers(data);console.log(data)})
    .catch((err) => console.error(err));
  }, []);

  const addNewUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ name: '', contactNumber: '', email: '' });
  };



  return (
    <div className='container my-5'>

      <div className="card rounded-4 w-100" style={{ backgroundColor: '#0275d8', color: 'white', border: '5px solid #0275d8' }}>
        <div className="card-header mx-4" >
          <h3 className="car" >REGISTERED USERS</h3>
          <p>Total number of Registration Users:  {users.length}</p>
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
              {users && users.length>0 && users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.user.name}</td>
                  <td>{user.user.phone}</td>
                  <td>{user.user.email}</td>
                  <td>
                    <button className={"rounded-2 border-primary mx-3"} style={{ backgroundColor: '#0275d8', color: 'white' }} onClick={() => viewUserProfile(user.user._id)}>
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