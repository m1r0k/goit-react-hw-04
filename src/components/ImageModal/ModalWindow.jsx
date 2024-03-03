import ReactModal from 'react-modal';
import css from './Modal.module.css';

export default function ModalWindow ({ isOpenModal, item, onCloseModal }) {
  return (
    <div className={css.modalOverlay} >
      <ReactModal 
        className={css.modal}
        isOpen={isOpenModal}
        onRequestClose={onCloseModal} 
        overlay={css.overlay} >
        <img src={item.urls.regular} alt={item.alt_description} />
      </ReactModal>
    </div>
  );
};