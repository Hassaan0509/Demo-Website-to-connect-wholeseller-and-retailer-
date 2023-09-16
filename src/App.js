import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import Wholeseller from "./Components/Wholeseller";
import Retailer from "./Components/Wholeseller-Retailer";
import AddBusiness from "./Components/AddBusiness";
import EditProfile from "./Components/EditProfile";
import WholesellerBusinessDetail from "./Components/WholesellerBusinessDetail";
import EditWholesellerBusinessDetail from "./Components/EditWholesellerBusinessDetail";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UserVeiw from "./Components/UserVeiw";
import ResultList from "./Components/ResultList";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserVeiw />} />
          <Route path="/Signup" element={<PublicRoute Component={Signup} />} />
          <Route path="/Login" element={<PublicRoute Component={Login} />} />
          <Route path="/ResultList" element={<ResultList />} />
          <Route path="/" element={<PrivateRoute Component={Sidebar} />}>
            <Route
              path="/EditWholesellerBusinessDetail"
              element={
                <PrivateRoute Component={EditWholesellerBusinessDetail} />
              }
            />
            <Route
              path="/EditProfile"
              element={<PrivateRoute Component={EditProfile} />}
            />
            <Route
              path="/Dashboard"
              element={<PrivateRoute Component={Dashboard} />}
            />
            <Route
              path="/Profile"
              element={<PrivateRoute Component={Profile} />}
            />
            <Route
              path="/Wholeseller"
              element={<PrivateRoute Component={Wholeseller} />}
            />
            <Route
              path="/Retailer"
              element={<PrivateRoute Component={Retailer} />}
            />
            <Route
              path="/Business"
              element={<PrivateRoute Component={AddBusiness} />}
            />
            <Route
              path="/WholesellerBusinessDetail"
              element={<PrivateRoute Component={WholesellerBusinessDetail} />}
            />
          </Route>
          <Route
            path="*"
            element={<div className="fw-bold fs-1">Page Not Available</div>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
