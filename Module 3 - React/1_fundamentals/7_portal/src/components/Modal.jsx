import { createPortal } from "react-dom";

const Modal = ({ onClose }) => {
  return createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        <h2>I'm a Modal using Portal ✅</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;
