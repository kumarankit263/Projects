// src/components/Form.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const countries = ['India', 'USA', 'Canada']; // Add more countries as needed
  const cities = {
    India: ['Delhi', 'Mumbai', 'Bangalore'],
    USA: ['New York', 'Los Angeles', 'Chicago'],
    Canada: ['Toronto', 'Vancouver', 'Montreal'],
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName || !/^[a-zA-Z]+$/.test(formData.firstName)) {
      newErrors.firstName = 'First Name must contain only alphabetic characters';
    }
    if (!formData.lastName || !/^[a-zA-Z]+$/.test(formData.lastName)) {
      newErrors.lastName = 'Last Name must contain only alphabetic characters';
    }
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phoneNo) newErrors.phoneNo = 'Phone Number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.panNo) newErrors.panNo = 'Pan No. is required';
    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar No. is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/success', { state: { formData } });
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className={`form-group ${errors.firstName && 'error'}`}>
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div className={`form-group ${errors.lastName && 'error'}`}>
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className={`form-group ${errors.email && 'error'}`}>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <div className="password-input">
            <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label>Phone No.</label>
          <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
          {errors.phoneNo && <p className="error">{errors.phoneNo}</p>}
        </div>
        <div className="form-group">
          <label>Country</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && <p className="error">{errors.country}</p>}
        </div>
        <div className="form-group">
          <label>City</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            {formData.country && cities[formData.country].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && <p className="error">{errors.city}</p>}
        </div>
        <div className="form-group">
          <label>Pan No.</label>
          <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
          {errors.panNo && <p className="error">{errors.panNo}</p>}
        </div>
        <div className="form-group">
          <label>Aadhar No.</label>
          <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
          {errors.aadharNo && <p className="error">{errors.aadharNo}</p>}
        </div>
        <button type="submit" disabled={!Object.keys(errors).every((key) => !errors[key])}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;






