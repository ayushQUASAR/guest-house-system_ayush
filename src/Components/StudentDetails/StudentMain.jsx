import React from 'react';
import StudentLeft from './StudentLeft';
import StudentRight from './StudentRight';
// import '../main.css'
import '../../style/facultyalumni.css'

export default function StudentMain() {
  return (
    <div className="container">
      <div className="centered-box">
        <div className="row">
          <div className="col-lg-6 col-md-12 leftSide">
            <StudentLeft />
          </div>
          <div className="col-lg-6 col-md-12">
            <StudentRight />
          </div>
        </div>
      </div>
    </div>
  );
}
