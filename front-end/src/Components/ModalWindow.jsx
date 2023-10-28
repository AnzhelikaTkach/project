import React from "react";
import "../styles/ModalWindow.scss";

function ModalWindow({ open, onClose, firstSubtitle, secondSubtitle }) {
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modal-container">
        <img src="../images/gardener.webp" alt="heart" className="heart" />
        <div className="modalRight">
          <p className="btnClose" onClick={onClose}>
            X
          </p>
          <div className="content">
            <h1 className='content__title'> Thank You!</h1>
            
            {/* <p className='content__text'>A confirmation letter has been sent to you.</p> */}
            <p className="content__text">{firstSubtitle}</p>
            {/* <p className='content__text'> Check your inbox.</p> */}
            <p className="content__text"> {secondSubtitle}</p>
            <button className="content__btn" onClick={onClose}>
              Continue shopping!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
