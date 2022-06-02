import React from 'react';
//import { useState, useEffect } from 'react';
//import { api } from '../utils/api';
import Card from "./Card";
import { CurrenUserContext } from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, cards}) {
  // Подписываемся на контекст текущего пользователя
  const currentUser = React.useContext(CurrenUserContext);
  const {name, about, avatar} = currentUser;

  return (
    <main className="content">

    <section className="profile">
      <div className="profile__container">
        <button type="button" className="profile__avatar-edit-button" style={{ backgroundImage: `url(${avatar})` }} onClick={onEditAvatar}></button>
        <div className="profile__info">
          <div className="profile__name-wraper">
            <h1 className="profile__title">{name}</h1>
            <p className="profile__subtitle">{about}</p>
          </div>
          <button type="button" aria-label="Редактировать" className="profile__edit-button" onClick={onEditProfile}></button>
        </div>
      </div>
      <button type="button" aria-label="Добавить" className="profile__add-button" onClick={onAddPlace}></button>
    </section>

    <section className="elements">
      <ul className="elements-list">
      {cards.map((card)=>(
          <Card
          card={card}
          onCardClick={onCardClick}
          key={card._id}
          onCardLike={onCardLike}
          />
          ))
          }
      </ul>
    </section>
  </main>
  );
}
export default Main;
