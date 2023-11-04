// import Image from '';
import '../style/adminprofile.css';
// import Image2 from ;
export default function AdminUserProfile(){
    return(
        <div className = 'background-container dual-background'>
            <div className = "container-fluid">
                <div className='row'>
                <div className = "col-5" >
                    <div className = "row double-border" style = {{margin : '15%'}}>
                        <img src= "./adminProfile.png" alt="" style = {{width : '10rem', height : 'auto', padding : 'auto 0px'}}/>
                    </div>
                    <div className = 'row'  style = {{margin : '10%'}}>
                        <h3 style = {{borderBottom : '2px solid black', padding : '10px'}}>Contact Details:</h3>
                        <div className='col-12'>

                        <div className = 'row'>
                            <div className = 'col-5' style = {{overflow :'auto'}}><strong>Phone:</strong></div>
                            <div className = 'col-7' style = {{overflow :'auto'}}>1234-4343-32</div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-5' style = {{overflow :'auto'}}><strong>Email:</strong></div>
                            <div className = 'col-7' style = {{overflow :'auto'}}>user@nitj.ac.in</div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-5' style = {{overflow :'auto'}}><strong>Address:</strong></div>
                            <div className = 'col-7' style = {{overflow :'auto'}}>xyz, urban state, Punjab</div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className = "col-7">
                    <div className = 'row text-center' style = {{margin : '10%'}}>
                        <h2  style = {{color : 'white'}}><strong>ADMIN NAME</strong></h2>
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
                            <div className = 'col-6' style = {{overflow :'auto'}}><strong>Designation:</strong></div>
                            <div className = 'col-6' style = {{overflow :'auto'}}>Admin</div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-6' style = {{overflow :'auto'}}><strong>DOJ:</strong></div>
                            <div className = 'col-6' style = {{overflow :'auto'}}>12 nov 2022</div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-6' style = {{overflow :'auto'}}><strong>Gender:</strong></div>
                            <div className = 'col-6' style = {{overflow :'auto'}}>Male</div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}