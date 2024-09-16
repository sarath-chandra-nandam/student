import React from 'react';
import { Link } from 'react-router-dom';
import './Departments.css'; // Add your styles here
import data from '../../Assets/data.json'; // Adjust the path to your JSON file

const Departments = () => {
  const { departments } = data;

  return (
    <div className="departments">
      <h1>Departments</h1>
      <ul>
        {departments.map((dept) => (
          <li key={dept.id}>
            <Link to={`/department/${dept.id}`}>{dept.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Departments;
