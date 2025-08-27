"use client";
import type { CalEvent, IEvent } from "app-calendar";
import { Calendar, CalendarEvents } from "nexious-library";
import { calendarEvents } from "@data/demo/calendar.json";
import { useEffect, useState } from "react";

const AppBooking = () => {
  const [selectedDay, setSelectedDay] = useState<CalEvent>();
  const [calEvent, setEvent] = useState<IEvent[]>();
  const [active, setActive] = useState<IEvent>();

  useEffect(() => {
    if (selectedDay && selectedDay.date) {
      setActive(undefined);
      setEvent(selectedDay.list);
    } else setEvent(undefined);
  }, [selectedDay]);

  return (
    <section className="split-container">
      <Calendar
        title="Book with us"
        value={new Date()}
        onDayClick={(e: CalEvent) => setSelectedDay(e)}
        minDate={new Date()}
        minDetail="month"
        events={calendarEvents}
      />
      <CalendarEvents
        data={{
          events: calEvent,
          header: { title: selectedDay ? `Events on ${selectedDay.date}` : "Select a date" },
        }}
        selectedDay={selectedDay}
        onEventClick={(e: IEvent) => setActive(e)}
        event={active}
      />
    </section>
  );
};

export default AppBooking;
