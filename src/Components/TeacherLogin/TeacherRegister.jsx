import React, { useState } from 'react';
import './TeacherRegister.css';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../Components/firebase'; // Import Firestore
import { setDoc, doc } from 'firebase/firestore'; // Import Firestore functions

const TeacherRegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional teacher details to Firestore
      await setDoc(doc(db, 'teachers', user.uid), {
        name: `${firstName} ${lastName}`,
        email: email,
        subject: '', // or set a default value
        phone: '', // or set a default value
        address: '', // or set a default value
        bio: '', // or set a default value
        photoURL: '' // or set a default value
      });

      // Registration successful, navigate to login page
      navigate('/teacher-login');
    } catch (error) {
      // Registration failed
      setError('Error registering new user');
    }
  };

  return (
    <section className="register-section">
      <div className="register-form-box">
        <div className="register-form-value">
          <form onSubmit={handleSubmit}>
            <h2>Teacher Register</h2>
            {error && <p className="register-error">{error}</p>}
            <div className="register-inputbox">
              <ion-icon name="person-outline"></ion-icon>
              <input 
                type="text" 
                required 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
              />
              <label>First Name</label>
            </div>
            <div className="register-inputbox">
              <ion-icon name="person-outline"></ion-icon>
              <input 
                type="text" 
                required 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
              />
              <label>Last Name</label>
            </div>
            <div className="register-inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input 
                type="email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <label>Email</label>
            </div>
            <div className="register-inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input 
                type="password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <label>Password</label>
            </div>
            <button type="submit">Register</button>
            <div className="register-login">
              <p>Already have an account? <Link to="/teacher-login">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TeacherRegisterPage;
