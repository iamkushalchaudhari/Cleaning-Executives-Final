import './App.css';
import Navbar from './pages/Navbar'
import Features from './pages/Features';
import Landing from './pages/Landing';
import GetNotified from './pages/GetNotified';
import LoginPage from './pages/LoginPage';
import BuySell from './pages/BuySell';
import GetStarted from './pages/GetStarted';
import AddBin from "./pages/AddBin";
import Complain from './pages/Complian';
import DriverInterface from './pages/DriverInterface';
import Timer from './pages/Timer';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ='/' element={<><Landing/> <Features/> <GetNotified/></>}/>
        <Route exact path ='/features' element={<Features/>} />
        <Route exact path ='/getnotified' element={<GetNotified/>} /> 
        <Route exact path ='/login' element={<LoginPage/>} /> 
        <Route exact path ='/buysell' element={<><Navbar/> <BuySell/></>} /> 
        <Route exact path ='/getstarted' element={<GetStarted/>} /> 
        <Route exact path ='/addbin' element={<><Navbar/> <AddBin/></>} /> 
        <Route exact path ='/complain' element={<><Navbar/> <Complain/></>} /> 
        <Route exact path='/driverinterface' element={<DriverInterface/>}/>
        <Route exact path='/timer' element={<Timer/>}/>
      </Routes>     
    </Router>
    
  )
}

