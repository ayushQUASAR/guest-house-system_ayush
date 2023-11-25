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
import UserDetail from "./UserDetail";
import { LoginContextProvider } from "./ContextHooks/LoginContext";
import Container from "./BookingForm/Container";
import { FormProvider } from "./ContextHooks/FormContext";
import BookingComponent from "./BOOKING/BookingComponent";
import RequireAuth from "./RequireAuth";
import UserDash from "./UserDash";
import ForgetPassword from "./FORGETPASS/ForgetPassword";
import ResetPassword from "./FORGETPASS/ResetPassword";

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
              </Routes>
            </FormProvider>
          </UserContextProvider>
        </LoginContextProvider>
      </Router>
    </>
  );
}

export default App;
