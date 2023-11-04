import react from 'react';
export default function CancelledBooking(){
    return(
        <div className = 'canceled-container mx-4 my-4'>
            <div classNAme = 'mb-4' style = {{padding : '20px'}}>
                <h3 style = {{color: '#0275d8'}}><strong>CANCELLED BOOKINGS</strong></h3>
            </div>
            <div style = {{overflow: 'auto', padding : '20px', overflowY : 'auto', width : '100%', height : '500px'}}>
                <div className = 'mx-3'>
                    <div className = 'row'style = {{borderBottom: '1px solid #ccc'}}>
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
                        <div className='row' style = {{borderBottom: '1px solid #ccc'}}>
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row' style = {{borderBottom: '1px solid #ccc'}}>
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row' style = {{borderBottom: '1px solid #ccc'}}>
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row' style = {{borderBottom: '1px solid #ccc'}}>
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row' style = {{borderBottom: '1px solid #ccc'}}>
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row' style = {{borderBottom: '1px solid #ccc'}}>
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row' style = {{borderBottom: '1px solid #ccc'}}>
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row' style = {{borderBottom: '1px solid #ccc'}}>
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row' style = {{borderBottom: '1px solid #ccc'}}>
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row' style = {{borderBottom: '1px solid #ccc'}}>
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row' style = {{borderBottom: '1px solid #ccc'}}>
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row' style = {{borderBottom: '1px solid #ccc'}}>
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row' style = {{borderBottom: '1px solid #ccc'}}>
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row' style = {{borderBottom: '1px solid #ccc'}}>
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row' style = {{borderBottom: '1px solid #ccc'}}>
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>CheckInOut</p>
                        </div>  
                    </div>
                        <div className='row' style = {{borderBottom: '1px solid #ccc'}}>
                           <div className='col-1' style = {{overflow : 'auto'}}>
                            <p>1.</p>
                        </div>
                        <div className='col-2' style = {{overflow : 'auto'}}>
                            <p>roomId</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>guestHouse</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>bookingDate</p>
                        </div>
                        <div className='col-3' style = {{overflow : 'auto'}}>
                            <p>CheckInOut</p>
                        </div>  
                    </div>
                    {/* )
                    )} */}
                </div>
            </div>
        </div>
    )
}