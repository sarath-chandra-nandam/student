import React, { useState } from 'react';
import './AddPlacement.css';
import { db } from '../../../Components/firebase'; // Import Firestore
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

const SAddPlacement = () => {
  const [jobRole, setJobRole] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [applicationDeadline, setApplicationDeadline] = useState('');
  const [description, setDescription] = useState('');
  const [applyNow, setApplyNow] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'placements'), {
        jobRole,
        companyName,
        companyLocation,
        applicationDeadline,
        description,
        applyNow,
      });
      setSuccess('Placement data added successfully');
      // Clear form or handle success as needed
    } catch (error) {
      setError('Error adding placement data');
    }
  };

  return (
    <div className="add-placement-container">
      <div className="add-placement-form-box">
        <h2>Add Placement</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Job Role</label>
            <input
              type="text"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Company Location</label>
            <input
              type="text"
              value={companyLocation}
              onChange={(e) => setCompanyLocation(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Application Deadline</label>
            <input
              type="date"
              value={applicationDeadline}
              onChange={(e) => setApplicationDeadline(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Apply Now</label>
            <input
              type="url"
              value={applyNow}
              onChange={(e) => setApplyNow(e.target.value)}
              placeholder="https://companywebsite.com"
              required
            />
          </div>
          <button type="submit">Add Placement</button>
        </form>
      </div>
    </div>
  );
};

export default SAddPlacement;
