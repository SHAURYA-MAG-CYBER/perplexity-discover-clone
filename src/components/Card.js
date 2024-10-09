import React from 'react';
import './Card.css';

const OutlineBookmarkIcon = () => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="white"
      stroke="#938f90"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
  >
      <path d="M6 2h12c1.1 0 2 .9 2 2v16l-8-4.5L6 20V4c0-1.1.9-2 2-2z" />
  </svg>
);


const Card = ({ title, description, image, className, onClick}) => {
  return (

    <div className={`card ${className}`} onClick={onClick}>
      <img src={image} alt="not found" className='card-image'/>  
      <h2>{title}</h2>
      <p style={{ fontSize: 20, color: '#8b8b8d', fontStyle: 'larger', marginTop: 5}} className='description'>{description}</p>
      <div class='bottom-icons'>
        <div style={{ display:'flex' , justifyContent: 'space-between', width: 80, padding: 10, alignItems: 'center'}}>
          <div class='left-icon'>
            <img style={{ height: 20, width: 20 }}src='https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/831bd9b7-78f7-4d06-7380-44809b816500/thumbnail' alt='not found'/>
          </div>
          <p style={{ paddingBottom: 3 }}>elymc</p>
        </div>
        <button className="bookmark-button"><OutlineBookmarkIcon/></button>
      </div>
    </div>
  );
};

export default Card;
