import Card from "./Card";
function Main(props) {



  return (
    <main className="content">

    <section className="profile">
      <div className="profile__container">
        <button type="button" className="profile__avatar-edit-button" style={{ backgroundImage: `url(${props.userAvatar})` }} onClick={props.onEditAvatar}></button>
        <div className="profile__info">
          <div className="profile__name-wraper">
            <h1 className="profile__title">{props.userName}</h1>
            <p className="profile__subtitle">{props.userDescription}</p>
          </div>
          <button type="button" aria-label="Редактировать" className="profile__edit-button" onClick={props.onEditProfile}></button>
        </div>
      </div>
      <button type="button" aria-label="Добавить" className="profile__add-button" onClick={props.onAddPlace}></button>
    </section>

    <section className="elements">
      <ul className="elements-list">
      {props.cards.map((card)=>(
          <Card
          card={card}
          onCardClick={props.onCardClick}
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
