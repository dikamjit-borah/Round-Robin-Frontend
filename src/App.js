import { React, useState, useEffect } from "react";
import './App.scss';
import Modal from "react-modal";
import AddTopicComponent from "./components/AddTopicComponent/AddTopicComponent";
import WeekComponent from './components/WeekComponent/WeekComponent';
import NavigationBarComponent from './components/NavigationBarComponent/NavigationBarComponent';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () =>{
    setModalIsOpen(true)
  }
  return (
    
    
    <div className="App">
      
      <NavigationBarComponent></NavigationBarComponent>
      
      <button onClick={openModal}>Add Topic</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        shouldCloseOnOverlayClick={true}
      >
        <AddTopicComponent startingTime={0}></AddTopicComponent>
      </Modal>
      <div className="AppChild app-right">
       <WeekComponent></WeekComponent>

       
      </div>
    </div>
  );
}

export default App;
