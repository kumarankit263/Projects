// src/components/Success.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import './Success.css';

const Success = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <p>No data submitted</p>;
  }

  return (
    <div className="success-container">
      <h2>Submission Successful</h2>
      <div className="details">
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Username:</strong> {formData.username}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone No.:</strong> {formData.phoneNo}</p>
        <p><strong>Country:</strong> {formData.country}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>Pan No.:</strong> {formData.panNo}</p>
        <p><strong>Aadhar No.:</strong> {formData.aadharNo}</p>
      </div>
    </div>
  );
};

export default Success;
