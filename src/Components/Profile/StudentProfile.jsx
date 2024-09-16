import React from 'react';
import './Profile.css';
import teacherImage from '../../Assets/st.jpeg'; // Importing teacher image

const StudentProfile = () => {
  // Dummy teacher data
  const student = {
    name: 'Alice Smith',
    grade: '10th',
    email: 'alice.smith@example.com',
    phone: '987-654-3210',
    address: '456 Oak St, Town, Country',
    bio: 'Alice Smith is a dedicated and hardworking student currently enrolled in the 10th grade. She is passionate about learning and strives to achieve academic excellence in all her subjects. Alice actively participates in extracurricular activities and enjoys volunteering in her community. She aspires to pursue a career in science and hopes to make a positive impact in the world.'
};


  return (
    <div className="teacher-profile">
    <div className="teacher-profile-container">
      <h2>Student Profile</h2>
      <div className="teacher-details">
        <div className="teacher-info">
          <img src={teacherImage} alt="Teacher" className="teacher-image" />
          <h3>{student.name}</h3>
          <p><strong>Subject:</strong> {student.grade}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
          {/* <p><strong>Address:</strong> {student.address}</p> */}
        </div>
        <div className="teacher-bio">
          <h3>Bio</h3>
          <p>{student.bio}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StudentProfile;
