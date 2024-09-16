import React, { useState, useEffect } from 'react';
import { db, auth } from '../../Components/firebase'; // Import Firestore and Auth
import { doc, getDoc } from 'firebase/firestore';
import './Profile.css';
import AddTeacher from './AddTeacher';

const TeacherProfile = () => {
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        // Get the current user
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, 'teachers', user.uid); // Use the logged-in user's UID
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setTeacher(docSnap.data());
          } else {
            console.log('No such document!');
          }
        } else {
          console.log('No user is logged in.');
        }
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeacher();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!teacher) return <div>No profile found.</div>;

  return (
    <div className="teacher-profile">
      <AddTeacher />
      <div className="teacher-profile-container">
        <h2>Teacher Profile</h2>
        <div className="teacher-details">
          <div className="teacher-info">
            <img src={teacher.photoURL || 'default-profile.png'} alt="Teacher" className="teacher-image" />
            <h3>{teacher.name}</h3>
            <p><strong>Subject:</strong> {teacher.subject}</p>
            <p><strong>Email:</strong> {teacher.email}</p>
            <p><strong>Phone:</strong> {teacher.phone}</p>
            <p><strong>Address:</strong> {teacher.address}</p>
          </div>
          <div className="teacher-bio">
            <h3>Bio</h3>
            <p>{teacher.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
