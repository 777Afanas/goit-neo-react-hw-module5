import Modal from "react-modal";
import style from "./ImageModal.module.css"; // Файл стилів тепер працює!

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    background: '#ffffff',
    border: 'none',
    padding: 0,
    margin: 0,
    overflow: 'hidden',
    borderRadius: '12px',
    width: '90vw',
    maxWidth: '850px',
    maxHeight: '85vh',
  },
};

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  const { urls, alt_description, user, likes, description } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      {/* 1. Головний обгортковий контейнер */}
      <div className={style.modalContent}>
        
        {/* 2. Контейнер зображення */}
        <div className={style.imageWrapper}>
          <img
            src={urls?.regular}
            alt={alt_description || "Large view"}
            className={style.modalImg}
          />
        </div>

        {/* 3. Інформаційний блок */}
        <div className={style.infoWrapper}>
          <div>
            <h3 className={style.description}>
              {description || alt_description || "Photo from Unsplash"}
            </h3>
            
            <div className={style.metaList}>
              <p className={style.metaItem}>
                <strong>Author:</strong> 👤 {user?.name || "Unknown"}
              </p>
              <p className={style.metaItem}>
                <strong>Likes:</strong> ❤️ {likes ?? 0}
              </p>
              {user?.location && (
                <p className={style.metaItem}>
                  <strong>Location:</strong> 📍 {user.location}
                </p>
              )}
            </div>
          </div>

          {/* <button className={style.closeButton} onClick={onClose}>
            Close
          </button> */}
        </div>

      </div>
    </Modal>
  );
};

export default ImageModal;