import React from 'react';
import Title from './Title';
import Description from './Description';
import Image from './Image';

function SimpleCard({ item }) {
  return (
    <div style={{
      width: '500px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      padding: '0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      margin: '10px',
      display: 'flex',
      overflow: 'hidden',
      backgroundColor: 'white'
    }}>
      {/* Left side - Logo */}
      <div style={{
        width: '200px',
        height: '120px',
        backgroundColor: 'white',
        flexShrink: 0,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px'
      }}>
        <Image imageUrl={item.imageUrl} alt={item.title} />
      </div>
      
      {/* Right side - Content */}
      <div style={{
        flex: 1,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Title text={item.title} />
        <Description text={item.description} />
      </div>
    </div>
  );
}

export default SimpleCard;
