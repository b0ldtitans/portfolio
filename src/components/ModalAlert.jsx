import React from "react";
import Modal from "react-modal";
import "./Modal.css";

const NotificationModal = ({ isOpen, onClose, message }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Notification">
      <div>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default NotificationModal;
