import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import './Navbar.scss';

class _Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: props.menuItems,
    };
  }
  _shouldRenderLogo() {
    if(!this.props.disableLogo) {
      return (
        <div className="one flex flex-center bs-navbar__logo" onClick={() => this._redirectHome()}>
          LOGO
        </div>
      );
    }
  }
  _redirectHome() {
    this.props.history.push('/');
  }
  _renderMenuItems() {
    return (
      <ul className="horizontal bs-navbar__menu__menulist">
        {this.state.menuItems && this.state.menuItems.map((item, index) => {
          return (
            <li key={index} className="bs-navbar__menu__menulist__menuitem">
              <Link to={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
  render() {
    return (
      <div className="horizontal bs-navbar">
        {this._shouldRenderLogo()}
        <div className="five flex bs-navbar__menu">
          {this._renderMenuItems()}
        </div>
      </div>
    );
  }
};

_Navbar.defaultProps = {
  menuItems: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Books',
      link: '/books',
    },
  ],
};

export const Navbar = withRouter(_Navbar);