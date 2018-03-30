import React, { Component } from 'react';
import "../Styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer-author">Site by <a href="https://github.com/Radek-Wawrzyk">Radziu</a></p>
        <ul className="footer-icons">  
          <li className="fa fa-github" aria-hidden="true">
            <a href="https://github.com/Radek-Wawrzyk"></a>
          </li>
          <li className="fa fa-linkedin-square" aria-hidden="true">
            <a href="https://www.linkedin.com/in/radek-wawrzyk-211948158/"></a>
          </li>
          <li className="fa fa-facebook-square" aria-hidden="true">
            <a href="https://www.facebook.com/radek.wawrzyk"></a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
