import "./styles/main.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignInForm from "./components/login/SignInForm";
import ForgotPassword from "./components/login/forgotPassword";
import SignUP from "./components/login/sign-up";
import VerifySignUp from "./components/login/VerifySignUp";
import ForgotPasswordVerify from "./components/login/forgot-password-verify";
import DashboardLogin from "./components/DashboardLogin";
import ProtectedRoute from "./authenticators/ProtectedRoute.jsx";

import { AuthProvider } from "./authenticators/AuthContext.jsx";

function App() {
  return (
    <Router basename="/">
      <AuthProvider>
        <ToastContainer
          position="bottom-center"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          autoClose={2000}
        />
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/login" element={<SignInForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sign-up" element={<SignUP />} />
          <Route path="/verification-sign-up" element={<VerifySignUp />} />
          <Route
            path="/forgot-password-verify"
            element={<ForgotPasswordVerify />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLogin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
