import React, { useState } from 'react';
import './Login.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ email: '', password: '', confirmPassword: '' });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., authenticate user)
    console.log('Login Data:', loginData);
    setLoginData({ email: '', password: '' });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., register user)
    console.log('Signup Data:', signupData);
    setSignupData({ email: '', password: '', confirmPassword: '' });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <Navbar />
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>{isLogin ? 'Welcome Back!' : 'Join Us Today!'}</h1>
          <p>{isLogin ? 'Log in to continue your learning journey.' : 'Sign up to start your learning journey.'}</p>
        </div>
        <form className="login-form" onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={isLogin ? loginData.email : signupData.email}
              onChange={isLogin ? handleLoginChange : handleSignupChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={isLogin ? loginData.password : signupData.password}
              onChange={isLogin ? handleLoginChange : handleSignupChange}
              required
            />
          </div>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={signupData.confirmPassword}
                onChange={handleSignupChange}
                required
              />
            </div>
          )}
          <button type="submit" className="login-button">{isLogin ? 'Log In' : 'Sign Up'}</button>
        </form>
        <div className="login-footer">
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <a href="#" onClick={toggleForm}>
              {isLogin ? 'Sign Up' : 'Log In'}
            </a>
          </p>
          {isLogin && <p><a href="/forgot-password">Forgot Password?</a></p>}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;