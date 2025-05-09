import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Favourites from './pages/Favourites/Favourites';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/welcome' element={<Welcome />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/favourites' element={<Favourites />}></Route>
      </Routes>
    </Router>
  )
}

export default App
