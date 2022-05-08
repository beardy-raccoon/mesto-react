export default function InputsEditAvatar() {
  return (
    <>
      <input type="url" name="avatarlink" id="avatar-link" className="popup__input popup__input_avatar_link" required
        placeholder="Ссылка на аватар" />
      <span id="error-avatar-link" className="popup__error"></span>
    </>
  );
}
