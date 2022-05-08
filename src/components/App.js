import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import InputsEditProfile from './InputsEditProfile';
import InputsAddPlace from './InputsAddPlace';
import InputEditAvatar from './InputEditAvatar';


function App() {

  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  let [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  let [selectedCard, setSelectedCard] = useState({})




  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
    console.log('card from handler', card);
    setIsImagePopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name='edit-profile'
          title='Редактировать профиль'
          buttonName='Сохранить'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
          <InputsEditProfile />
        </PopupWithForm>

        <PopupWithForm
          name='add-card'
          title='Новое место'
          buttonName='Создать'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
          <InputsAddPlace />
        </PopupWithForm>

        <PopupWithForm
          name='set-avatar'
          title='Обновить аватар'
          buttonName='Сохранить'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
          <InputEditAvatar />
        </PopupWithForm>

        <ImagePopup
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
          card={selectedCard}
        />
      </div>
    </div>
  );
}

export default App;
