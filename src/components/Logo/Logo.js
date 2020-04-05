import React from 'react';
import './Logo.css';
import logoPath from '../../assets/images/logo.png'

const logo = (props) => {
  return (
    <div className='logo' style={{height: props.height}}>
      <img src={logoPath} alt='BurgerBuilder'/>
    </div>
  )
}

export default logo;
