import React, { useState } from "react";
import "./Calendar.css";
import RoomDetailsModal from "./Modal";
import "./Modal.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roomDetails = [
    {
      date: "12-11-2023",
      acBooked: 10,
      nonAcBooked: 4,
    },
    {
      date: "15-11-2023",
      acBooked: 4,
      nonAcBooked: 2,
    },
    {
      date: "13-11-2023",
      acBooked: 1,
      nonAcBooked: 1,
    },
  ];

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
                  <div className="div-td">
                    <h3 className="curdate-calendar">{day}</h3>
                  </div>
                </td>
              );
            }

            const formattedDate = `${day < 10 ? "0" : ""}${day}-${
              currentMonth < 10 ? "0" : ""
            }${currentMonth}-${currentYear}`;

            const roomDetail = roomDetails.find(
              (detail) => detail.date === formattedDate
            );
            const isBooked = roomDetail !== undefined;

            let acCount, nonAcCount;

            if (isBooked) {
              acCount = 15 - roomDetail.acBooked;
              nonAcCount = 8 - roomDetail.nonAcBooked;
            } else {
              acCount = 15;
              nonAcCount = 8;
            }

            return (
              <td
                key={index}
                id={formattedDate}
                className={`calendar-cell ${
                  day === currentDay && isCurrentMonth() ? "current-day" : ""
                } ${isBooked ? "calendar-cell-booked" : ""}`}
                onClick={() => handleDateClick(day)}
              >
                <div className="div-td">
                  {day !== null && (
                    <>
                      <h3 className="curdate-calendar">{day}</h3>
                      <span className="acCount">AC : {acCount}</span>
                      <span className="nonCount">Non-AC : {nonAcCount}</span>
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
