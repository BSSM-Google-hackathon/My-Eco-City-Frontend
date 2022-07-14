import React from 'react'
import Nav from './components/nav'
import { useState } from 'react';
import Modal from './components/modal';
import Home from './components/home';

export const Mainpage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const modal = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <div className='main-root' >
      {isOpen ? <Modal modal={isOpen} toggle={setIsOpen} /> : <></>}
      <Nav modal={modal} isOpen={isOpen} />
      <Home/>
    </div>
  )
}
