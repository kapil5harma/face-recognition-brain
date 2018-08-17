import React from 'react';

const FaceRecognition = ({ imageURL }) => {
  return (
    <div className="FaceRecognition center">
      <img src={imageURL} alt="recognise-it" />
    </div>
  );
};

export default FaceRecognition;
