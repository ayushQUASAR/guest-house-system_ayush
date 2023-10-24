import React from 'react';
import LeftSide from './Regleftside';
import RightSide from './Regrightside';
import  "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

import '../style/regform.css';

export default function Main() {
  return (
    <div className="container">
      <div className="centered-box">
        <div className="row">
          <div className="col-lg-6 col-md-12 leftSide">
            <LeftSide />
          </div>
          <div className="col-lg-6 col-md-12">
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );
}
