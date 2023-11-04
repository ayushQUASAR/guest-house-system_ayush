import React, { useState } from 'react';
import '../../style/userprofile.css';
const BookingDetail = () => { 
  return (
    
    <div >
        <div className = 'mx-4 my-4'>
            <h2 style = {{color : '#093356'}} ><strong>CURRENT BOOKING:</strong></h2>
        </div>
        <div className='mx-4 my-4'>
            <div className='row'>
                <div className='col-2 '>
                    <img src='./key.png' alt="Lock image" style ={{width : '70px', height : 'auto', position : 'relative', left :'55%'}} />
                </div>
                <div className = 'col-2'>
                        <h5 style =  {{color : '#0275d8'}}>Booking ID : 123456</h5>
                        <p>#301- Guest House 1</p>
                </div>
                <div className = 'col-2'> 
                </div>
                <div className='col-3'>
                    <p style = {{marginBottom : '0px'}}>Room Capacity:</p>
                    <p><strong>4 seater</strong></p>
                </div>
                <div className='col-3'>
                    <p style = {{marginBottom : '0px'}}>Booking Date:</p>
                    <p><strong>12 November, 2023</strong></p>
                </div>
            </div>
            <div className='row'>
                <div className = 'col-4 empty-container'>
                    
                </div>
                <div className='col-8 text-center'>
                    <div className = 'mb-4'>
                        <h5 className = 'd-inline'>Total Cost : </h5>
                        <h5 className = 'd-inline'>Rs. 600</h5>
                    </div>
                    <div>
                        <p className = 'd-inline'>Check-In : </p>
                        <p className = 'd-inline'><strong>21st November, 2023(12 pm onwards)</strong></p>
                    </div>
                    <div>
                        <p className = 'd-inline'>Check-Out : </p>
                        <p className = 'd-inline'><strong>22nd November, 2023(before 11 am)</strong></p>
                    </div>
                </div>
            </div>
        </div>
        <div  className='mx-4 my-4'>
            <div style = {{color : '#0275d8', backgroundColor : '#d8f4ff'}}>
            <h3 className='mx-4'>History Bookings</h3>

            </div>
            <div style = {{overflow: 'auto'}}>
                <div style = {{padding : '20px'}}>
                    <div className = 'row' style = {{borderBottom: '1px solid'}}>
                        <div className='col-1'>
                            <strong>S.No.</strong>
                        </div>
                        <div className='col-2'>
                            <strong>Room Id</strong>
                        </div>
                        <div className='col-3'>
                            <strong>Guest House</strong>
                        </div>
                        <div className='col-3'>
                            <strong>Booking Date</strong>
                        </div>
                        <div className='col-3'>
                            <strong>Check in/out</strong>
                        </div>
                    </div>
                    {/* {bookings.map((booked, index) => ( */}
                    <div style = {{overflowY : 'auto', width : '100%', height : '300px'}}>
                        <div className='row row-underline' >
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>booked.roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row row-underline' >
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>booked.roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row row-underline' >
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>booked.roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row row-underline' >
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>booked.roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row row-underline' >
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>booked.roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row row-underline' >
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>booked.roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row row-underline' >
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>booked.roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row row-underline' >
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>booked.roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row row-underline' >
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>booked.roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row row-underline' >
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>booked.roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row row-underline' >
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>booked.roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row row-underline' >
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>booked.roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row row-underline' >
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>booked.roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>booked.CheckInOut</p>
                        </div>  
                    </div>
                    </div>
                    {/* )
                    )} */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default BookingDetail;
