import React, {useState, useEffect} from "react";
import  "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../style/Approvaltable.css"

const Approvaltable = () => { 
const [pendingUsers, setPendingUsers] = useState(null);

useEffect(()=> {
  fetch(import.meta.env.VITE_API_URL + "/users/approved/pending")
  .then((res) => res.json())
  .then((data) =>{ setPendingUsers(data); console.log("pendinguserdata",data)})
  .then((err) => console.log(err));
}, []);

const handleApproval = (id, status) => {
      fetch(import.meta.env.VITE_API_URL + "/admin/approveRegistration", {
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
      <div class="approval-table">
        <div className="grid-table">
        
            <div>S.No</div>
            <div>Name</div> 
            <div>Email id</div>
            <div>Contact Number</div>
            <div>Reference</div> 
            <div>Approval</div>
        
        </div>

        <div className="table-content">
          {
           pendingUsers && pendingUsers.length > 0 &&  pendingUsers.map((user, index) => {
              return  <div className="grid-table-content" key={user._id}>
                             <div>{index+1}</div>
                          <div>{user.user.name}</div> 
                          <div>{user.user.email}</div>
                          <div>{user.user.phone}</div>
                          <div>{user.user.refInfo}</div> 
                          <div><button type="button" class="btn btn-success btn-sm mr-3" onClick={()=> {handleApproval(user.user._id, 'accept')}}>Accept</button> <button type="button" class="btn btn-danger btn-sm" onClick={() => handleApproval(user.user._id, 'reject')}>Reject</button></div>
                </div>
              })
          }


         
        </div>
      </div>
    </>
  );
};

export default Approvaltable;