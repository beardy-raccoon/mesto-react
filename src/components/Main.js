import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import Card from "./Card";
function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  let [userName, setUserName] = useState('');
  let [userDescription, setUserDescription] = useState('');
  let [userAvatar, setUserAvatar] = useState('');
  let [cards, setCards] = useState([]);

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

  return (
    <main className="content">

    <section className="profile">
      <div className="profile__container">
        <button type="button" className="profile__avatar-edit-button" style={{ backgroundImage: `url(${userAvatar})` }} onClick={onEditAvatar}></button>
        <div className="profile__info">
          <div className="profile__name-wraper">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
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
          key={card.id}
          />
          ))
          }
      </ul>
    </section>
  </main>
  );
}
export default Main;
