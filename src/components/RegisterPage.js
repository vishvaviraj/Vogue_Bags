import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

function RegisterPage() {
  return (
    <section className="auth-page">
      <h1>Register</h1>
      <form className="auth-form">
        <label>
          Full Name
          <input type="text" placeholder="Enter your full name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Create a password" />
        </label>
        <button type="submit">Create Account</button>
      </form>
      <p className="auth-bottom-text">
        Already have an account? <Link to="/login" className="auth-link">Login</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
