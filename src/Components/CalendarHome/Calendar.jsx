import React, { useState, useEffect } from "react";
import "./Calendar.css";
import RoomDetailsModalAC from "./Modal";
import RoomDetailsNonAc from "./modalNonAc";
import "./ModalAC.css";
import "./modalNonac.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [pagecount, setPageCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomDetails, setRoomDetails] = useState([]);
  const [modalACCount, setModalACCount] = useState(null);
  const [isModalOpenNonAc, setIsModalOpenNonAc] = useState(false);
  const [modalnonACCount1, setModalnonACCount1] = useState(null);
  const [modalnonACCount2, setModalnonACCount2] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await fetch("http://localhost:3000/calendar");
        const data = await response.json();
        setRoomDetails(data);
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    };

    fetchRoomDetails();
  }, []);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    const calendar = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
      calendar.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(day);
    }

    return calendar;
  };

  const isCurrentMonth = () => {
    const today = new Date();
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth()
    );
  };

  const prevMonth = () => {
    if (isCurrentMonth()) {
      return;
    }
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
    setPageCount((page) => {
      return page + 1;
    });
  };

  const handleACClick = (day, acCount) => {
    if (day !== null) {
      setSelectedDate(day);
      setIsModalOpen(true);
      setModalACCount(acCount);
      // console.log(modalACCount);
    }
  };
  const handlenonACClick = (day, nonacCount1, nonacCount2) => {
    if (day !== null) {
      setSelectedDate(day);
      setIsModalOpenNonAc(true);
      setModalnonACCount1(nonacCount1);
      setModalnonACCount2(nonacCount2);
      console.log(modalnonACCount2);
    }
  };

  const renderCalendarRows = () => {
    const calendarData = getDaysInMonth();
    const rows = [];
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    for (let i = 0; i < calendarData.length; i += 7) {
      const row = calendarData.slice(i, i + 7);
      rows.push(
        <tr key={i}>
          {row.map((day, index) => {
            if (day === null || (isCurrentMonth() && day < currentDay)) {
              return (
                <td key={index} className="calendar-cell empty-cell">
                  {day}
                </td>
              );
            }

            const formattedDate = `${currentYear}-${
              currentMonth < 10 ? "0" : ""
            }${currentMonth}-${day < 10 ? "0" : ""}${day}T00:00:00.000Z`;

            const roomDetail = roomDetails.find(
              (detail) => detail.date === formattedDate
            );
            const isBooked = roomDetail !== undefined;

            let acCount, nonAcCount;
            let nonAcCCCCount1, nonAcCCCCount2;
            if (isBooked) {
              acCount = 10 - roomDetail.acBooked;
              nonAcCount =
                20 - (roomDetail.nonAc1Booked + roomDetail.nonAc2Booked);
              nonAcCCCCount1 = roomDetail.nonAc1Booked;
              nonAcCCCCount2 = roomDetail.nonAc2Booked;
            } else {
              acCount = 10;
              nonAcCount = 20;
              nonAcCCCCount1 = 8;
              nonAcCCCCount2 = 12;
            }

            return (
              <td
                key={index}
                id={formattedDate}
                className={`calendar-cell ${
                  day === currentDay && isCurrentMonth() ? "current-day" : ""
                } ${
                  isBooked && day < currentDay && isCurrentMonth()
                    ? "calendar-cell-booked"
                    : ""
                }`}
              >
                <div className="div-td">
                  {day !== null && (
                    <>
                      <h3 className="curdate-calendar">{day}</h3>
                      <span
                        className="acCount"
                        onClick={() => handleACClick(day, acCount)}
                      >
                        AC : {acCount}
                      </span>
                      <span
                        className="nonCount"
                        onClick={() =>
                          handlenonACClick(day, nonAcCCCCount1, nonAcCCCCount2)
                        }
                      >
                        Non-AC : {nonAcCount}
                      </span>
                    </>
                  )}
                </div>
              </td>
            );
          })}
        </tr>
      );
    }

    return rows;
  };

  return (
    <div id="calendar-root">
      <div className="header">
        <div
          className={`btn ${isCurrentMonth() ? "disabled" : ""}`}
          onClick={prevMonth}
        >
          Previous Month
        </div>
        <h2 className="month-year">
          {date.toLocaleString("default", { month: "long", year: "numeric" })}
        </h2>
        <div className="btn" onClick={nextMonth}>
          Next Month
        </div>
      </div>
      <table className="calendar-table">
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day} className="day-of-week">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{renderCalendarRows()}</tbody>
      </table>

      <RoomDetailsModalAC
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        acCount={modalACCount}
      />
      <RoomDetailsNonAc
        isOpen={isModalOpenNonAc}
        onClose={() => setIsModalOpenNonAc(false)}
        nonAcCount1={modalnonACCount1}
        nonAcCount2={modalnonACCount2}
      />
    </div>
  );
};

export default Calendar;
