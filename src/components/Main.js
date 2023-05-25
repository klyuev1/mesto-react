import React from 'react';
import api from '../utils/Api.js'
import Card from './Card.js';


function Main(props) {
  
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription ] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then((res) => {
      const [Userdata, Cardsdata] = res;
        setUserName(Userdata.name);
        setUserDescription(Userdata.about);
        setUserAvatar(Userdata.avatar);
        setCards(Cardsdata);
        console.log(Cardsdata);
    })
    .catch((err) => {
      console.log(err);
    });
  },[]);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__section">
          <button className="profile__avatar-button" type="button" onClick={props.onEditAvatar}>
            <img className="profile__avatar" alt="Аватар человека" src={userAvatar}/>
          </button>
          <div className="profile__info">
            <div className="profile__title-block">
              <h1 className="profile__title">{userName}</h1>
              <button type="button" className="profile__button-edit" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__button-add" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        {cards.map(({ id, ...props }) => <Card key={id} {...props} />)}
      </section>
    </main>
  );
}

export default Main;

//7. Настройте карточки мест
// Добавьте запрос к API
// Показывайте полноразмерную картинку при клике