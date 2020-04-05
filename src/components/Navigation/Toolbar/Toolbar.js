import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolBar = (props) => {
  return (
    <header className='toolbar'>
      <div>MENU</div>
      <div className='logo-container'>
        <Logo />
      </div>
      <nav className='navigation-container'>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default toolBar;
