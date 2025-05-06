import React, { useState } from 'react';
import './ApplyNow.css';

function ApplyNow() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    institution: '',
    branch: '',
    course: '',
    enrolled: '',
    confirmInfo: false,
    agreeComms: false
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.confirmInfo || !formData.agreeComms) {
      alert('Please accept the declarations before submitting.');
      return;
    }
  
    setLoading(true);
    setResponseMsg('');
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzWKIiYCpF3gW1W9l9SW--fRn9a1OxPFw0mnoCLRGoVGIvI8ypmc9IlN-pG6iUs4oDJ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const contentType = response.headers.get("content-type");
      let result;
  
      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        throw new Error("Unexpected response format");
      }
  
      if (result.status === 'success') {
        setResponseMsg('Application submitted successfully!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          dob: '',
          gender: '',
          institution: '',
          branch: '',
          course: '',
          enrolled: '',
          confirmInfo: false,
          agreeComms: false
        });
      } else {
        setResponseMsg('Submission failed: ' + result.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResponseMsg('');
    }
  
    setLoading(false);
  };


  return (
    <div className="apply-form-container">
      <h1>Apply Now</h1>
      <form className="apply-form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>

        <label>
          Email Address
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Phone Number
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>
          Date of Birth
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </label>

        <label>
          Gender
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">-- Select Gender --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Institution/University Name
          <input type="text" name="institution" value={formData.institution} onChange={handleChange} required />
        </label>

        <label>
          Branch/Stream
          <input type="text" name="branch" value={formData.branch} onChange={handleChange} required />
        </label>

        <label>
          Select Course/Internship
          <select name="course" value={formData.course} onChange={handleChange} required>
            <option value="">-- Select Program --</option>
            <option value="Deep Learning Internship">Deep Learning Internship</option>
            <option value="Data Science Internship">Data Science Internship</option>
            <option value="Machine Learning Internship">Machine Learning Internship</option>
            <option value="Web Development Internship">Web Development Internship</option>
            <option value="Data Science Course">Data Science Course</option>
            <option value="Advanced AI/ML Course">Advanced AI/ML Course</option>
          </select>
        </label>

        <label>
          Are you currently enrolled in any academic program/job?
          <select name="enrolled" value={formData.enrolled} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <label className="checkbox-group">
          <input type="checkbox" name="confirmInfo" checked={formData.confirmInfo} onChange={handleChange} />
          I confirm that the information provided is accurate.
        </label>

        <label className="checkbox-group">
          <input type="checkbox" name="agreeComms" checked={formData.agreeComms} onChange={handleChange} />
          I agree to receive communications from Spacedrift.
        </label>

        <button type="submit" className="submit-btn" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
      </form>
      {responseMsg && <p className="form-response">{responseMsg}</p>}
    </div>
  );
}

export default ApplyNow;
