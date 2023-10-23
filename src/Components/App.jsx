
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../login';
import Dash from './Dash';

function App() {
  return (
    <>
   
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Dashboard" element={<Dash/>} />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
