import React from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom"
export default function TestGate() {
       const navigate = useNavigate();

       const {state} = useLocation();
       if(!state) {
              alert("No Booking ID found");
              navigate("/UserDetails");          
       }

       const bookingId = state.bookingId;


       const handleSuccessfulPayment = () => {
              const isConfirmed = confirm("Do you want to proceed with this action?");
              if(isConfirmed) {
                  fetch(`${import.meta.env.VITE_API_URL}/booking/${bookingId}`, {
                    method: "PATCH"
                  })
                  .then((res) => res.json())
                  .then((data) => {
                     console.log("response success: ", data);
                     // Navigate to the /receipt route with bookingId as state
                     navigate('/receipt', { state: { bookingId } });
                   })
                  .catch((error) => console.error("response error: ", error.message));
              }
       }
  return (
   <div>
    <Link to="/receipt">
    <button onClick={handleSuccessfulPayment}>
           PASS
    </button>
    </Link>
    <Link to="/UserDetails">
    <button>
           FAIL
    </button>
    </Link>
   </div>
  )
}