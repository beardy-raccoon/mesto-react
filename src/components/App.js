import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import InputsEditProfile from './InputsEditProfile';
import InputsAddPlace from './InputsAddPlace';
import InputEditAvatar from './InputEditAvatar';

import { CurrenUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(console.log);
  };

  const handleCardDelete = () =>{

  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  };

    // Получили данные профиля
  useEffect(() => {
    api.getProfile()
      .then((profile) => {
        setCurrentUser(profile)
      })
      .catch(console.log);
  }, []);

  // Получили массив объектов карточек
  useEffect(() => {
    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch(console.log);
  }, []);

  return (
    <div className="App">
      <div className="page">
      {/** Providing context to the App */}
      <CurrenUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          cards={cards}
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
        </CurrenUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
