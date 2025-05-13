'use client';
import { useState } from 'react';
import GoogleAuth from '../_components/GoogleAuth';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage(data.message);
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      } else {
        setError(data.message || 'Registration failed');
      }

    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="container mt-5">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <input className="form-control mb-2" name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input className="form-control mb-2" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input className="form-control mb-2" name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input className="form-control mb-2" name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
        <button type="submit" className="btn btn-success   w-100">Register</button>
    
        {message && <div className="alert alert-success mt-3">{message}</div>}
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </form>
       <p className='text-center mt-3'>OR</p>
        <GoogleAuth />
     
    </div>
  );
}
