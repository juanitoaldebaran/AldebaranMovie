import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from './pages/Welcome/Welcome';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/welcome' element={<Welcome />}></Route>
      </Routes>
    </Router>
  )
}

export default App
