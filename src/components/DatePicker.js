import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './DatePicker.css'
import { forwardRef } from "react";

export default function ReactDatePicker({ dueDate, onDatePick }) {
    const [startDate, setStartDate] = useState(null);
    const [calendarIsOpen, setCalendarIsOpen] = useState(false);
    const DateInput = forwardRef(({ value }, ref) => (
        <button className="date-input" onClick={() => { setCalendarIsOpen(true) }} ref={ref}>
            <CalendarMonthIcon id="calendar-icon" />
            {startDate !== null && <div className="date-input-text">{value}</div>}
        </button>
    ));
    return (
        <DatePicker selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<DateInput />}
            open={calendarIsOpen}
            onSelect={() => { setCalendarIsOpen(false) }}
            onClickOutside={() => { setCalendarIsOpen(false) }}

            popperModifiers={[
                {
                    name: "offset",
                    options: {
                        offset: [-5, -4],
                    },
                },
                {
                    name: "preventOverflow",
                    options: {
                        rootBoundary: "viewport",
                        tether: false,
                        altAxis: true,
                    },
                },
            ]}
        >
            <div>
                <button className="remove-date-button" onClick={() => {
                    setStartDate(null);
                    setCalendarIsOpen(false);

                }}>
                    <DeleteOutlineIcon className="remove-date-icon"></DeleteOutlineIcon>
                    No due date
                </button>
            </div>
        </DatePicker >
    );
};