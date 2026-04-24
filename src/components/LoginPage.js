import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPages.css';

function LoginPage({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [status, setStatus] = useState({ message: '', isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ message: '', isError: false });

    if (!formData.email.trim() || !formData.password.trim()) {
      setStatus({ message: 'Please enter email and password.', isError: true });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed.');
      }

      onLoginSuccess(data.user, data.token);
      setStatus({ message: 'Login successful. Redirecting...', isError: false });

      setTimeout(() => {
        navigate('/');
      }, 800);
    } catch (error) {
      const fallbackMessage =
        error.name === 'TypeError'
          ? 'Unable to reach server. Start backend on port 5000 and try again.'
          : 'Login failed.';
      setStatus({ message: error.message || fallbackMessage, isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="auth-page">
      <h1>Login</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging In...' : 'Login'}
        </button>
      </form>
      {status.message && (
        <p className={status.isError ? 'auth-message auth-error' : 'auth-message auth-success'}>
          {status.message}
        </p>
      )}
      <p className="auth-bottom-text">
        New user? <Link to="/register" className="auth-link">Register here</Link>
      </p>
    </section>
  );
}

export default LoginPage;
