import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div key={props.card._id} className="element">
      <button type="button" className="element__remove"></button>
      <button type="button" className="element__image-button" onClick={handleClick}>
        <img className="element__image" alt={props.card.name} src={props.card.link}/>
      </button>
      <div className="element__sign">
        <h3 className="element__title">{props.card.name}</h3>
        <div className="element__like-block">
          <button type="button" className="element__like"></button>
          <p className="element__like-text">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;