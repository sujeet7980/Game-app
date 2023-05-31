import React, { useState } from "react";
import "./style.css";
import { Modal } from "react-responsive-modal";

export default () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div >
      <span class="material-symbols-sharp p-2" onClick={onOpenModal}>
        help
      </span>
      {open && (
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
          <h5>Wordle Rules</h5>
          <ul>
            <li>Guess the Wordle in 6 tries.</li>
            <li>Each guess must be a valid 5-letter word.</li>
            <li>
              The color of the tiles will change to show how close your guess
              was to the word.
            </li>
          </ul>
          <hr/>
          <h6>Example</h6>
          <div className="d-flex">
          <div className='box' id="correct">T</div>
          <div className='box'>R</div>
          <div className='box'>E</div>
          <div className='box'>N</div>
          <div className='box'>D</div>
          </div>
          <p>The letter T is in the word and in the correct spot.</p>
          <div className="d-flex">
          <div className='box' >M</div>
          <div className='box'>O</div>
          <div className='box'>I</div>
          <div className='box' id="close">T</div>
          <div className='box'>D</div>
          </div>
          <p>The letter T is in the word but in the wrong spot.</p>
          <div className="d-flex">
          <div className='box' >V</div>
          <div className='box'>A</div>
          <div className='box' id="error" >M</div>
          <div className='box'>U</div>
          <div className='box'>E</div>
          </div>
          <p>The letter M is not in the word in any spot.</p>
        </Modal>

      )}
    </div>
  );
};
