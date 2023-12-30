import React, { useState, useEffect } from "react";
import "./Calendar.css";
import RoomDetailsModalAC from "./Modal";
import RoomDetailsNonAc from "./modalNonAc";
import "./ModalAC.css";
import "./modalNonac.css";

const Calendar = () => {
  const [pagecount, setPageCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currDate, setCurrDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomDetails, setRoomDetails] = useState([]);
  const [modalACCount, setModalACCount] = useState(null);
  const [isModalOpenNonAc, setIsModalOpenNonAc] = useState(false);
  const [modalnonACCount1, setModalnonACCount1] = useState(null);
  const [modalnonACCount2, setModalnonACCount2] = useState(null);
  const [displayedMonth, setDisplayedMonth] = useState(new Date());

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await fetch("http://localhost:3000/calendar");
        const data = await response.json();

        const filteredData = data.filter((detail) => {
          const detailDate = new Date(detail.date);
          return (
            detailDate.getMonth() === displayedMonth.getMonth() &&
            detailDate.getFullYear() === displayedMonth.getFullYear()
          );
        });
        setRoomDetails(filteredData);
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    };

    fetchRoomDetails();
  }, [displayedMonth]);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = () => {
    const year = displayedMonth.getFullYear();
    const month = displayedMonth.getMonth();
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
      displayedMonth.getFullYear() === today.getFullYear() &&
      displayedMonth.getMonth() === today.getMonth()
    );
  };

  const nextMonth = () => {
    setDisplayedMonth((prevMonth) => {
      const nextMonthDate = new Date(
        prevMonth.getFullYear(),
        prevMonth.getMonth() + 1
      );

      setPageCount((page) => page + 1);
      return nextMonthDate;
    });
  };

  const prevMonth = () => {
    setDisplayedMonth((prevMonth) => {
      const prevMonthDate = new Date(
        prevMonth.getFullYear(),
        prevMonth.getMonth() - 1
      );

      return prevMonthDate;
    });
  };

  const handleACClick = (day, acCount) => {
    if (day !== null) {
      setSelectedDate(day);
      setIsModalOpen(true);
      setModalACCount(acCount);
    }
  };

  const handlenonACClick = (day, nonacCount1, nonacCount2) => {
    if (day !== null) {
      setSelectedDate(day);
      setIsModalOpenNonAc(true);
      setModalnonACCount1(nonacCount1);
      setModalnonACCount2(nonacCount2);
    }
  };

  const renderCalendarRows = () => {
    const calendarData = getDaysInMonth();
    const rows = [];
    const today = new Date();
    const currentYear = displayedMonth.getFullYear();
    const currentMonth = displayedMonth.getMonth() + 1;
    const currentDay = displayedMonth.getDate();

    for (let i = 0; i < calendarData.length; i += 7) {
      const row = calendarData.slice(i, i + 7);
      rows.push(
        <tr key={i}>
          {row.map((day, index) => {
            if (day === null || (isCurrentMonth() && day < today.getDate())) {
              return (
                <td key={index} className="calendar-cell empty-cell">
                  {day}
                </td>
              );
            }

            const formattedDate = `${currentYear}-${
              currentMonth < 10 ? "0" : ""
            }${currentMonth}-${day < 10 ? "0" : ""}${day}T00:00:00.000Z`;

            console.log(formattedDate);

            const roomDetail = roomDetails.find((detail) => {
              return detail.date === formattedDate;
            });

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
              nonAcCCCCount1 = 0;
              nonAcCCCCount2 = 0;
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
          onClick={() => prevMonth()}
        >
          Previous Month
        </div>
        <h2 className="month-year">
          {displayedMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <div className="btn" onClick={() => nextMonth()}>
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
