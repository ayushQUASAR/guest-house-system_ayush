import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Login from "./Login"
import Dash from './Dash';
import Registration from './Registration'
import Alumni from './AlumniDetails/AlumniMain'
import Student from './StudentDetails/StudentMain'
import Faculty from './FacultyDetails/FacultyMain'
import AdminRegistration from './AdminRegistration';
import { UserContextProvider } from '../Components/ContextHooks/UserContext';
import AdminRegistrationMain from './AdminRegistrationMain';
import UserDetail from './UserDetail';
<<<<<<< HEAD
// import { Container } from '@mui/material';
import Container from '../Components/BookingForm/Container'
=======
import { LoginContextProvider } from './ContextHooks/LoginContext';
import  Container  from './BookingForm/Container';
>>>>>>> 4be65ea9fa28b747bda0225ea625b33ec393c10f


function App() {
  return (
    <>
<<<<<<< HEAD
      {/* <Router>
=======
   
      <Router>
        <LoginContextProvider>
>>>>>>> 4be65ea9fa28b747bda0225ea625b33ec393c10f
      <UserContextProvider>
        <Routes>
        
          <Route path="/Home" element={<Home/>} />
          <Route path="/Booking" element={<Container/>} />
          
          <Route path="/Register" element={<Registration/>} />
          <Route path="/AdminRegistration" element={<AdminRegistrationMain/>} />
          <Route path="/Faculty" element={<Faculty/>} />
          <Route path="/Student" element={<Student/>} />
          <Route path="/Alumni" element={<Alumni/>} />
          <Route path="/Dashboard" element={<Dash/>} />
          <Route path="/UserDetails" element={<UserDetail/>} />
          <Route path="/" element={<Login/>} />
        </Routes>
        </UserContextProvider>
<<<<<<< HEAD
      </Router> */}
      <Container/>
=======
        </LoginContextProvider>
      </Router>
>>>>>>> 4be65ea9fa28b747bda0225ea625b33ec393c10f
      
    </>
  );
}

export default App;
