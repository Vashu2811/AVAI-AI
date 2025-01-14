import "./Login-page.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AviaLogo from './AviaLogo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is a required field';
    }
    if (!password) {
      newErrors.password = 'Password is a required field';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      // Handle form submission
      console.log('Form submitted');
    }
  };

    return(
        <div className="login-page">
            <div className="container">
                <div className="display-content">
                    <div className="avia-logo">
                        <img className="AviaLogo" src={AviaLogo} alt="My Image" />
                    </div>
                    <div className="login-screen">
                        <div className="login-details-content">
                            <h1 className="login-title">Sign into your account</h1>
                            <p className="login-discription">
                            Easily manage your autonomous voice assistants all in one dashboard.
                            </p>
                            <div className="divider-container">
                                <hr className="divider-line" />
                                <span className="divider-text">OR SIGN IN WITH</span>
                                <hr className="divider-line" />
                            </div>
                            <form onSubmit={handleSubmit}>
                            <div className="container-form">
                                <label className="label" htmlFor="email">
                                Email
                                </label>
                                <div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your email address"
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect="off"
                                    className="input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && (
                                    <p className="error-message">{errors.email}</p>
                                )}
                                </div>
                            </div>
                            <div className="container-form">
                                <label className="label" htmlFor="password">
                                Password
                                </label>
                                <div>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Your password"
                                    className="input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && (
                                    <p className="error-message">{errors.password}</p>
                                )}
                                </div>
                            </div>
                            <button className="Sign-In-button" type="submit">Sign in</button>
                            </form>
                            <div className="sign-up-text"><p>
                                Don't have an account?  
                            </p>
                            <Link to="/SignUp" className="sign-up-link"> Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side-container">
                    <div className="img-container">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}