import React from "react";
import PopupWithForm from "./PopupWithForm";
import InputsAddPlace from "./InputsAddPlace";

export default function AddPlacePopup(props) {

  const [newPlace, setNewPlace] = React.useState({ name: '', link: '' });

  function handleAddNewPlace(evt) {
    const { name, value } = evt.target;
    setNewPlace({
      ...newPlace,
      [name]: value
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddNewPlace(newPlace);
  }

  React.useEffect(() => {
    setNewPlace({ "name": '', "link": '' })
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name='add-card'
      title='Новое место'
      buttonName='Создать'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      onOverlayClick={props.onOverlayClick} >

      <InputsAddPlace
        name={newPlace.name}
        link={newPlace.link}
        onChange={handleAddNewPlace} />
    </PopupWithForm>
  )
}
