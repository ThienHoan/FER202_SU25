import React from 'react';

function Description({ text }) {
  return <p style={{ 
    margin: 0, 
    color: '#666',
    fontSize: '14px',
    lineHeight: '1.4'
  }}>{text}</p>;
}

export default Description;
