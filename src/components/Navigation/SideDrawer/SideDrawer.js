import React from 'react';
import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
  return (
    <div>
      <Backdrop show hideModal={props.hideMenu}/>
      <div className='side-drawer'>

        <div className='side-menu'>
          <div className='side-logo-container'>
            <Logo />
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </div>

      </div>
    </div>
  )
}

export default sideDrawer;
