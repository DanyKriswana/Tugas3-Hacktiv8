import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

import Profile from '../Assets/avatar.png'

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link>
          <img src={Profile} alt="profile"/>
        </Link>
        <nav>
          <Link className="about" to="/about">ABOUT</Link><br/>
          <Link className="experience" to="/experience">EXPERIENCE</Link><br/>
          <Link className="education" to="/education">EDUCATION</Link><br/>
          <Link className="skills" to="/skills">SKILLS</Link><br/>
          <Link className="interest" to="/interest">INTEREST</Link><br/>
          <Link className="awards" to="/awards">AWARDS</Link><br/>
        </nav>
      </div>
    )
  }
}