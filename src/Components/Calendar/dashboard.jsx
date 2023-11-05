import react from "react"
import Calender from "./Calendar"
import DashInfo from "./dashinfo";
// dashboard.jsx
import "./DashInfo.css"
const Dashboard = () => {
    // Your component code here
    return(
        <div className="d-flex dashcont ">
           <Calender/>
            <DashInfo/>
        </div>
    )
  };
  
  export default Dashboard;
  