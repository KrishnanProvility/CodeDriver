import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';




export default function SignUP() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState();
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirm: false
    });

    const togglePassword = (field) => {
        setShowPassword(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

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
                    <div className="mb-3 position-relative" >
                        <label htmlFor="password" className="form-label fw-semibold">Password<span
                            className="text-danger">*</span></label>
                        <input type={showPassword.password ? 'text' : 'password'}  className="form-control" id="password" placeholder="Password"
                               value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <span
                            onClick={() => togglePassword("password")}
                            className="position-absolute top-50 translate-middle-y"
                            style={{
                                bottom:'35px',
                                right: '10px',
                                cursor: 'pointer'
                            }}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div className="mb-3 position-relative">
                        <label htmlFor="password" className="form-label fw-semibold">Confirm password<span
                            className="text-danger">*</span></label>
                        <input type={showPassword.confirm ? 'text' : 'password'} className="form-control" id="password" placeholder="Password"
                               value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                        <span
                            onClick={() => togglePassword("confirm")}
                            className="position-absolute top-50 translate-middle-y"
                            style={{
                                bottom:'35px',
                                right: '10px',
                                cursor: 'pointer'
                            }}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <button type="submit" className="btn btn-login w-100">Sign On</button>
                    <div className="text-center mt-3 ">
                        <p >Already Registered <Link to="/login" className="primary-color fw-bold  text-decoration-none" >Sign On</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
