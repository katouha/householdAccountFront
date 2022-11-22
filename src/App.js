import React from "react"
import './App.css';
import Login from './components/pages/Login'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HouseholdRegist from "./components/pages/HouseholdRegist";
import UserRegist from "./components/pages/UserRegist";
import ForgetPassword from "./components/pages/ForgetPassword";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/household_account">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/householdRegist" element={<HouseholdRegist />} />
        <Route path="user/regist" element={<UserRegist />} />
        <Route path="user/forgetPassword" element={<ForgetPassword />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
