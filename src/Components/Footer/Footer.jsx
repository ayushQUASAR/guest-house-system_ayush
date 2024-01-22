import React from "react";
import "./Footer.css";
import logo from "../../images/logo_250.png.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="flex-container167">
        <div className="div1">
          <div>
            <img
              style={{
                width: "70px",
                height: "70px",
                marginRight: "15px",
                float: "left",
              }}
              src={logo}
              alt="My Image"
            />

            <h4 style={{ paddingLeft: "5px", paddingRight: "10px" }}>
              Dr B R Ambedkar National Institute of Technology Jalandhar
            </h4>
            <p className="paraty">
              <i
                className="material-icons"
                style={{
                  fontSize: "36px",
                  paddingRight: "10px",
                  float: "left",
                }}
              >
                place
              </i>
              G.T Road, Amritsar Bypass, Jalandhar, Punjab, India-144008
            </p>
            <p className="paraty">
              <i
                className="material-icons"
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  fontSize: "25px",
                  float: "left",
                }}
              >
                local_phone
              </i>
              +91-0181-5037855,2690301,2690453, 3082000
            </p>
          </div>
          <div className="socialflex">
            <a href="https://www.facebook.com/NITJofficial/">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/NITJofficial">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/school/dr-b-r-ambedkar-national-institute-of-technology-jalandhar-official/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/nitjofficial/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/c/nitjofficial">
              <i className="fa fa-youtube-play"></i>
            </a>
          </div>
        </div>

        <div className="div3">
          <h4
            style={{
              // marginLeft: "60px",
              display: "block",
              textAlign: "center",
              // marginBottom: "20px",
            }}
          >
            Quick Links
          </h4>
          <div className="flex-container23">
            <div>
              <ul>
                <li>
                  <a
                    href="https://www.nitj.ac.in/index.html"
                    target="_blank"
                    className="external-link"
                  >
                    Institute
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.nitj.ac.in/admissions/index.html#btech"
                    target="_blank"
                    className="external-link"
                  >
                    Admission
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nitj.ac.in/admin/ranking.html"
                    target="_blank"
                    className="external-link"
                  >
                    Rankings
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a
                    href="https://www.nitj.ac.in/template/index.html?id=651e908479c68ff6aaa9df9e?category=newpage"
                    target="_blank"
                    className="external-link"
                  >
                    Annual Reports
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nitj.ac.in/template/index.html?id=64ae4b97a5e16718759c7e9c?category=newpage"
                    target="_blank"
                    className="external-link"
                  >
                    Rules/Policies
                  </a>
                </li>
                <li>
                  <a
                    href="https://nitj.ac.in/admin/administration.html"
                    target="_blank"
                    className="external-link"
                  >
                    Deans
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a
                    href="https://www.nitj.ac.in/template/index.html?id=6551f252a7c0e1110f0f7882?category=newpage"
                    target="_blank"
                    className="external-link"
                  >
                    List of Holidays
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nitj.ac.in/nitj_files/links/Dr_21443.pdf"
                    target="_blank"
                    className="external-link"
                  >
                    NIRF 2023
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nitj.ac.in/admin/ranking.html"
                    target="_blank"
                    className="external-link"
                  >
                    Rankings
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a
                    href="https://www.nitj.ac.in/NITJ-Compendium/"
                    target="_blank"
                    className="external-link"
                  >
                    NITJ Compendium
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nitj.ac.in/template/index.html?id=64faf68538ceda75f04478fe?category=newpage"
                    target="_blank"
                    className="external-link"
                  >
                    NIT Act
                  </a>
                </li>
                <li>
                  <a
                    href="https://nitj.ac.in/template/index.html?id=6433e06be7b7ce1ef620fd53?category=notice"
                    target="_blank"
                    className="external-link"
                  >
                    Academic Calendar
                  </a>
                </li>
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
