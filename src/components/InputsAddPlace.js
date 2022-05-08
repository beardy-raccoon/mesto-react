export default function InputsAddPlace() {
  return (
    <>
      <input type="text" name="card-name" id="card-name" className="popup__input popup__input_card_name" minLength="2"
        maxLength="30" required placeholder="Название" />
      <span id="error-card-name" className="popup__error"></span>
      <input type="url" name="card-link" id="card-link" className="popup__input popup__input_card_link" required
        placeholder="Ссылка на картинку" />
      <span id="error-card-link" className="popup__error"></span>
    </>
  );
}
