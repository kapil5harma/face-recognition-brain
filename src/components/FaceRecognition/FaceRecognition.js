import React from 'react';

const FaceRecognition = ({ imageURL }) => {
  return (
    <div className="FaceRecognition flex-center ma">
      <div className="absolute mt2">
        <img src={imageURL} alt="recognise-it" width="500px" height="auto" />
      </div>
    </div>
  );
};

export default FaceRecognition;
