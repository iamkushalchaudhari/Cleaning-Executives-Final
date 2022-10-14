// import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Features from './pages/Features';
import Landing from './pages/Landing';
import GetNotified from './pages/GetNotified';
import LoginPage from './pages/LoginPage';
import BuySell from './pages/BuySell';
import { 
  BrowserRouter as Router, 
  Routes,
  Route, 
  Link 
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ='/' element={<Landing/>} />
        <Route exact path ='/features' element={<Features/>} />
        <Route exact path ='/getnotified' element={<GetNotified/>} /> 
        <Route exact path ='/login' element={<LoginPage/>} /> 
      </Routes>
      {/* <LoginPage/> */}
      {/* <BuySell/> */}
    </Router>
  )
}

