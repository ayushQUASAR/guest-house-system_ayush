import React, { useState } from "react";
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';

const usePasswordToggle = () => {
    const [visible, setVisiblity] = useState(false);

    const Icon = (
        
        <>
        <span onClick={() => setVisiblity(visiblity => !visiblity)}>
        {visible?<VisibilityTwoToneIcon sx={{marginLeft:'5px',color:'#0d6efd'}}/>:
        <VisibilityOffTwoToneIcon  sx={{marginLeft:'5px',color:'#0d6efd'}}/>}
        </span>
        </>
    );

    const InputType = visible ? "text" : "password";

    return [InputType, Icon];
};

export default usePasswordToggle;