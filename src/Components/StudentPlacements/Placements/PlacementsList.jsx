import React, { useEffect, useState } from 'react';
import { db } from '../../Components/firebase'; // Import Firestore
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions

const SPlacementsList = () => {
  const [placements, setPlacements] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'placements'));
        const placementsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlacements(placementsData);
      } catch (error) {
        setError('Error fetching placements data');
      }
    };

    fetchPlacements();
  }, []);

  return (
    <div>
      <h2>Placements List</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {placements.map((placement) => (
          <li key={placement.id}>
            {placement.studentName} - {placement.companyName} - {placement.date} - {placement.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SPlacementsList;
