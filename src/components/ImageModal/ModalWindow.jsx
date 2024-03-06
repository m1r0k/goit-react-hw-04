import ReactModal from 'react-modal';
import css from './Modal.module.css';

ReactModal.setAppElement('#root');

export default function ModalWindow ({ isOpen, itemUrl, onClose }) {
  return (
    <div className={css.modalOverlay} >
      <ReactModal 
        className={css.modal}
        isOpen={isOpen}
        onRequestClose={onClose} 
        overlay={css.overlay} >
        <img src={itemUrl} alt='Big photo' />
      </ReactModal>
    </div>
  );
};