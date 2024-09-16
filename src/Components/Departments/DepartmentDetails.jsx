import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Assets/data.json'; // Adjust the path to your JSON file
import './CardInfo.css'; // Use the same styles as CardInfo
import pr from '../../Assets/profile.png'

const DepartmentDetails = () => {
  const { id } = useParams();
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const department = data.departments.find(dept => dept.id === id);
    if (department) {
      setStaff(department.staff);
    }
  }, [id]);

  return (
    <>
      <div className="main-container"><h1>Department Staff</h1></div>
      <div className="container">
        {staff.map((card, index) => (
          <div className="card" key={index}>
            <div className="card__border">
              <div className="card__perfil">
                <img src={pr} alt="Profile" className="card__img" />
              </div>
            </div>
            <h3 className="card__name">{card.name}</h3>
            <span className="card__profession">{card.profession}</span>
            <div className="info">
              <div className="info__icon">
                <i className="ri-information-line"></i>
              </div>
              <div className="info__border">
                <div className="info__perfil">
                  <img src={pr} alt="Profile" className="info__img" />
                </div>
              </div>
              <div className="info__data">
                <h3 className="info__name">{card.name}</h3>
                <span className="info__profession">{card.profession}</span>
                <span className="info__location">{card.location}</span>
              </div>
              <div className="info__social">
                <a href={card.linkedinUrl} target="_blank" rel="noopener noreferrer" className="info__social-link">
                  <span className="info__social-icon">
                    <i className="ri-linkedin-box-line"></i>
                  </span>
                </a>
                <a href={card.dribbbleUrl} target="_blank" rel="noopener noreferrer" className="info__social-link">
                  <span className="info__social-icon">
                    <i className="ri-dribbble-fill"></i>
                  </span>
                </a>
                <a href={card.githubUrl} target="_blank" rel="noopener noreferrer" className="info__social-link">
                  <span className="info__social-icon">
                    <i className="ri-github-fill"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DepartmentDetails;
