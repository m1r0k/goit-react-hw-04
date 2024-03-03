import css from "./PhotoCard.module.css";

export default function PhotoCard ({item}) {
    return (
        <div className={css.img}>
            <img src={item.urls.small} alt={item.alt_description} />
        </div>
    );
};