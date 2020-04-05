import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => {
  return (
    <div>
      <Backdrop show={props.show} hideModal={props.hideModal}/>
      <div
        className='modal'
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
        >
        {props.children}
      </div>
    </div>
  )
}

export default modal;
