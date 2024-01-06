import React, { useState, useCallback } from "react";
import "./home.css";
import houseSolid from "/houseSolid.svg";
import infoSolid from "/infoSolid.svg";
import gallery from "/gallerySolid.svg";
import availability from "/calendarSolid.svg";
import contactSVG from "/contactSVG.svg";
import Footer from "./Components/Footer/Footer";
import houseSVG from "/guestHouse.svg";
import guidelinesSVG from "/list-check-solid.svg";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import HomeHeader from "./Components/Homeheader";
import Calendar from "./Components/CalendarHome/Calendar";
function Login() {
  const houses = [
    {
      name: "Main Guest House ",
      roomsCount: 10,
      loaction: "blah blah",
      facilities: [
        "24 hours running hot and cold water",
        "Free Wi-Fi",
        "TV with cable",
        "Telephone service",

        "Big sized rooms",
      ],
    },
    {
      name: "SAC Guest House",
      roomsCount: 8,
      loaction: "blah blah",
      facilities: [
        "24 hours running hot and cold water",
        "Free Wi-Fi",
        "TV with cable",
        "Telephone service",

        "Big sized rooms",
      ],
    },
    {
      name: "Mega Guest House",
      roomsCount: 12,
      loaction: "blah blah",
      facilities: [
        "24 hours running hot and cold water",
        "Free Wi-Fi",
        "TV with cable",
        "Telephone service",

        "Big sized rooms",
      ],
    },
  ];

  const [cardRotations, setCardRotations] = useState(
    Array(houses.length).fill(false)
  );

  const initialShowBackfaceState = new Array(houses.length).fill(false);
  const [showBackface, setShowBackface] = useState(initialShowBackfaceState);

  const rotateCard = (index) => {
    const newRotations = [...cardRotations];
    newRotations[index] = !newRotations[index];
    setCardRotations(newRotations);

    const newShowBackfaceState = [...showBackface];
    newShowBackfaceState[index] = !newShowBackfaceState[index];
    setShowBackface(newShowBackfaceState);
  };

  return (
    <>
      <HomeHeader />
      {/* <nav className="stickyNav">
        <a href="https://www.nitj.ac.in/" target="_blank">
          <img
            id="logoCollege"
            src="/Logo_of_NIT_Jalandhar.png"
            alt="logoCollege"
          />
        </a>
        <div className="navOptions">
          <Link
            to="Home"
            smooth={true}
            duration={50}
            className="navBarElements"
          >
            <img className="navSVGHome" src={houseSolid} alt="Home" />
            Home
          </Link>
          <Link
            to="AboutUs"
            smooth={true}
            duration={50}
            className="navBarElements"
          >
            <img className="navSVGAbout" src={infoSolid} alt="About" />
            About
          </Link>
          <Link
            to="guidelinesHeader"
            smooth={true}
            duration={50}
            className="navBarElements"
          >
            <img
              src={guidelinesSVG}
              alt="guidelines"
              className="navSVGGuidelines"
            />
            Guidelines
          </Link>
          <Link
            to="contactHeader"
            smooth={true}
            duration={100}
            className="navBarElements"
          >
            <img src={contactSVG} alt="contact" className="navSVGContact" />
            Contact Us
          </Link>
          <Link
            to="Facility"
            smooth={true}
            duration={50}
            className="navBarElements"
          >
            <img src={gallery} alt="gallery" className="navSVGGallery" />
            Facility
          </Link>
          <Link
            to="Availability"
            smooth={true}
            duration={100}
            className="navBarElements"
          >
            <img
              src={availability}
              alt="availability"
              className="navSVGAvailability"
            />
            Availability
          </Link>

          <NavLink to ="/Dashboard">
          <span className="navBarElements" id="BookNow">
            Book Now
          </span>
          </NavLink>
        </div>
      </nav> */}

      <div className="backgroundImage" >
        <div className="description">
          <h1 id="Welcome">
            Dr. B R Ambedkar National Institute of Technology Jalandhar <br /> Guest Room Booking System
          </h1>
        </div>
      
      </div>



      <div className="cardsSection" id="Facility">
        <div id="hostelCards">
          {houses.map((house, index) => (
            <div
              className={`hostelCard ${showBackface[index] ? "rotate" : ""}`}
              key={index}
              onClick={() => rotateCard(index)}
            >
              {!showBackface[index] && (
                <React.Fragment>
                  <img
                    src={houseSVG}
                    alt="GuestHouse"
                    className="guestHouseSVG"
                  />
                  <div className="cardContent">
                    <p className="houseName" >{house.name}</p>
                    <p className="roomCount">{house.roomsCount} Deluxe Rooms</p>
                  </div>
                </React.Fragment>
              )}
              {showBackface[index] && (
                <div className="houseCardBackface">
                  <h1 className="headerBackface">{house.name}</h1>
                  <h2 className="backFacehouseCardLoc">{house.location}</h2>
                  <ul className="facilitiesList">
                    {house.facilities.map((facility, index) => (
                      <li key={index}>{facility}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="aboutSection" id="AboutUs">
        <h1 className="aboutUs">About Us</h1>
        <p className="aboutUsPara" style ={{textAlign: 'justify'}}>
          NIT Jalandhar strongly believes in the old Indian adage "Athithi Devo
          Bhava". We give our visitors the best facilities be it in terms of
          service, ambience or food. It is common practice in Indian institutes
          to create on-campus guest houses to host official guests. NIT
          Jalandhar has created a guest house to meet its needs. The campus has
          three guest houses to accommodate the guests and delegates who visit
          the campus, the Guest House 1 with 15 Delux rooms, the Guest House 2
          with 15 Deluxe Rooms and the Guest House 3 with 28 Standard rooms, all
          rooms are air conditioned. The rooms have double beds and other
          amenities. The Guest House 1 also provides a meeting room.
        </p>
        <div className="facilitiesHolder">
          <div id="content1">
            <h2>Deluxe Room Facilities</h2>
            <ul className="listItem">
              <li>24 hours running hot and cold water</li>
              <li>Free Wi-Fi</li>
              <li>TV with cable</li>
              <li>Telephone service</li>
              {/* <li>Laundry service</li> */}
              <li>Big sized rooms</li>
              <li>Tea making(in Room) facilities.</li>
            </ul>
          </div>
          {/* <div id="content2">
            <h2>Standard Room Facilities</h2>
            <ul className="listItem">
              <li>24 hours running hot and cold water</li>
              <li>Free Wi-Fi</li>
              <li>TV with cable</li>
              <li>Telephone service</li>
              <li>Laundry service</li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="guidelinesDiv">
        <h1 id="guidelinesHeader">Guidelines</h1>
        <div className="guidelinesList">
          <ul>
            <li>
              <b>Check-in Time: 12:00 PM</b>
            </li>
            <li>
              <b>Check-out time: 11:00 AM</b>
            </li>
            <li>
              Maximum booking period is seven days. For extension, please seek
              the approval from Registrar/ Coordinator Guest House.
            </li>
            <li>
              Person who has booked the guest room has to collect the key on the
              first day of booking period; otherwise booking will be
              automatically cancelled for subsequent days.
            </li>
            <li>
              NIT Jalandhar guests are kindly requested to observe the rules, so
              that their stay will be comfortable and safe.
            </li>
            <li>Consuming Alcohol is prohibited in the Guest House.</li>
            <li>
              The booking will stand automatically canceled if this
              accommodation is needed by the institute for emergent official
              purpose.
            </li>
            <li>
              Alumni can book rooms in NIT guest house for themselves and their
              immediate family members i.e. parents and children but not for
              their other relatives, friends, or colleagues.
            </li>
            <li>
              <b>Payment Detail:</b> Payment for guest room service should be
              made at Institute Account.
            </li>
          </ul>
        </div>
      </div>

      <div className="availabilitySection">
        <h1 id="availabilityHeader">Room Availability</h1>
        <Calendar />
      </div>
      <div className="contactUsDiv">
        <h1 id="contactHeader">Contact</h1>
      </div>
      <Footer />
    </>
  );
}

export default Login;
