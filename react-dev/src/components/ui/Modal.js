import React, { useEffect } from "react";
import { ModalContainer } from "./ui.style";

/**
 *
 * @param {Object} props
 * @param {void} props.onClose
 * @param {Boolean} props.visible
 * @param {React.ReactNode} props.children
 * @returns
 */
const Modal = ({ onClose, visible, children }) => {
  useEffect(() => {
    if (visible) {
      return (document.body.style.overflowY = "hidden");
    }

    return (document.body.style.overflowY = "auto");
  }, [visible]);
  return (
    <ModalContainer visible={visible} data-testid="modal" onClick={onClose}>
      <div className="modal-body">{visible ? children : null}</div>
    </ModalContainer>
  );
};

export default Modal;
