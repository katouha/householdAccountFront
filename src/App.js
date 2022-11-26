import React from "react"
import './App.css';
import Login from './components/pages/Login'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil'
import HouseholdRegist from "./components/pages/HouseholdRegist";
import UserRegist from "./components/pages/UserRegist";
import ForgetPassword from "./components/pages/ForgetPassword";
import HouseholdSearch from "./components/pages/HouseholdSearch";
import HouseholdGraph from "./components/pages/HouseholdGraph";
import UserInfoChange from "./components/pages/UserInfoChange";
import UserRegistConfirm from "./components/pages/UserRegistConfirm";
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/household_account/login" element={<Login />} />
          <Route path="/household_account/user/regist" element={<UserRegist />} />
          <Route path="/household_account/user/registConf" element={<UserRegistConfirm />} />
          <Route path="/household_account/user/forgetPassword" element={<ForgetPassword />} />
          <Route path="/household_account/user/userInfoChange" element={<UserInfoChange />} />
          <Route path="/household_account/householdRegist" element={<HouseholdRegist />} />
          <Route path="/household_account/householdSearch" element={<HouseholdSearch />} />
          <Route path="/household_account/householdGraph" element={<HouseholdGraph />} />
        </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
