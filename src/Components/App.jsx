
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Login from "./Login"
import Dash from './Dash';
import Registration from './Registration'
import Alumni from './AlumniDetails/AlumniMain'
import Student from './StudentDetails/StudentMain'
import Faculty from './FacultyDetails/FacultyMain'
import AdminRegistration from './AdminRegistration';
import AdminRegistrationMain from './AdminRegistrationMain';



function App() {
  return (
    <>
   
      <Router>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          
          <Route path="/Register" element={<Registration/>} />
          <Route path="/AdminRegistration" element={<AdminRegistrationMain/>} />
          <Route path="/Faculty" element={<Faculty/>} />
          <Route path="/Student" element={<Student/>} />
          <Route path="/Alumni" element={<Alumni/>} />
          <Route path="/Dashboard" element={<Dash/>} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
