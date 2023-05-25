import React from 'react';

function ImagePopup(props) {
  return (
    <div className="popup popup_type_zoom"> 
        <div className="popup__card">
          <img className="popup__card-image"/>
          <h3 className="popup__card-title"></h3>
          <button type="button" className="popup__button-close popup__button-close_card"></button>
        </div>
      </div>
  );
}

export default ImagePopup;