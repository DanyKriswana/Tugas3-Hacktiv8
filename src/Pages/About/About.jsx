import React, { Component } from 'react'

import Linkedin from '../../Assets/linkedin.png';
import GitHub from '../../Assets/github.png';

import './About.css';

export class About extends Component {
  render() {
    return (
      <div className="bg-warna">
        <h1 className="tittle">ABOUT <span>ME</span></h1>
        <h2>+6123456969 <span>uzumakitsubasa@gmail.com</span></h2>
        <p className="konten">
          Hello. My name Muhammad Dany Kriswana people call me Dany, and im freshgraduate from Universitas Budi Luhur with good grades.
          and Now im learning as a frontend developer with React and React Native.
          Currently i've been working on Group project to create mobile apps with React Native.
          i participated as a front-end developer focusing on create and scratch design screens. This apps has 6 screen, Create screen, Dashboard, Detail, List, Login, Splashscreen.
          In that project i learn how to intergrating API, learn more about git, and write a clean code, and learning how to working as group.
        </p>
        <div className="area-img">
          <img className='linkedin' src={Linkedin} alt="linkedin" />
          <a href='https://github.com/DanyKriswana'><img className='github' src={GitHub} alt="Github" /></a>
        </div>
      </div>
    )
  }
}

export default About