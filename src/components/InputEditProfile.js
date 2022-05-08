function InputEditProfile() {
  return (
    <>
    <input type="text" name="name" id="name" className="popup__input popup__input_type_name" minLength="2"
          maxLength="40" required placeholder="Имя" />
          <span id="error-name" className="popup__error"></span>
          <input type="text" name="about" id="about" className="popup__input popup__input_type_about" minLength="2"
            maxLength="200" required placeholder="О себе" />
          <span id="error-about" className="popup__error"></span>
          </>
  );
}

export default InputEditProfile;
