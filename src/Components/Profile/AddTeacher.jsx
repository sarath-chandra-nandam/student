import React, { useState } from 'react';
import { db, auth, storage } from '../../Components/firebase'; // Import Firestore and Storage
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import Storage functions
import { setDoc, doc } from 'firebase/firestore';
import './AddTeacher.css';

const AddTeacher = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('');
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let photoURL = '';

      if (photo) {
        const photoRef = ref(storage, `teacher_photos/${photo.name}`);
        await uploadBytes(photoRef, photo);
        photoURL = await getDownloadURL(photoRef);
      }

      await setDoc(doc(db, 'teachers', auth.currentUser.uid), {
        name,
        subject,
        email,
        phone,
        address,
        bio,
        photoURL
      });

      setSuccess('Teacher data added successfully');
      setName('');
      setSubject('');
      setEmail('');
      setPhone('');
      setAddress('');
      setBio('');
      setPhoto(null);
    } catch (error) {
      setError('Error adding teacher data');
    }
  };

  return (
    <div className="teacher-form-container">
      <h2>Add Teacher</h2>
      {error && <p className="form-error">{error}</p>}
      {success && <p className="form-success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div>
        <button type="submit">Add Teacher</button>
      </form>
    </div>
  );
};

export default AddTeacher;
