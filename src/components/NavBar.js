import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <header className="NavBar-header">
          
          <h1 className="NavBar-title">{this.props.title}</h1>
        </header>
      </div>
    );
  }
}

export default NavBar;