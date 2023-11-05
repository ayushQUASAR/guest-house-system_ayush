import React from 'react';
import './Footer.css'
import logo from '../../images/logo_250.png.png'


const Footer = () => {
  return (
    <>
     <div className="flex-container167">
      <div className="div1">
        <div>
          <img
            style={{ width: '20%', height: 'auto', marginRight: '15px', float: 'left' }}
             src={logo} alt="My Image" />
          
          <h4 style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            Dr B R Ambedkar National Institute of Technology Jalandhar
          </h4>
          <p className="paraty">
            <i className="material-icons" style={{ fontSize: '18px', paddingRight: '10px', float: 'left' }}>
              <strong>Place:</strong>
            </i>
            G.T Road, Amritsar Bypass, Jalandhar, Punjab, India-144008
          </p>
          <p className="paraty">
            <i className="material-icons" style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '18px', float: 'left' }}>
              Local Phone
            </i>+91-0181-5037855, 2690301, 2690453, 3082000
          </p>
        </div>
        <div className="socialflex">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-youtube-play"></i>
        </div>
      </div>
      <div className="div3">
        <h4 style={{ marginLeft: '60px', display: 'block' }}>Quick Links</h4>
        <div className="flex-container23">
          <div>
            <ul>
              <li>Academic Calendar</li>
              <li>Academic Section</li>
              <li>Officials</li>
              <li>Admissions</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Academic Calendar</li>
              <li>Academic Section</li>
              <li>Officials</li>
              <li>Admissions</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Academic Calendar</li>
              <li>Academic Section</li>
              <li>Officials</li>
              <li>Admissions</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Academic Calendar</li>
              <li>Academic Section</li>
              <li>Officials</li>
              <li>Admissions</li>
            </ul>
          </div>
        </div>
        <div className="socialflex1">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-youtube-play"></i>
        </div>
      </div>

      </div>
      
   </>
  
  );
};

export default Footer;
