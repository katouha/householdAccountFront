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
import HouseholdSearch from "./components/pages/HouseholdSearch";
import HouseholdGraph from "./components/pages/HouseholdGraph";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/household_account">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="user/regist" element={<UserRegist />} />
        <Route path="user/forgetPassword" element={<ForgetPassword />} />
        <Route path="/householdRegist" element={<HouseholdRegist />} />
        <Route path="/householdSearch" element={<HouseholdSearch />} />
        <Route path="/householdGraph" element={<HouseholdGraph />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
