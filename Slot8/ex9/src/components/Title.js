import React from 'react';

function Title({ text }) {
  return <h2 style={{ 
    margin: '0 0 8px 0', 
    color: '#333', 
    fontSize: '18px',
    fontWeight: 'bold'
  }}>{text}</h2>;
}

export default Title;
