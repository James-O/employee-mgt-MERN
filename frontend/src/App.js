import 'bootstrap/dist/css/bootstrap.min.css'
//import { BrowserRouter,Routes,Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/auth/signup' element={<Signup/>}></Route>
        <Route path='/auth/login' element={<Login/>}></Route>
        <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
        <Route path='/reset-password/:token' element={<ResetPassword/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
