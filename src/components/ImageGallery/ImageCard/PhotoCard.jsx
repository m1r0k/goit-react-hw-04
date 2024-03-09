import css from './PhotoCard.module.css';

export default function PhotoCard({
  photo: { alt_description, urls },
  openModal,
}) {
  return (
    <div className={css.imgCard}>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() => openModal({ alt_description, imgUrl: urls.regular })}
      />
    </div>
  );
}
