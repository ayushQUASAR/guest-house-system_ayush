import DeleteIcon from '@mui/icons-material/DeleteRounded';
import '../style/adminlist.css'; 
import {useState, useEffect}  from 'react';
function AdminsList(){ 
    const handleDeleteClick =  (id) => { 
      const userConfirmed = window.confirm('Do you want to delete the admin?');
      if (userConfirmed) { 
        // alert('Admin details deleted successfully!');
          const deleteAdmin =  () => {
              fetch(`${import.meta.env.VITE_API_URL}/login/admin/${id}`, {
                method: "DELETE"
              }).then((res) => res.json())
              .then((data) => console.log(data.message))
              .catch((error) => window.alert(error.message))

          }

          deleteAdmin();
      } else { 
        console.log('Deletion canceled!');
      }
    };
    const [users, setUserDetails] = useState([]);  
    useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/login/admin`)
      .then((res) => res.json())
      .then((data) =>{
        console.log("the data is " +data);
        setUserDetails(data);
      }
      )
      .catch((err) => console.log(err.message));
    });   
    return(
        <div className='container-admin-list' >
            <h1 style = {{color : 'black'}}>Admin List</h1>
            <div className = 'row'>
                <div className="col-3"><strong>S.No. </strong> </div>
                <div className="col-7"><strong>EMAIL</strong></div>
                <div className="col-2"></div> 
            </div>
            {/* map through the array of objects and display each object as a row in table */}
            {/* {users && Array.isArray(users) && users.map((user,index) => ( */}
            {users&& users.map((user,index) => (
              
                !user.isMainAdmin  ?  <div className = 'row'>
                <div className="col-3">{index + 1}</div>
                <div className="col-7">{user?.email}</div>
                <div className="col-2"><button style = {{border : '0px'}}onClick={() => handleDeleteClick(user?._id)}><DeleteIcon/></button></div>  
                <hr />
            </div> : <></>
              
               
                ))}

        </div>
    )
}
export default AdminsList;