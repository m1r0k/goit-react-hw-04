import css from "./PhotoCard.module.css";

export default function PhotoCard ({item, onClick}) {
    return (
        <li key={item.id} onClick={onClick}>
            <img src={item.urls.small} alt={item.alt_description} />
        </li>
    );
};