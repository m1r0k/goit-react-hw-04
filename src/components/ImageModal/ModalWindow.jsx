import ReactModal from 'react-modal';
import css from './Modal.module.css';

ReactModal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    padding: 32,
  },
};

export default function ModalWindow({
  modal: { photoUrl, alt_description },
  openModal,
  closeModal,
}) {
  return (
    <div className={css.modalOverlay}>
      <ReactModal
        className={css.modal}
        openModal={openModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div>
          <img src={photoUrl} alt={alt_description} />
        </div>
      </ReactModal>
    </div>
  );
}
