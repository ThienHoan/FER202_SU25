import React from 'react';

function Image({ imageUrl, alt }) {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError || !imageUrl) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#D4AF37'
      }}>
        IMG
      </div>
    );
  }

  return <img 
    src={imageUrl} 
    alt={alt} 
    style={{ 
      width: '100%', 
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    }}
    onError={handleImageError}
  />;
}

export default Image;
