import "./styles/main.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import SignInForm from "./components/login/SignInForm";
import ForgotPassword from "./components/login/forgotPassword";
import SignUP from "./components/login/sign-up";

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
                autoClose={2000} // 2sec
            />
            <Router basename="/CodeDriver">
                <Routes>
                    <Route path="/" element={<SignInForm />} />
                    <Route path="/login" element={<SignInForm />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/sign-up" element={<SignUP/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
