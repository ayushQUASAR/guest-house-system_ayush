import {useState} from  'react';
import CreateAdmin from './CreateAdmin';
import AdminsList from './AdminsList';

function ManageAdmin(){
    const [flag, setFlag] = useState(true);
    const [button1Styles, setButton1Styles] = useState({ backgroundColor: '#009dff', color: 'white', border : '0px' });
    const [button2Styles, setButton2Styles] = useState({ backgroundColor: 'white', color: '#009dff', border : '0px' });

    const handleButtonClick = (clickedButton) => {
        if (clickedButton === 'button1') {
        setButton1Styles({ backgroundColor: '#009dff', color: 'white', border : '0px' });
        setButton2Styles({ backgroundColor: 'white', color: '#009dff' , border : '0px' });
        setFlag(true);
        } else {
        setButton1Styles({ backgroundColor: 'white', color: '#009dff', border : '0px' });
        setButton2Styles({ backgroundColor: '#009dff' , color: 'white', border : '0px'  });
        setFlag(false);
        }
    };
    return(
        <div>
            <h1 style ={{color : '#009dff', fontSize: '3rem', marginBottom : '0px'}}><strong>Manage Admin</strong></h1>
            <hr style ={{color : '#009dff', border : '1px solid'}}/>
            <div className = "d-flex justify-content-evenly">
            <button   id = "button1" className="button" style = {button1Styles} onClick ={() => handleButtonClick('button1')}><span className='mx-2'>Create Admin</span></button>
            <button id="button2"
                className="button"
                style={button2Styles}
                onClick={() => handleButtonClick('button2')}><span className='mx-2'>Admin List</span></button>
            </div>
            <div>
                {flag && <CreateAdmin/>}
                {!flag && <AdminsList/>}
            </div>
        </div>
    )
}
export default ManageAdmin;