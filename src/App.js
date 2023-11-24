import React, { useState, useEffect } from "react"; import './App.css';
import { Icon } from '@iconify/react';
import Modal from './Components/Modal'
import Japode from "./Components/Japode";

function App() {

  const [openModal, setOpenModal] = useState(false)
  const [audioSD, setAudioSD] = useState(null);
  const [liberado, setLiberado] = useState(false)

  useEffect(() => {
    setOpenModal(true);
  }, []);

  useEffect(() => {
    const musicaSD = new Audio('/audio/Sweet-Dreams.mp3');
    setAudioSD(musicaSD);
  }, []);

  const handleCloseClick = () => {
    if (audioSD) {
      audioSD.play();
    }
    setOpenModal(!openModal);
  };

  const liberou = () => {
    setLiberado(true)
    audioSD.pause();
  }

  return <div className='App'>

    <div>
      <Icon icon="openmoji:fork-and-knife-with-plate" width={40} height={40} />
      <h1>aomossinho.com.br</h1>
      <input id="input" type="text" placeholder='Já tá podendo?' style={{ fontFamily: 'sans-serif' }} />
      <button className='botao' onClick={liberou}>ao mosso??????</button><br />
    </div>

    <Modal isOpen={openModal} setCloseModal={handleCloseClick}>
      <div>
        <h2>Bem-vindo ao site do ao mossinho!</h2>
        <Icon icon="openmoji:fork-and-knife-with-plate" width={100} height={100} /><br />
        <button className='botao' onClick={handleCloseClick}>Quero saber se já pode ao mossar</button>
      </div>
    </Modal>

    <Japode isOpen={liberado} />

  </div>;
}

export default App;
