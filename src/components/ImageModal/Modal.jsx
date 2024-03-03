import Modal from 'react-modal';
import css from './Modal.module.css';

export default function ModalWindow ({ isOpen, item, onClose }) {
  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <ModalWindow 
        className={css.modal}
        isOpen={isOpen}
        onClose={onClose} 
        overlay='overlay' >
          <div>
            {image && (
            <img src={image.urls.regular} alt={image.alt_description} />
            )}
        </div>
      </ModalWindow>
    </div>
  );
};