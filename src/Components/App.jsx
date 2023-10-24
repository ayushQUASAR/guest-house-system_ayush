
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../login';
import Dash from './Dash';
// import auth from "../Components/Login"


function App() {
  return (
    <>
   
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Dashboard" element={<Dash/>} />
          {/* <Route path="/lo" element={<auth/>} /> */}
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
