import React, {useState, useEffect} from "react";
import  "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';



const Approvaltable = () => { 
const [pendingUsers, setPendingUsers] = useState(null);

useEffect(()=> {
  fetch("http://localhost:4000/users/approved/pending")
  .then((res) => res.json())
  .then((data) =>{ setPendingUsers(data); console.log(data)})
  .then((err) => console.log(err));
}, []);


const handleApproval = (id, status) => {
      fetch("http://localhost:4000/admin/approveRegistration", {
        method: "POST",
        mode:"cors",
        body : JSON.stringify({
           user: id,
          status: `${status}`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.json())
      .then((data)=> {
        console.log(data);
        window.alert(data.message);

        setPendingUsers((prev) => {
                const selectedUsers  = prev.filter((user) => user.user._id !== id);
                return selectedUsers;
        })
      
      })
      .catch((err) => console.log(err));
}



// pendingUsers.map((user, index) => {
// return  <tr key={user._id}>
//                <td scope="row">{index+1}</td>
//             <td>{user.name}</td> 
//             <td>{user.email}</td>
//             <td>{user.phone}</td>
//             <td>{user.refInfo}</td> 
//             <td><button type="button" class="btn btn-success btn-sm">Accept</button> <button type="button" class="btn btn-danger btn-sm">Reject</button></td>
//   </tr>
// })

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <td scope="col">S.No</td>
            <td scope="col">Name</td> 
            <td scope="col">Email id</td>
            <td scope="col">Contact Number</td>
            <td scope="col">Reference</td> 
            <td scope="col">Approval</td>
          </tr>
        </thead>

        <tbody>
          {
           pendingUsers && pendingUsers.length > 0 &&  pendingUsers.map((user, index) => {
              return  <tr key={user._id}>
                             <td scope="row">{index+1}</td>
                          <td>{user.user.name}</td> 
                          <td>{user.user.email}</td>
                          <td>{user.user.phone}</td>
                          <td>{user.user.refInfo}</td> 
                          <td><button type="button" class="btn btn-success btn-sm" onClick={()=> {handleApproval(user.user._id, 'accept')}}>Accept</button> <button type="button" class="btn btn-danger btn-sm" onClick={() => handleApproval(user.user._id, 'reject')}>Reject</button></td>
                </tr>
              })
          }


         
        </tbody>
      </table>
    </>
  );
};

export default Approvaltable;