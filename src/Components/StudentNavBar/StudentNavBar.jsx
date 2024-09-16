import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import logo_light from '../../Assets/app-logo-black.png';
import search_icon_light from '../../Assets/search-w.png';
import toggle_light from '../../Assets/night.png';
import clg1 from '../../Assets/clg1.png'
import clgpr from '../../Assets/clgpr.jpeg'


const StudentNavbar = () => {

  return (
    <div className='navbar'>
    <img src={clgpr} alt="" className='navlogo'/>
    
      <ul className="navbar-links">
      <li className="nav-item">
        <Link to="/">Home</Link>
        <div className="dropdown-content">
          <Link to="/Features">Features</Link>
          <Link to="/SPlacements">Placements</Link>
          {/* Add more dropdown links as needed */}
        </div>
      </li>
      <li className="nav-item">
        <Link to="/auctions">Exams</Link>
        <div className="dropdown-content">
          <Link to="/ongoing">Ongoing Exams</Link>
          <Link to="/studentupcoming">Upcoming Exams</Link>
          <Link to="/completed">Completed Exams</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link to="/studenttimetable">TimeTable</Link>
      </li>
      <li className="nav-item">
        <Link to="/account">Account</Link>
        <div className="dropdown-content">
          <Link to="/studentprofile">Profile</Link>
          <Link to="/studentsettings">Settings</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </li>
    </ul>
    <div className='search-box'>
      <input type='text' placeholder='Search'/>
      <img src={search_icon_light} alt=''/>
    </div>
    <img  src={clg1} alt='' className='toggle-icon'/>
  </div>
  );
};

export default StudentNavbar;
