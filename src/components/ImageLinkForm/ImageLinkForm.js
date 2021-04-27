import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This app will detect a face in your picture. Type in any image URL to see if the app can detect a face on it.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-transparent' onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;
