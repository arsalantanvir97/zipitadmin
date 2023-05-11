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
const SubscriptionManagment = lazy(() => import("./Screen/SubscriptionManagment"));
const SubscriptionLogs = lazy(() => import("./Screen/SubscriptionLogs"));
const UserManagement = lazy(() => import("./Screen/UserManagement"));
const UserManagementView = lazy(() => import("./Screen/UserManagementView"));
const EditPackage = lazy(() => import("./Screen/EditPackage"));
const Notifications = lazy(() => import("./Screen/Notifications"));
const ForgotPassword = lazy(() => import("./Screen/ForgotPassword"));
const VerificaitonCode = lazy(() => import("./Screen/VerificaitonCode"));
const NewPassword = lazy(() => import("./Screen/NewPassword"));


function App() {
  return (
    <Suspense fallback={<div className="spinner-2 "></div>}>
      <Router basename="/admin">
        <Route path="/" component={Login} exact />
        <Route path="/ForgotPassword" component={ForgotPassword} exact />
        <Route path="/VerificaitonCode/:email" component={VerificaitonCode} exact />
        <Route path="/NewPassword" component={NewPassword} exact />

        {/* <Route path="/" component={Login} exact /> */}

        <PrivateRoute path="/AddPackage" component={AddPackage} exact />
        <PrivateRoute path="/dashboard" component={Dashboard} exact />
        <PrivateRoute path="/MyProfile" component={MyProfile} exact />
        <PrivateRoute path="/MyProfileEdit" component={MyProfileEdit} exact />
        <PrivateRoute path="/SetNewPassword" component={SetNewPassword} exact />
        <PrivateRoute path="/SubscriptionManagment" component={SubscriptionManagment} exact />
        <PrivateRoute path="/SubscriptionLogs" component={SubscriptionLogs} exact />
        <PrivateRoute path="/UserManagement" component={UserManagement} exact />
        <PrivateRoute path="/UserManagementView/:id" component={UserManagementView} exact />
        <PrivateRoute path="/EditPackage/:id" component={EditPackage} exact />
        <PrivateRoute path="/Notifications" component={Notifications} exact />

        
      </Router>
    </Suspense>
  );
}
export default App;
