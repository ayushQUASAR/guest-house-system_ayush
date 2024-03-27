import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Login from "./Login";
import Dash from "./Dash";
import Registration from "./Registration";
import Alumni from "./AlumniDetails/AlumniMain";
import Student from "./StudentDetails/StudentMain";
import Faculty from "./FacultyDetails/FacultyMain";
import AdminRegistration from "./AdminRegistration";
import { UserContextProvider } from "../Components/ContextHooks/UserContext";
import AdminRegistrationMain from "./AdminRegistrationMain"; 
import { LoginContextProvider } from "./ContextHooks/LoginContext";
import Container from "./BookingForm/Container";
import { FormProvider } from "./ContextHooks/FormContext";
import BookingComponent from "./BOOKING/BookingComponent";
import RequireAuth from "./RequireAuth";
import UserDash from "./UserDash";
import ForgetPassword from "./FORGETPASS/ForgetPassword";
import ResetPassword from "./FORGETPASS/ResetPassword";
import Receipt from "./Receipt/Receipt";
import TestGate from "./Receipt/TestGate";
import UpcomingBookingTable from './AdminReports/UpcomingBookingTable';
import PastBooking from "./AdminReports/PastBookings";
import BookingCancellationReport from "./AdminReports/BookingCancellationReport";
import BookingApproval from "../Components/BookingApproval/ApproveBooking";
import RegistrationApproval from "../Components/Approve";
import RegisteredUsers from "../Components/RegisteredUsers";

import SideBar from "./SideBar";
function App() {
  return (
    <>
      <Router>
        <LoginContextProvider>
          <UserContextProvider>
            <FormProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/Booking"
                  element={
                    <RequireAuth>
                      <Container />
                    </RequireAuth>
                  }
                />
                <Route path="/Register" element={<Registration />} />
                <Route path="/forgot-password" element={<ForgetPassword />} />
                <Route path="/update-password" element={<ResetPassword />} />
                <Route
                  path="/AdminRegistration"
                  element={<AdminRegistrationMain />}
                />
                <Route path="/Faculty" element={<Faculty />} />
                <Route path="/Student" element={<Student />} />
                <Route path="/Alumni" element={<Alumni />} />
                <Route path="/bookingapproval" element={<BookingApproval />} />
                <Route path="/registrationapproval" element={<RegistrationApproval />} />
                <Route path="/registeredusers" element={<RegisteredUsers />} />

                <Route
                  path="/Dashboard"
                  
                  element={
                    <RequireAuth>
                      <Dash />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/UserDetails"
                  element={
                    <RequireAuth>
                      <UserDash />
                    </RequireAuth>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/receipt" element={<Receipt/>} />
                <Route path="/testgate" element={<TestGate />} />
                <Route path="/upcomingReport"       element={
                <UpcomingBookingTable/>
                }               
                />
                <Route path = "/pastReport" element = {<PastBooking/>}/>
                <Route path = "/cancelledReport" element = {<BookingCancellationReport/>}/>
                <Route path = "/profile/:userId" element = {<SideBar/>}/>
              </Routes>
            </FormProvider>
          </UserContextProvider>
        </LoginContextProvider>
      </Router>
    </>
  );
}

export default App;
