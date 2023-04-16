import React, { useState } from "react";
import "./style.css";
import { Modal } from "react-responsive-modal";

export default () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <button onClick={onOpenModal}>View Rules</button>{open&&
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlayAnimationIn: "customEnterOverlayAnimation",
          overlayAnimationOut: "customLeaveOverlayAnimation",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={800}
      >
        <h2>Wordle Rules</h2>
        <ul>
          <li>Guess the Wordle in 6 tries.</li>
          <li>Each guess must be a valid 5-letter word.</li>
          <li>
            The color of the tiles will change to show how close your guess was
            to the word.
          </li>
        </ul>
      </Modal>}
    </div>
  );
};
