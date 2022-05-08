import React from 'react';
import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import InputEditProfile from './InputEditProfile';
import InputsAddPlace from './InputsAddPlace';
import InputEditAvatar from './InputEditAvatar';


function App() {

  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  let [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  let [userName, setUserName] = useState('');
  let [userDescription, setUserDescription] = useState('');
  let [userAvatar, setUserAvatar] = useState('');
  let [cards, setCards] = useState([]);
  let [selectedCard, setSelectedCard] = useState('')

  useEffect(() => {
    api.getProfile()
      .then((profile) => {
        setUserName(profile.name);
        setUserDescription(profile.about);
        setUserAvatar(profile.avatar);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    api.getInitialCards()
      .then((initialCards) => {
        const cardsList = initialCards.map((card) => {
          return {
            link: card.link,
            name: card.name,
            likes: card.likes,
            id: card._id
          }
        })
        setCards(cardsList);
      })
      .catch(console.log);
  }, []);


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
    setIsImagePopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard('');
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          userName={userName}
          userDescription={userDescription}
          userAvatar={userAvatar}
          cards={cards}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name={'edit-profile'}
          title={'Редактировать профиль'}
          buttonName={'Сохранить'}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          children={<InputEditProfile />}
        />
        <PopupWithForm
          name={'add-card'}
          title={'Новое место'}
          buttonName={'Создать'}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          children={<InputsAddPlace />}
        />
        <PopupWithForm
          name={'set-avatar'}
          title={'Обновить аватар'}
          buttonName={'Сохранить'}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={<InputEditAvatar />}
        />
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
