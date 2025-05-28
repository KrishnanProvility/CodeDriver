import React, { useState } from "react";
import { Link } from 'react-router-dom';


export default function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-cover w-100">
        <div className="login-box card p-4 shadow-sm">
                <div className="brand-logo mb-3"></div>
                <h2 className="text-center fw-bolder mb-4">Sign On</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">Email<span
                        className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-semibold">Password<span
                        className="text-danger">*</span></label>
                    <input type="password" className="form-control" id="password" placeholder="Password"
                           value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-login w-100">Sign On</button>
                <div className="text-center mt-3 ">
                    <Link to="/forgot-password" className="text-dark text-decoration-none">Forgot Password</Link>
                    <p >Don't have an account? <a className="primary-color fw-bold  text-decoration-none" href="/login">Sign Up</a></p>
                </div>
            </form>
        </div>
        </div>
    );
}
