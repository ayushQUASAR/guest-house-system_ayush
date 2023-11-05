import react from "react"
import "./DashInfo.css"
import Image1 from "./Image1.png" 
import Image2 from "./Image2.png"
import Image3 from "./Image3.png"
const DashInfo=()=>{
    return(
        <div>
        <div className=" MainDash">
             <div className="DashCard">
                <img src={Image1} className="Dashimage" alt="logo"/>
                <div className="Dashtext">
                    <h5>3</h5>
                    <p>Total</p>
                    <p>Guest Houses</p>
                </div>
             </div>
             <div className="DashCard">
                <img src={Image2} className="Dashimage" alt="logo"/>
                <div className="Dashtext">
                    <h5>22</h5>
                    <p>Pending</p>
                    <p>Booking </p>
                    <p>Approvals</p>
                </div>
             </div>
             <div className="DashCard">
                <img src={Image2} className="Dashimage" alt="logo"/>
                <div className="Dashtext">
                    <h5>3</h5>
                    <p>Pending</p>
                    <p>Registration </p>
                    <p>Approvals</p>
                </div>
             </div>
             <div className="DashCard">
                <img src={Image3} className="Dashimage" alt="logo"/>
                <div className="Dashtext">
                    <h5>3</h5>
                    <p>Registered</p>
                    <p>Users</p>
                </div>
             </div>
        </div>
        <div className="DashBigCards d-flex">

        <div className="DashCard2">
                
                <div className="Dashtext2">
                    <h3>GUEST HOUSE 1</h3>
                    <p>Total Capacity : 200</p>
                    <p>Available Rooms : 150</p>
                    <p>Booked Rooms</p>
                    <div className="Dashcircle">
                        <h2>75</h2>
                    </div>
                </div>
             </div>
             <div className="DashCard2">
                
                <div className="Dashtext2">
                    <h3>GUEST HOUSE 2</h3>
                    <p>Total Capacity : 200</p>
                    <p>Available Rooms : 150</p>
                    <p>Booked Rooms</p>
                    <div className="Dashcircle">
                        <h2>75</h2>
                    </div>
                </div>
             </div>
             <div className="DashCard2">
                
                <div className="Dashtext2">
                    <h3>GUEST HOUSE 3</h3>
                    <p>Total Capacity : 200</p>
                    <p>Available Rooms : 150</p>
                    <p>Booked Rooms</p>
                    <div className="Dashcircle">
                        <h2>75</h2>
                    </div>
                </div>
             </div>
        </div>
        
        </div>
    )
}

export default DashInfo;