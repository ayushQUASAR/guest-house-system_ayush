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
import Contact from "./Components/Contact";
import EmbeddedMap from './Components/EmbeddedMap';
import ImageGallery from "./Components/ImageGallery";
function Login() {
  const houses = [
    {
      name: "Institute Guest House ",
      roomsCount: 10,
      location: "Near Director's Bungalow",
      facilities: [
        "Free Wi-Fi access throughout the premises",
        "Cable TV provided",
        "In-room telephone services",
        "Facilities for making tea in rooms",
        "Complimentary toiletries provided",
        "Daily housekeeping services to ensure cleanliness and comfort",
        "On-site parking for guests",
        "Access to a fitness center facilities"
      ],
    },
    {
      name: "SAC Guest House",
      roomsCount: 8,
      location: "Student Activities Center",
      facilities: [
        "Free Wi-Fi access throughout the premises",
        "Cable TV provided",
        "In-room telephone services",
        "Facilities for making tea in rooms",
        "Complimentary toiletries provided",
        "Daily housekeeping services to ensure cleanliness and comfort",
        "On-site parking for guests",
        "Access to a fitness center facilities"
      ],
    },
    {
      name: "Mega Guest House",
      roomsCount: 12,
      location: "Near Mega Boys Hostel",
      facilities: [
        "Free Wi-Fi access throughout the premises",
        "Cable TV provided",
        "In-room telephone services",
        "Facilities for making tea in rooms",
        "Complimentary toiletries provided",
        "Daily housekeeping services to ensure cleanliness and comfort",
        "On-site parking for guests",
        "Access to a fitness center facilities"
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

    <div> <HomeHeader />
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
            <br />
            Welcome to <br />Dr. B R Ambedkar <br /> National Institute of Technology Jalandhar <br />Guest Room Booking System
          </h1>
        </div>

      </div>




      {/* <div className="cardsSection" id="Facility">
        <div id="hostelCards"> */}
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
                    <p className="roomCount">{house.roomsCount} Standard Rooms</p>
                  </div>
                </React.Fragment>
              )}
              {showBackface[index] && (
                <div className="houseCardBackface">
                  <h1 className="headerBackface">{house.name}</h1>
                  <h2 className="backFacehouseCardLoc" style={{ fontSize: '1.2rem', textAlign: 'center', paddingBottom: '1rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"> <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" /></svg>
                    <span className="mx-2">{house.location}</span></h2>
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
        <h1 className="aboutUs"><strong>About Us</strong></h1>
        <p className="aboutUsPara" style={{ textAlign: 'justify', justifyContent: 'center' }}>
          At NIT Jalandhar, we follow  the Indian ethos of "Athithi Devo Bhava" which means treating guests with great respect. We make sure our guests have the best experience, from good service to a nice setting and great food. Like many Indian Institutions, we have built guest houses on our campus for visitors. We have three guest houses namely Institute Guest House, SAC Guest House, and Mega Guest House. Institute Guest House has 10 standard rooms, SAC Guest House also has 8 standard rooms, and Mega Guest House has 12 standard rooms. All the rooms have air conditioning, double beds, and other comforts. The available facilities are as follows:
        </p>
        {/* <h2 id="delxroom">Standard Room Facilities</h2> */}
        <div className="facilitiesHolder">

          <div id="content1">

            <ul className="listItem">
              <li>24/7 availability of hot and cold water</li>
              <li>Free Wi-Fi access throughout the premises</li>
              <li>Cable TV provided</li>
              <li>In-room telephone services</li>
              <li>Facilities for making tea in rooms</li>
              <li>Complimentary toiletries provided</li>
              <li>Daily housekeeping services to ensure cleanliness and comfort</li>
              <li>On-site parking for guests</li>
              <li>24-hour front desk service for assistance and inquiries</li>
              <li>Room service for convenient dining in the comfort of your room</li>
              <li>Access to a fitness center facilities</li>
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
      <div className="guidelinesDiv" style={{
        backgroundColor: 'rgba(185, 194, 255, 0.225)'
      }}>
        <h1 id="guidelinesHeader"><strong>Guidelines</strong></h1>
        <div className="guidelinesList">
          <ul>
            <li>Check-in time is at <strong>12:00 PM</strong> and check-out time is at <strong>11:00 AM</strong>.</li>
            <li>Guests are welcome to book their stay up to 15 days prior to their arrival date.</li>
            <li>Bookings can be made for up to three days. Extensions require approval from the Registrar or Guest House Coordinator.</li>
            <li>The person who books must collect the room key on the first day of the booking. If not collected, the booking for subsequent days will be cancelled.</li>
            <li>Guests are requested to follow all rules for a comfortable and safe stay.</li>
            <li>Alcohol consumption is not allowed in the Guest House.</li>
            <li>The booking may be cancelled by the institute in case of urgent official needs.</li>
            <li>Alumni may book rooms for themselves and their immediate family (parents and children) only, not for other relatives, friends, or colleagues.</li>
            <li>The NITJ Institute Guest House provides a delightful breakfast, lunch, and dinner, available on payment. Please note, we exclusively offer vegetarian cuisine.</li>
            <li>The daily accommodation charges for the Institute Guest House are set at <strong>₹1000</strong> per room, while the SAC Guest House and Mega Guest House are charged at <strong>₹600</strong> per room.</li>
            <li><ul style={{ padding: '0px' }}><strong>Cancellation Charges:</strong>
              <li style={{ marginLeft: '32px' }}>A charge of 25% of the total rent will apply if the cancellation is made between seven and three days (7-3 days) before the date of arrival.</li>
              <li style={{ marginLeft: '32px' }}>A charge of 50% of the total rent will apply if the cancellation is made within 24 hours before the date of arrival.</li>
            </ul></li>
          </ul>
        </div>
      </div>

      <div className="availabilitySection" >
        <h1 id="availabilityHeader"><strong>Room Availability</strong></h1>
        <Calendar />
      </div>
      <div className="imageGallery" id="imageGallery">
        <h1 className="imageheader"><strong>Image Gallery</strong></h1>
        <ImageGallery />
      </div>

      <div style={{backgroundColor:""}}>
        <h1 id="contactHeader"><strong>Contact Us</strong></h1>
        <div style={{ textAlign: 'center', alignItems: 'center' }}>
          <EmbeddedMap />

        </div>

        <Contact /></div>
      <Footer />
    </div>
  );
}

export default Login;
