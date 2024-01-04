import DeleteIcon from '@mui/icons-material/DeleteRounded';
import '../style/adminlist.css'
function AdminsList(user){
    const adminData = [{email : '12345@gmail.com'},{email : '12343@nitj.ac.in'},{email : '12345@gmail.com'},{email : '12343@nitj.ac.in'}]
    const handleDeleteClick = () => { 
        const userConfirmed = window.confirm('Do you want to delete the admin?');
     
        if (userConfirmed) { 
          alert('Admin details deleted successfully!');
        } else { 
          alert('Deletion canceled!');
        }
      };
    return(
        <div className='container-admin-list' >
            <h1 style = {{color : 'black'}}>Admin List</h1>
            <div className = 'row'>
                <div className="col-3"><strong>S.No. </strong> </div>
                <div className="col-7"><strong>EMAIL</strong></div>
                <div className="col-2"></div> 
            </div>
            {/* map through the array of objects and display each object as a row in table */}
            {adminData && adminData.map((data,index) => (
                <div className = 'row'>
                    <div className="col-3">{index + 1}</div>
                    <div className="col-7">{data.email}</div>
                    <div className="col-2"><button style = {{border : '0px'}}onClick={handleDeleteClick}><DeleteIcon/></button></div>  
                    <hr />
                </div>
                ))}

        </div>
    )
}
export default AdminsList;