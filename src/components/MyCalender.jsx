import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events, onSelectSlot }) => {
  return (
    <div className="h-screen p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={onSelectSlot}
        selectable
        views={['month', 'week', 'day', 'agenda']}
        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
      />
    </div>
  );
};

export default MyCalendar;