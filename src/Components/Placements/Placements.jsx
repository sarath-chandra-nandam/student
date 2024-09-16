import React, { useState, useEffect } from 'react';
import './Placements.css';
import { Link } from 'react-router-dom';
import { db } from '../../Components/firebase'; // Update the import path if necessary
import { collection, getDocs } from 'firebase/firestore';
import AddPlacement from './AddPlacement';

const PlacementsPage = () => {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    const fetchPlacements = async () => {
      const placementsCollection = collection(db, 'placements'); // Adjust collection name if needed
      const placementsSnapshot = await getDocs(placementsCollection);
      const placementsList = placementsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPlacements(placementsList);
    };

    fetchPlacements();
  }, []);

  return (
    <section className="placements-section">
      <div className="placements-container">
        <h1>Job Placements</h1>
        <AddPlacement />
        <div className="placements-list">
          {placements.map(placement => (
            <div key={placement.id} className="placement-card">
              <h2>{placement.jobRole}</h2>
              <p><strong>Company:</strong> {placement.companyName}</p>
              <p><strong>Location:</strong> {placement.companyLocation}</p>
              <p><strong>Application Deadline:</strong> {placement.applicationDeadline}</p>
              <p><strong>Description:</strong> {placement.description}</p>
              <a href={placement.applyNow} className="apply-button" target="_blank" rel="noopener noreferrer">Apply Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementsPage;
