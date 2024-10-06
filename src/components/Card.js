// src/components/Card.js
import React from 'react';
import './Card.css'; // Create this CSS file for styling later

const Card = ({ title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
