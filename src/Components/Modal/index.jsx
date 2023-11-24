import React from "react";

const background = {
  backgroundColor: 'rgb(169,170,232)',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}

const modal = {
  backgroundColor: '#fff',
  color: '#000',
  borderRadius: '10px',
  position: 'fixed',
  transform: 'translate(-50%, -50%)',
  padding: '60px',
  top: '50%',
  left: '50%',
}

const textModal = {
  fontFamily: 'sans-serif',
  padding: '20px',
}

export default function Modal({ isOpen, children}) {

  if (isOpen) {
    return (
      <div style={background}>
        <div style={modal}>
          <div style={textModal}>{children}</div>
        </div>
      </div>
    )
  }

  return null
}

