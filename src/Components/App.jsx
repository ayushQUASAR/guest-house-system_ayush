
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
import { LoginContextProvider } from './ContextHooks/LoginContext';



function App() {
  return (
    <>
   
      <Router>
        <LoginContextProvider>
      <UserContextProvider>
        <Routes>
        
          <Route path="/Home" element={<Home/>} />
          
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
        </LoginContextProvider>
      </Router>
     
    </>
  );
}

export default App;
