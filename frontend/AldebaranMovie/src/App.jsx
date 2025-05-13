import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Favourites from './pages/Favourites/Favourites';
import Watchlist from './pages/Watchlist/Watchlist';
import Member from './pages/Member/Member';

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
        <Route path='/watchlist' element={<Watchlist />}></Route>
        <Route path='/member' element={<Member />}></Route>
      </Routes>
    </Router>
  )
}

export default App
