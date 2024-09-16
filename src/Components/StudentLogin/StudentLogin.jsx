import React, { useState } from 'react';
import './StudentLogin.css';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Components/firebase'; // Update the import path if necessary

const StudentLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Login successful
      navigate('/StudentDashboard'); // Navigate to the student dashboard or another page
    } catch (error) {
      // Login failed
      setError('Invalid email or password');
    }
  };

  return (
    <section className="login-section">
      <div className="login-form-box">
        <div className="login-form-value">
          <form onSubmit={handleSubmit}>
            <h2>Student Login</h2>
            {error && <p className="login-error">{error}</p>} {/* Display error message */}
            <div className="login-inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input 
                type="email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <label>Email</label>
            </div>
            <div className="login-inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input 
                type="password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <label>Password</label>
            </div>
            <div className="login-forget">
              <label>
                <input type="checkbox" />
                Remember Me
                <a href="#">Forget Password</a>
              </label>
            </div>
            <button type="submit">Log In</button>
            
            <div className="login-register">
              <p>Don't have an account? <Link to="/student-register">Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StudentLoginPage;
