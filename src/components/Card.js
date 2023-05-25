import React from 'react';

function Card(props) {
  return (
    <div className="element">
      <button type="button" className="element__remove"></button>
      <button type="button" className="element__image-button">
        <img className="element__image" alt={props.name} src={props.link}/>
      </button>
      <div className="element__sign">
        <h3 className="element__title">{props.name}</h3>
        <div className="element__like-block">
          <button type="button" className="element__like"></button>
          <p className="element__like-text">{props.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;