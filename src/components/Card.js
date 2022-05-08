function Card(props) {

  const {link, name,likes} = props.card;
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <>
    <li className="element">
      <button type="button" aria-label="Удалить" className="element__delete-button"></button>
      <img className="element__image" src={`${link}`} alt="Название загруженного фото" onClick={handleClick} />
      <div className="element__wrap">
        <h2 className="element__image-name">{name}</h2>
        <div className="element__like-wrap">
          <button type="button" aria-label="Нравится" className="element__like-button"></button>
          <span className="element__like-counter">{likes.length}</span>
        </div>
      </div>
    </li>
    </>
  )
}
export default Card;
