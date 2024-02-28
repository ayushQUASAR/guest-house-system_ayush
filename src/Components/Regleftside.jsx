import React from 'react';
import Image from '../images/logo_250.png.png';
import '../style/regform.css';

export default function Regleftside() {
  return (
    <div className="LeftContainer d-flex align-items-center justify-content-center">
      <div className="text-center">
        <img className="LeftImage img-fluid" src={Image} alt="logo" />
        <h1 className="lheading mt-3">NIT Jalandhar <br/>Guest House Registration
</h1>
      </div>
    </div>
  );
}
