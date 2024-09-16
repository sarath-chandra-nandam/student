import React, { useState } from 'react';
import './Settings.css';

const StudentSettings = () => {
  // Define the student object
  const [student, setStudent] = useState({
    name: 'Alice Smith',
    grade: '10th',
    email: 'alice.smith@example.com',
    phone: '987-654-3210',
    address: '456 Oak St, Town, Country',
    bio: 'Alice Smith is a dedicated and hardworking student currently enrolled in the 10th grade. She is passionate about learning and strives to achieve academic excellence in all her subjects. Alice actively participates in extracurricular activities and enjoys volunteering in her community. She aspires to pursue a career in science and hopes to make a positive impact in the world.'
  });

  // Define the handleUpdateStudent function
  const handleUpdateStudent = (updatedStudent) => {
    setStudent(updatedStudent);
    console.log('Updated student:', updatedStudent);
    // Add logic to update the student data
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-form">
        <label>Name:</label>
        <input type="text" value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} />

        <label>Grade:</label>
        <input type="text" value={student.grade} onChange={(e) => setStudent({ ...student, grade: e.target.value })} />

        <label>Email:</label>
        <input type="email" value={student.email} onChange={(e) => setStudent({ ...student, email: e.target.value })} />

        <label>Phone:</label>
        <input type="text" value={student.phone} onChange={(e) => setStudent({ ...student, phone: e.target.value })} />

        <label>Address:</label>
        <textarea value={student.address} onChange={(e) => setStudent({ ...student, address: e.target.value })} />

        <button onClick={() => handleUpdateStudent(student)}>Save Changes</button>
      </div>
    </div>
  );
};

export default StudentSettings;
