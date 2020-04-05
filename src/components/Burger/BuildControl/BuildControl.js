import React from 'react';
import './BuildControl.css';

const buildControl = (props) => {
  return (
    <div className='build-control'>
      <div className='label'>{props.label} (Rs.{props.price})</div>
      <button
        className='less'
        onClick={props.remove}
        disabled={props.disabledLess}
      >
        Less
      </button>
      <button
        className='more'
        onClick={props.add}
        disabled={props.disabledMore}
      >
        More
      </button>
    </div>
  )
}

export default buildControl;
