import '../style/adminprofile.css';
import { useState, useEffect } from 'react';
import { useUserContext } from './ContextHooks/UserContext';
export default function AdminUserProfile() {
    const { userId } = useUserContext();
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
        let url = `${import.meta.env.VITE_API_URL}/login/admin/${userId}`;
        fetch(`${url}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUserDetails(data);
            }
            )
            .catch((err) => console.log(err.message));
    }, []);

    return (
        <div className="container-fluid"> 
                <div className='row admin-profile'>
                    
                    <h2><strong>Admin Profile</strong> </h2>

                </div>
                <div className = "admin-data">

                <div className='row'>
                    <div className='col-4 col-md-4 col-sm-12' style={{ overflow: 'auto', fontSize: '150%' }}><strong>Email:</strong></div>
                    <div className='col-8 col-md-8 col-sm-12' style={{ overflow: 'auto', fontSize: '150%' }}  > {user[0]?.email}</div>
                </div>
                <div className='row'>
                    <div className='col-8 col-md-4 col-sm-12' style={{ overflow: 'auto', fontSize: '150%' }}><strong>Role :</strong></div>
                    <div className='col-8 col-md-8 col-sm-12' style={{ overflow: 'auto', fontSize: '150%' }}>{user[0]?.isMainAdmin ? "Main Admin" : "Admin"}</div>
                </div>
            </div>
        </div>

    )
}