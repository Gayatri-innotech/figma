import { useState } from 'react';
import './App.css';
import TodoContainer from './containers/todoContainer';
import {FaPlusCircle} from 'react-icons/fa'
import Modal from './components/Modal';

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <div className="icons">
      <FaPlusCircle className="openModalBtn" onClick={()=>{
      setOpenModal(true);
      }} />
      <h1 className="heading">Today</h1>
      <TodoContainer/>
      {openModal && <Modal closeModal={setOpenModal}/>}
      </div>
    </div>
  );
}

export default App;