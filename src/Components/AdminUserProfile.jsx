import '../style/adminprofile.css';
import {useState, useEffect} from 'react'; 
import {useUserContext} from './ContextHooks/UserContext';
export default function AdminUserProfile(){
    const [profilePhoto, setProfilePhoto] = useState('./p.jpg');
    const [newPhoto, setNewPhoto] = useState(null);
    const[saveButton, setSaveButton] = useState(false);
    const {userId } = useUserContext();
    const [user, setUserDetails] = useState([]);

    const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setSaveButton(true);
  };
  useEffect(() => {
    let url =`${import.meta.env.VITE_API_URL}/login/admin/${userId}`;
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) =>{
        console.log(data);
        setUserDetails(data);
      }
      )
      .catch((err) => console.log(err.message));
   }, []);
  const handleSave = () => {
    if (newPhoto) {
        setProfilePhoto(newPhoto);
        setNewPhoto(null);
      }
      setSaveButton(false);
      
  };
    return(
        <div className = 'background-container dual-background'>
            <div className = "container-fluid">
                <div className='row'>
                <div className="col-4" >
                    <div className="row" style={{ margin: '15% 15% 0% 15%' }}>
                        <img src={profilePhoto} alt="Profile" style={{ width: '10rem', height: 'auto', padding: 'auto 0px' }} />
                    </div >
                    {/* <div style = {{position : 'relative', left : '50%' }}> */}
                    <div style={{ alignItems: 'Right', textAlign: 'Right', right: '20%' }}>
                        <label htmlFor="fileInput" style={{ cursor: 'pointer', color: 'black' }}>
                            <i className="fa fa-camera" style={{ fontSize: '150%' }}></i>
                        </label>
                        <input type="file"
                            accept="image/*"
                            id="fileInput"
                            onChange={handlePhotoChange}
                            style={{ display: 'none' }}
                        />
                        {saveButton && <button onClick={handleSave} style={{ backgroundColor: 'white', color: 'black', fontSize: '100%' }}>Save Photo</button>}
                    </div>
                </div>
                <div className = "col-8">
                    <div className = 'row text-center' style = {{margin : '10%'}}>
                        <h2  style = {{color : 'white'}}><strong>{user?.userDetails?.name}</strong></h2>
                    </div>

                    <div className = 'admin-info-container row'>
                        <div className = 'col-2'></div>
                        <div className='col-8'>

                        <div className='row'>
                        <h3 style = {{borderBottom : '2px solid black', padding : '10px'}}>Admin Information :</h3>

                        </div>
                        <div className = 'row'>
                            <div className = 'col-4' style = {{overflow :'auto'}}><strong>Email:</strong></div>
                            <div className = 'col-8' > {user?.userDetails?.email}</div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-4' style = {{overflow :'auto'}}><strong>Contact Number :</strong></div>
                            <div className = 'col-8' style = {{overflow :'auto'}}>{user?.userDetails?.phone}</div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-4' style = {{overflow :'auto'}}><strong>Role :</strong></div>
                            <div className = 'col-8' style = {{overflow :'auto'}}>{user?.userDetails?.role}</div>
                        </div>
                        {/* <div className = 'row'>
                            <div className = 'col-6' style = {{overflow :'auto'}}><strong>DOJ :</strong></div>
                            <div className = 'col-6' style = {{overflow :'auto'}}>{user?.userDetails?.DOJ}</div>
                        </div> */}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}