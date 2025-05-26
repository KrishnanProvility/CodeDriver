import "./styles/main.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import SignInForm from "./components/SignInForm";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<SignInForm />} />
            </Routes>
        </Router>
    );
}

export default App;
