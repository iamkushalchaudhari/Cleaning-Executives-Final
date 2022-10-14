import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Features from './pages/Features';
import Landing from './pages/Landing';
import GetNotified from './pages/GetNotified';
import LoginPage from './pages/LoginPage';
import BuySell from './pages/BuySell';
export default function App() {
  return (
    <>
   
    {/* <Landing/>
    <Features/>
    <GetNotified/> 
    <LoginPage/>*/}
    <BuySell/>
    </>
  )
}

