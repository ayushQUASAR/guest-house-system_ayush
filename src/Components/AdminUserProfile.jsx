import '../style/adminprofile.css';
import {useState} from 'react'; 
export default function AdminUserProfile({user}){
    const [profilePhoto, setProfilePhoto] = useState('./adminProfile.png');
    const [newPhoto, setNewPhoto] = useState(null);
    const[saveButton, setSaveButton] = useState(false);

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
                <div className = "col-5" >
                    <div className = "row double-border" style = {{margin : '15% 15% 0% 15%'}}>
                    <img src={profilePhoto}     alt="Profile" style={{ width: '10rem', height: 'auto', padding : 'auto 0px', borderRadius : '50%' }} />
                    </div>
                    <div style = {{position : 'relative', left : '50%' }}>
                        <label htmlFor="fileInput" style={{ cursor: 'pointer', color : 'white'}}>
                        <i class="fa fa-camera" style = {{fontSize : '150%'}}></i> 
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            id="fileInput"
                            onChange={handlePhotoChange}
                            style={{ display: 'none' }}
                        />
                        {saveButton && <button onClick={handleSave} style = {{backgroundColor : '#648aca', color : 'white', fontSize : '50%'}}>Save Photo</button> }
                    </div> 
                </div>
                <div className = "col-7">
                    <div className = 'row text-center' style = {{margin : '10%'}}>
                        <h2  style = {{color : 'white'}}><strong>{user?.userDetails?.name}</strong></h2>
                    </div>
                    <div className='row' style = {{ display: 'inline'}}>
                        <img src= './comments.png' alt="Comment Image" style = {{width: '10%', display: 'inline', paddingRight: '2%'}} />
                        <span style = {{color : 'white', display: 'inline', fontSize: '1rem'}}>Send Message</span>
                        
                    </div>

                    <div className = 'admin-info-container row'>
                        <div className = 'col-2'></div>
                        <div className='col-8'>

                        <div className='row'>
                        <h3 style = {{borderBottom : '2px solid black', padding : '10px'}}>Admin Information :</h3>

                        </div>
                        <div className = 'row'>
                            <div className = 'col-4' style = {{overflow :'auto'}}><strong>Email:</strong></div>
                            <div className = 'col-8' >mriduld.cs.21@nitj.ac.in</div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-4' style = {{overflow :'auto'}}><strong>Role :</strong></div>
                            <div className = 'col-8' style = {{overflow :'auto'}}>Guest House Admin</div>
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