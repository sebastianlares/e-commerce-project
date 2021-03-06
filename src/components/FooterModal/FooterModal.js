import React from "react";
import { useGlobalContext } from "../../globalContext";
import "./footerModal.css";
import { RiCloseLine } from "react-icons/ri";

function FooterModal() {
  const { isModalOpen, closeModal, modalData } = useGlobalContext();
  const { question, answer } = modalData;
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      } `}
    >
      <div className="modal-container">
        <h3>{question}</h3>
        {answer}
        <button className="close-modal-btn" onClick={closeModal}>
          <RiCloseLine />
        </button>
      </div>
    </div>
  );
}

export default FooterModal;
