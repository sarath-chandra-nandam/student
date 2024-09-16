import React from 'react';
import './CardInfo.css';
import profilepic1 from '../../Assets/img/perfil.png';
import 'remixicon/fonts/remixicon.css';



function CardInfo() {
  const cardData = [
    {
      name: 'Mynton Moore',
      profession: 'Frontend Developer',
      location: 'Lima - Perú',
      profileImg: profilepic1,
      linkedinUrl: 'https://www.linkedin.com/in/mynton',
      dribbbleUrl: 'https://dribbble.com/mynton',
      githubUrl: 'https://github.com/mynton'
    },
    {
      name: 'Jane Doe',
      profession: 'Backend Developer',
      location: 'New York - USA',
      profileImg: profilepic1,
      linkedinUrl: 'https://www.linkedin.com/in/janedoe',
      dribbbleUrl: 'https://dribbble.com/janedoe',
      githubUrl: 'https://github.com/janedoe'
    },
    {
        name: 'Mynton Moore',
        profession: 'Frontend Developer',
        location: 'Lima - Perú',
        profileImg: profilepic1,
        linkedinUrl: 'https://www.linkedin.com/in/mynton',
        dribbbleUrl: 'https://dribbble.com/mynton',
        githubUrl: 'https://github.com/mynton'
      },
      {
        name: 'Mynton Moore',
        profession: 'Frontend Developer',
        location: 'Lima - Perú',
        profileImg: profilepic1,
        linkedinUrl: 'https://www.linkedin.com/in/mynton',
        dribbbleUrl: 'https://dribbble.com/mynton',
        githubUrl: 'https://github.com/mynton'
      },
      {
        name: 'Mynton Moore',
        profession: 'Frontend Developer',
        location: 'Lima - Perú',
        profileImg: profilepic1,
        linkedinUrl: 'https://www.linkedin.com/in/mynton',
        dribbbleUrl: 'https://dribbble.com/mynton',
        githubUrl: 'https://github.com/mynton'
      },
    // Add more card data objects here...
  ];

  return (
    <>
    <div className="main-container"><h1>Computer Department Staff</h1></div>
    
    <div className="container">
        
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <div className="card__border">
            <div className="card__perfil">
              <img src={card.profileImg} alt="card image" className="card__img" />
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
                <img src={card.profileImg} alt="card image" className="info__img" />
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
}

export default CardInfo;
