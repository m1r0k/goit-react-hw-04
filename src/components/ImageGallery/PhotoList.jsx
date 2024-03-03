import css from "./PhotoList.module.css";
import PhotoCard from "./ImageCard/PhotoCard";

export default function PhotoList ({items, isOpenModal}){

  return (
    <div className={css.photoList}>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => isOpenModal(item)} >
            <PhotoCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};