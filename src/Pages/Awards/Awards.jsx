import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

import './Awards.css';

export class Awards extends Component {
  render() {
    return (
      <div className="text-zone">
        <h1 className="tittle">AWARDS <span>&</span> CERTIFICATIONS</h1>
        <div className="sertifikat">
          <FontAwesomeIcon icon={faMedal} className="icons" />
          <p className='nama-sertifikat'>Basic Computer Algorithm Competency</p>
          <FontAwesomeIcon icon={faMedal} className="icons" />
          <p className='nama-sertifikat'>Monsoon SIM</p>
        </div>
      </div>
    )
  }
}

export default Awards