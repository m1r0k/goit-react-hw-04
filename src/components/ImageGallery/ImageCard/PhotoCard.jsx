import css from "./PhotoCard.module.css";

export default function PhotoCard ({src, alt, onClick}) {
  return (
    <div className={css.img} onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
};