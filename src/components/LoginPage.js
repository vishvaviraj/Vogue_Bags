import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

function LoginPage() {
  return (
    <section className="auth-page">
      <h1>Login</h1>
      <form className="auth-form">
        <label>
          Email
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Enter your password" />
        </label>
        <button type="submit">Login</button>
      </form>
      <p className="auth-bottom-text">
        New user? <Link to="/register" className="auth-link">Register here</Link>
      </p>
    </section>
  );
}

export default LoginPage;
