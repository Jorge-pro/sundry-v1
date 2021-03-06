import React, { Component }from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "../Buttons/Button"; 
import './Navbar.css';


class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  } 

  render() {
    return(
      <nav className= "NavbarItems">
          <h2 className="navbar-logo">Sundry<i className="fas fa-chalkboard-teacher"></i></h2>
          <div className="menu-icon" onClick={ this.handleClick }>
              <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            { MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>{item.title}</a>
                  </li>
                )
            })}
          </ul>
          <Button>Create an account</Button>
      </nav>
    )
  }
}

export default Navbar;



