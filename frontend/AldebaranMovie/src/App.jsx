import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/welcome' element={<Welcome />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup'></Route>
      </Routes>
    </Router>
  )
}

export default App
