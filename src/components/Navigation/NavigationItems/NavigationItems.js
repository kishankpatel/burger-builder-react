import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {
  return (
    <ul className='navigation-items'>
      <NavigationItem link="/" active>Burger Builder</NavigationItem>
      <NavigationItem link="/" >Orders</NavigationItem>
    </ul>
  )
}

export default navigationItems;
