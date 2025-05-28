import "./styles/main.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignInForm from "./components/login/SignInForm";
import ForgotPassword from "./components/login/forgotPassword";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <>
            <ToastContainer
                position="bottom-center"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='colored'
            />
            <Router>
                <Routes>
                    <Route path="/" element={<SignInForm />} />
                    <Route path="/login" element={<SignInForm />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
