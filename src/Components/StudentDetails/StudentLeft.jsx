import React from 'react';
import Image from "../../images/logo_250.png.png"
import '../../style/facultyalumni.css'


export default function StudentLeft() {
  return (
    <div className="LeftContainer d-flex align-items-center justify-content-center">
      <div className="text-center">
        <img className="LeftImage img-fluid" src={Image} alt="logo" />
        <h1 className="lheading mt-3">Nitj Registration Portal</h1>
      </div>
    </div>
  );
}
