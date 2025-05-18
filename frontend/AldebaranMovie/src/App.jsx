import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from './pages/Welcome/Welcome';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Favourites from './pages/Favourites/Favourites';
import Watchlist from './pages/Watchlist/Watchlist';
import Member from './pages/Member/Member';
import Review from './pages/Review/Review';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/favourites' element={<Favourites />}></Route>
        <Route path='/watchlist' element={<Watchlist />}></Route>
        <Route path='/member' element={<Member />}></Route>
        <Route path='/review' element={<Review />}></Route>
      </Routes>
    </Router>
  )
}

export default App
