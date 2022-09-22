import React from "react";
import "./style.css";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">

        <div className="title">
          <h1>Add Todo</h1>
        </div>
        <div className="body">
          <input
            className="box"
            type="text"
            placeholder=""
          />
        </div>
        <div className="footer">
          <button className="btn" onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button className="btn1">Done</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
