import React from 'react';
import './NavigationItem.css';

const navigationItem = (props) => {
  return (
    <li className='navigation-item'>
      <a
        href={props.link}
        className={props.active ? 'active' : null}
      >
        {props.children}
      </a>
    </li>
  )
}

export default navigationItem;
