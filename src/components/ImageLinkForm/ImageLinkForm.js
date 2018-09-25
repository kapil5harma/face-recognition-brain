import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div className="ImageLinkForm">
      <p className="f3">
        {'This magic brain will detect faces in your pictures. Give it a try.'}
      </p>
      <div className="flex-center">
        <div className="flex-center form pa4 br3 shadow-5">
          <input
            type="text"
            className="f4 pa2 w-70 center"
            onChange={onInputChange}
          />
          <button
            className="f4 w-30 grow link ph3 pv2 dib white bg-light-purple"
            onClick={onPictureSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
