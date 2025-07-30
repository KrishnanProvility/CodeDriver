
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../authenticators/AuthContext';
import { toast } from 'react-toastify';
import {FaEye, FaEyeSlash} from "react-icons/fa";

export default function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(
        false
    );
    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim()) {
            toast.error('Please enter email');
            return;
        }
        if (!password) {
            toast.error('Please enter password');
            return;
        }

        const loginPromise = login(email, password);

        toast.promise(
            loginPromise,
            {
                pending: 'Logging in...',         // loader message
                success: 'Login successful!',     // on success
                error: 'Login failed!',           // on error
            },
            {
                autoClose: 2000
            }
        );

        try {
            await loginPromise;
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000); // match autoClose time
        } catch (error) {
            // toast.promise already handles the error message
            console.error(error);
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-cover w-100">
        <div className="login-box card p-4 shadow-lg">
                <div className="brand-logo mb-3"></div>
                <h2 className="text-center fw-bolder mb-4">Sign On</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">Email<span
                        className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3 position-relative">
                    <label htmlFor="password" className="form-label fw-semibold">
                        Password<span className="text-danger">*</span>
                    </label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control pe-5"  // Add padding-end so icon doesn't overlap text
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                        onClick={togglePassword}
                        className="position-absolute"
                        style={{
                            top: '73%',
                            right: '15px',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer'
                        }}
                    >
        {showPassword ?<FaEye /> :  <FaEyeSlash />}
    </span>
                </div>

                <button type="submit" className="btn btn-login w-100"  disabled={!email.trim() || !password}>Sign On</button>
                <div className="text-center mt-3 ">
                    <Link to="/forgot-password" className="text-dark text-decoration-none">Forgot Password</Link>
                    <p >Don't have an account? <Link to="/sign-up" className="primary-color fw-bold  text-decoration-none">Sign Up</Link></p>

                </div>
            </form>
        </div>
        </div>
    );
}
