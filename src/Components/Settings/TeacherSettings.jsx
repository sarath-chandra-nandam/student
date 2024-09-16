import React, { useState } from 'react';
import './TeacherSettings.css';

const TeacherSettings = () => {
  // Define the teacher object
  const [teacher, setTeacher] = useState({
    name: 'John Doe',
    subject: 'Mathematics',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
    bio: 'John Doe is an experienced mathematics teacher with a passion for helping students excel in their studies. He holds a Master\'s degree in Mathematics from XYZ University and has been teaching for over 10 years. John believes in creating an engaging and supportive learning environment where students can develop their problem-solving skills and build a strong foundation in mathematics.'
  });

  // Define the handleUpdateTeacher function
  const handleUpdateTeacher = (updatedTeacher) => {
    setTeacher(updatedTeacher);
    console.log('Updated teacher:', updatedTeacher);
    // Add logic to update the teacher data
  };

  return (
    <div className="teacher-settings-container">
      <h2>Teacher Settings</h2>
      <div className="teacher-settings-form">
        <label>Name:</label>
        <input type="text" value={teacher.name} onChange={(e) => setTeacher({ ...teacher, name: e.target.value })} />

        <label>Subject:</label>
        <input type="text" value={teacher.subject} onChange={(e) => setTeacher({ ...teacher, subject: e.target.value })} />

        <label>Email:</label>
        <input type="email" value={teacher.email} onChange={(e) => setTeacher({ ...teacher, email: e.target.value })} />

        <label>Phone:</label>
        <input type="text" value={teacher.phone} onChange={(e) => setTeacher({ ...teacher, phone: e.target.value })} />

        <label>Address:</label>
        <textarea value={teacher.address} onChange={(e) => setTeacher({ ...teacher, address: e.target.value })} />

        <label>Bio:</label>
        <textarea value={teacher.bio} onChange={(e) => setTeacher({ ...teacher, bio: e.target.value })} />

        <button onClick={() => handleUpdateTeacher(teacher)}>Save Changes</button>
      </div>
    </div>
  );
};

export default TeacherSettings;
