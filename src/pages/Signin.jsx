import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../Styles/login.css";

const Signin = () => {
    const [isSigningIn, setIsSigningIn] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    const handleSignInClick = () => {
        setIsSigningIn(true);
        clearForm();
    };

    const handleSignUpClick = () => {
        setIsSigningIn(false);
        clearForm();
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateForm = () => {
        const errors = {};
        if (!email || !validateEmail(email)) {
            errors.email = "Invalid email address";
        }
        if (!password || password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }
        if (!isSigningIn && (!name || name.trim() === "")) {
            errors.name = "Name is required";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Handle form submission
            console.log("Form submitted successfully");
        }
    };

    const clearForm = () => {
        setEmail("");
        setPassword("");
        setName("");
        setErrors({});
    };

    return (
        <>
            <div className="signin-body">
                {isSigningIn ? (
                    <div className="contain">
                        <div className="formsignin">
                            <form onSubmit={handleSubmit}>
                                <h2>Sign In</h2>
                                <Link to="/" className="link"><i className="fa-brands fa-google-plus-g"></i></Link>
                                <Link to="/" className="link"><i className="fa-brands fa-facebook-f"></i></Link>
                                <Link to="/" className="link"><i className="fa-brands fa-github"></i></Link>
                                <Link to="/" className="link"><i className="fa-brands fa-linkedin-in"></i></Link>
                                <p>or use your email and password</p>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <h6>{errors.email}</h6>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <h6>{errors.password}</h6>
                                <p>Forgot Password</p>
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                        </div>
                        <div className="welcome">
                            <div><h2>Welcome, Friend!</h2></div>
                            <div><p>Enter your personal details to use all the features</p></div>
                            <div><button onClick={handleSignUpClick} className="btn btn-outline-light sign">Sign up</button></div>
                        </div>
                    </div>
                ) : (
                    <div className="contain-2">
                        <div className="welcome2">
                            <div><h2>Welcome, Back!</h2></div>
                            <div><p>Enter your personal details to use all the features</p></div>
                            <div><button onClick={handleSignInClick} className="btn btn-outline-light sign">Sign in</button></div>
                        </div>
                        <div className="formsignup">
                            <form onSubmit={handleSubmit}>
                                <h2>Create Account</h2>
                                <Link to="/" className="link"><i className="fa-brands fa-google-plus-g"></i></Link>
                                <Link to="/" className="link"><i className="fa-brands fa-facebook-f"></i></Link>
                                <Link to="/" className="link"><i className="fa-brands fa-github"></i></Link>
                                <Link to="/" className="link"><i className="fa-brands fa-linkedin-in"></i></Link>
                                <p>or use your email and password</p>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <h6>{errors.name}</h6>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <h6>{errors.email}</h6>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <h6>{errors.password}</h6>
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            <Outlet />
        </>
    );
};

export default Signin;
