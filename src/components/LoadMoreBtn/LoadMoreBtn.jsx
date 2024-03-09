import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick, children, disabled }) {
  return (
    <button className={css.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
