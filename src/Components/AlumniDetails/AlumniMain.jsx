import React from 'react';
import AlumniLeft from './AlumniLeft';
import AlumniRight from './AlumniRight';
import '../../style/facultyalumni.css'
export default function AlumniMain() {
  return (
    <div className="container">
      <div className="centered-box">
        <div className="row">
          <div className="col-lg-6 col-md-12 leftSide">
            <AlumniLeft />
          </div>
          <div className="col-lg-6 col-md-12">
            <AlumniRight />
          </div>
        </div>
      </div>
    </div>
  );
}
