import { useState } from "react";
import css from "./PhotoList.module.css";
import PhotoCard from "./ImageCard/PhotoCard";
import ModalWindow from "../ImageModal/Modal";

export default function PhotoList ({items}){
  const [selectedPhoto, SetSelectedPhoto] = useState(null);

  const isOpenModal = (photoUrl) => {
    SetSelectedPhoto(photoUrl);
  };

  const onCloseModal = (photoUrl) => {
    SetSelectedPhoto(null);
  };


  return (
    <div className={css.photoList}>
      <ul>
        {items.map((item) => (
          <li>
            <PhotoCard key={item.id}
					  photo={item}
					  onClick={isOpenModal}/>
          </li>
        ))}
      </ul>
      {selectedPhoto && (
        <ModalWindow photoUrl={selectedPhoto} onClose={onCloseModal} />
      )}
    </div>
  );
};