import React, { useState } from "react";
import "./Calendar.css";
import RoomDetailsModal from "./Modal";
import "./Modal.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("ismodal", isModalOpen);
  const roomDetails = [
    {
      guestHouseName: "Main Guest House",
      acCount: 15,
      nonACCount: 9,
      location: "Near Girls Hostel",
      numOfBeds: 1,
    },
    {
      guestHouseName: "MBH Guest House",
      acCount: 20,
      nonACCount: 9,
      location: "Near Girls Hostel",
      numOfBeds: 1,
    },
    {
      guestHouseName: "Snackers",
      acCount: 20,
      nonACCount: 8,
      location: "Near Girls Hostel",
      numOfBeds: 1,
    },
  ];

  const calculateRoomCounts = (roomDetails) => {
    let acSum = 0;
    let nonACSum = 0;

    for (const room of roomDetails) {
      acSum += room.acCount;
      nonACSum += room.nonACCount;
    }

    return { acCount: acSum, nonACCount: nonACSum };
  };

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
  };

  const handleDateClick = (day) => {
    if (day !== null) {
      setSelectedDate(day);
      setIsModalOpen(true);
      console.log("ismodal", isModalOpen);
    }
  };

  const renderCalendarRows = () => {
    const calendarData = getDaysInMonth();
    const rows = [];
    const today = new Date().getDate();

    for (let i = 0; i < calendarData.length; i += 7) {
      const row = calendarData.slice(i, i + 7);
      rows.push(
        <tr key={i}>
          {row.map((day, index) => {
            if (day === null || (isCurrentMonth() && day < today)) {
              return (
                <td key={index} className="calendar-cell empty-cell">
                  {}
                </td>
              );
            }

            const roomCounts = calculateRoomCounts(roomDetails);

            return (
              <td
                key={index}
                className={`calendar-cell ${
                  day === today && isCurrentMonth() ? "current-day" : ""
                }`}
                onClick={() => handleDateClick(day)}
              >
                <div
                  className="div-td"
                  id={
                    day
                      ? day.toLocaleString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                      : ""
                  }
                >
                  {day !== null && (
                    <>
                      <h3 className="curdate-calendar">{day}</h3>
                      <span className="acCount">AC : {roomCounts.acCount}</span>
                      <span className="nonCount">
                        Non-AC : {roomCounts.nonACCount}
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

      <RoomDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        roomDetails={roomDetails}
      />
    </div>
  );
};

export default Calendar;
