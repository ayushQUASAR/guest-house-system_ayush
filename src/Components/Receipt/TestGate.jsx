
import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
export default function TestGate() {
       const navigate = useNavigate();

       const { state } = useLocation();
       if (!state) {
              alert("No Booking ID found");
              navigate("/UserDetails");
       }

       const bookingId = state.bookingId;


       // const handleSuccessfulPayment = () => {
       //        const isConfirmed = confirm("Do you want to proceed with this action?");
       //        if(isConfirmed) {
       //            fetch(`${import.meta.env.VITE_API_URL}/booking/${bookingId}`, {
       //              method: "PATCH"
       //            })
       //            .then((res) => res.json())
       //            .then((data) => {
       //               console.log("response success: ", data);
       //               // Navigate to the /receipt route with bookingId as state
       //               navigate('/receipt', { state: { bookingId } });
       //             })
       //            .catch((error) => console.error("response error: ", error.message));
       //        }
       // }
       const handleSuccessfulPayment = () => {
              const isConfirmed = confirm('Do you want to proceed with this action?');

              if (isConfirmed) {
                     setIsLoading(true);

                     fetch(`${import.meta.env.VITE_API_URL}/makepayment`, {
                            method: 'POST',
                            headers: {
                                   'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                   bookingId,
                                   paymentId,
                                   paymentStatus: 'success',
                            }),
                     })
                            .then((paymentRes) => {
                                   if (!paymentRes.ok) {
                                          throw new Error(`Failed to make payment: ${paymentRes.status}`);
                                   }
                                   return paymentRes.json();
                            })
                            .then(() => {
                                   // Now, proceed with updating the booking status
                                   return fetch(`${import.meta.env.VITE_API_URL}/booking/${bookingId}`, {
                                          method: 'PATCH',
                                   });
                            })
                            .then((data) => {
                                   console.log('response success: ', data);
                                   navigate('/receipt', { state: { bookingId } });
                            })
                            .catch((error) => {
                                   console.error('response error: ', error.message);
                                   alert('Failed to complete payment. Please try again.');
                            })
                            .finally(() => {
                                   setIsLoading(false);
                            });
              }
       };


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
