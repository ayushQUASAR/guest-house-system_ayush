import React, {useState, useEffect} from "react";

const Table = ({userId}) => {

  const [user, setRegisteredUser] = useState(null);
  useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/bookingHistory`)
        .then((res) => res.json())
        .then((data) => setRegisteredUser(data))
        .catch((err) => console.log(err.message))
  }, [])

  console.log(user);

  function formatDateToCustomFormat(date) {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }
  

  const formatRoomData = (room) => {
    let str = "Room No. ";
    if(room.length == 1) {
      return str + room[0];
    }
    for(let i = 0;i<room.length-1;i++) {
        str+= `${room[i]}, `;
    }

    str+=  ` ${room[room.length-1]}`;
    return str;
  }
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Booking Date</th>
            <th scope="col">Guest House</th>
            <th scope="col">Room(s)</th>
            <th scope="col">Check in/out</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>

          {
             user &&  user.bookingHistory.map((booking,index) => {
             return( <tr key={booking._id}>
                  <td scope="row">{index+1}</td>
                  <td>{formatDateToCustomFormat(new Date(booking.createdAt))}</td>
                  <td>{booking.status === 'approved' ? (booking.guestHouseAllotted === 1 ? "Guest House 1" : booking.guestHouseSelected === 2 ? "Guest House 2"  :"Guest House 3") : "NOT ALLOTTED"}</td>
                  <td>{booking.status === 'approved' ? formatRoomData(booking.roomsAllotted) : "NOT ALLOTTED"}</td>
                  <td>{formatDateToCustomFormat(new Date(booking.startDate))}-{formatDateToCustomFormat(new Date(booking.endDate))}</td>
                   <td>{booking.status === 'approved' ? "Approved" : booking.status === 'pending' ? "Waiting for approval" : booking.status}</td>
              </tr>)
              
            })
          } 
          {/* <tr>
            <td scope="row">1</td>
            <td>November 20,2022</td>
            <td>Guest house 1</td>
            <td>301</td>
            <td>20 dec 2022-23 dec 2022</td>
            <td>Waiting for approval</td>
          </tr>
          <tr>
            <td scope="row">2</td>
            <td>November 20,2022</td>
            <td>Guest house 2</td>
            <td>302</td>
            <td>25 dec 2022-26 dec 2022</td>
            <td>Approved</td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default Table;