import React, { Component } from 'react';
import Aux from  '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import MenuLogo from '../../assets/images/menu.png'
class Layout extends Component {
  state = {
    displayMenu: false
  }
  toggleMenu = () => {
    this.setState({displayMenu: !this.state.displayMenu})
  }
  render () {
    const sideMenu = this.state.displayMenu ? <SideDrawer hideMenu={this.toggleMenu} /> : null
    return (
      <Aux>
        <div>
          <Toolbar />
          <div className="hamburger-menu" onClick={this.toggleMenu}>
            <img src={MenuLogo} alt='Toggle Menu' title='Toggle Menu'/>
          </div>
          {sideMenu}
        </div>
        <main className='content'>
          {this.props.children}
        </main>
      </Aux>
    )
  }
};

export default Layout;
