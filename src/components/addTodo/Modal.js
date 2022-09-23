import React, {useState} from "react";
import "./style.css";

function Modal({ closeModal, addTodo }) {

  const [title, setTitle]=useState("Enter something here")
  const handleSubmit = (e)=>{
    e.preventDefault()
    const newTodo={id:Math.random(), title:title}
    addTodo(newTodo)
    setTitle("")
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>Add Todo</h1>
        </div>
        <div className="body">
          <form onSubmit={handleSubmit}>
          <input
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
            className="box"
            type="text"
            placeholder=""
            required
          />
          <button className="btn" onClick={() => closeModal(false)}>
            Cancel
          </button>
          
          <input className="btn1" type="submit"/>
          </form>
        </div>
        <div className="footer">
          
        </div>
      </div>
    </div>
  );
}

export default Modal;
