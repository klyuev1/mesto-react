import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    //Здесь должна быть функция сброса
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />

      <PopupWithForm 
        name = "profile"
        title = "Редактировать профиль"
        nameButtonSave = "Сохранить"
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
        >
        <label className="popup__label">
          <input id="name" type="text" className="popup__input" name="name" minLength="2" maxLength="40" required/>
          <span className="name-error"></span>
        </label>
        <label className="popup__label">
          <input id="occupation" type="text" className="popup__input" name="occupation" minLength="2" maxLength="200" required/>
          <span className="occupation-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm 
        name = "card"
        title = "Новое место"
        nameButtonSave = "Создать"
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
        >
        <label className="popup__label">
          <input id="title" type="text" className="popup__input" name="title" placeholder="Название" minLength="2" maxLength="30" required/>
          <span className="title-error"></span>
        </label>
        <label className="popup__label">
          <input id="link" type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" required/>
          <span className="link-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm 
        name = "delete"
        title = "Вы уверены?"
        nameButtonSave = "Да"
      />

      <PopupWithForm 
        name = "avatar"
        title = "Обновить аватар"
        nameButtonSave = "Сохранить"
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
        >
        <label className="popup__label">
          <input id="avatar" type="url" className="popup__input" name="avatar" placeholder="Ссылка на картинку" required/>
          <span className="avatar-error"></span>
        </label>
      </PopupWithForm>

      {/* <ImagePopup /> */}
      


    </div>
  );
}

export default App;
// 5. Настройте работу попапов
// Добавьте императивные обработчики
// Декларативный подход