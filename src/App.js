import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PrivateRoute from "./Components/PrivateRoute";
const Login = lazy(() => import("./Screen/Login"));
const AddPackage = lazy(() => import("./Screen/AddPackage"));
const Dashboard = lazy(() => import("./Screen/Dashboard"));
const MyProfile = lazy(() => import("./Screen/MyProfile"));
const MyProfileEdit = lazy(() => import("./Screen/MyProfileEdit"));
const SetNewPassword = lazy(() => import("./Screen/SetNewPassword"));



function App() {
  return (
    <Suspense fallback={<div className="spinner-2 "></div>}>
      <Router basename="/">
        <Route path="/" component={Login} exact />

        <PrivateRoute path="/AddPackage" component={AddPackage} exact />
        <PrivateRoute path="/dashboard" component={Dashboard} exact />
        <PrivateRoute path="/MyProfile" component={MyProfile} exact />
        <PrivateRoute path="/MyProfileEdit" component={MyProfileEdit} exact />
        <PrivateRoute path="/SetNewPassword" component={SetNewPassword} exact />
        
      </Router>
    </Suspense>
  );
}
export default App;
