import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const Modal = ({active, setActive, children, idx, editTaskNew}) => {
  const onChangeName = async (item) => {
    if(editTaskNew){
      await axios.patch('http://localhost:8000/update', {
        _id: item._id,
        name: editTaskNew
      }).then(res => {});
    } else {
      alert('Вы ввели пустое задание!');
    }
    
  };

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}> 
      <div className={active ? 'modalContent active' : 'modalContent'} onClick={(e) => e.stopPropagation()}>
        <div className='modalTitle'>
          <h1>Title</h1>
          <div className='iconEditWrap'>
            <svg onClick={() => {onChangeName(idx); setActive(false)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM339.8 211.8C350.7 200.9 350.7 183.1 339.8 172.2C328.9 161.3 311.1 161.3 300.2 172.2L192 280.4L147.8 236.2C136.9 225.3 119.1 225.3 108.2 236.2C97.27 247.1 97.27 264.9 108.2 275.8L172.2 339.8C183.1 350.7 200.9 350.7 211.8 339.8L339.8 211.8z"/></svg>   
            <svg onClick={() => setActive(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"/></svg>     
          </div>           
        </div>
        {children}
      </div>
    </div>
  )
};

export default Modal;