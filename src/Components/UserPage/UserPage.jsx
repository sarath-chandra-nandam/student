import React from 'react';
import { Link } from 'react-router-dom'; 
import './UserPage.css'

const UserPage = () => {
  return (
    <div className="userpage-total">
    <div className="login-home-page">
      <h1>Welcome to Student Management System</h1>
      <div className="login-button-container">
      <Link to="/teacher-login" className="login-button"> <button>Teacher Login</button></Link>
      <Link to="/student-login" className="login-button"> <button> Student Login</button></Link>
      </div>
    </div>
    </div>
  );
}

export default UserPage; 
