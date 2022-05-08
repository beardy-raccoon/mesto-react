export default function ImagePopup(props) {
  const {link, name} = props.card;
  return (
    <section className={`popup popup_type_image ${props.isOpen ? 'popup_opened' : ''}`} >
    <div className="popup__container">
      <button type="button" aria-label="Закрыть" className="popup__close-button" onClick={props.onClose}></button>
      <img className="popup__image-link" src={link} alt={name} />
      <h3 className="popup__image-name">{name}</h3>
    </div>
  </section>
  );
}

