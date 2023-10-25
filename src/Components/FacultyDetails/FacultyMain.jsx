import React from 'react';
import FacultyRight from './FacultyRight';
import FacultyLeft from './FacultyLeft';
import '../../style/facultyalumni.css'
export default function FacultyMain() {
  return (
    <div className="container">
      <div className="centered-box">
        <div className="row">
          <div className="col-lg-6 col-md-12 leftSide">
            <FacultyLeft />
          </div>
          <div className="col-lg-6 col-md-12">
            <FacultyRight />
          </div>
        </div>
      </div>
    </div>
  );
}
