import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'; // Adjust the path to your firebase config file
import './NavBar.css';
import logo_light from '../../Assets/app-logo-black.png';
import search_icon_light from '../../Assets/search-w.png';
import toggle_light from '../../Assets/night.png';
import clg1 from '../../Assets/clg1.png';
import clgpr from '../../Assets/clgpr.jpeg';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Redirect to the login page after logout
        navigate('/');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <div className='navbar'>
      <img src={clgpr} alt="" className='navlogo'/>
      <ul className="navbar-links">
        <li className="nav-item">
          <Link to="/">Home</Link>
          <div className="dropdown-content">
            <Link to="/Features">Features</Link>
            <Link to="/Placements">Placements</Link>
          </div>
        </li>
        <li className="nav-item">
          <Link to="/auctions">Exams</Link>
          <div className="dropdown-content">
            <Link to="/ongoing">Ongoing Exams</Link>
            <Link to="/upcoming">Upcoming Exams</Link>
            <Link to="/completed">Completed Exams</Link>
          </div>
        </li>
        <li className="nav-item">
          <Link to="/timetable">TimeTable</Link>
          <div className="dropdown-content">
            <Link to="/timetable">Add TimeTable</Link>
            <Link to="/AllTimeTables">All TimeTables</Link>
        
            
          </div>
        </li>
        <li className="nav-item">
          <Link to="/account">Account</Link>
          
          <div className="dropdown-content">
            <Link to="/teacherprofile">Profile</Link>
            <Link to="/addteacher">Add Teachers</Link>
            <Link to="/teachersettings">Settings</Link>
            <Link to="#" onClick={handleLogout}>Logout</Link>
          </div>
        </li>
      </ul>
      <div className='search-box'>
        <input type='text' placeholder='Search'/>
        <img src={search_icon_light} alt=''/>
      </div>
      <img src={clg1} alt='' className='toggle-icon'/>
    </div>
  );
};

export default Navbar;
