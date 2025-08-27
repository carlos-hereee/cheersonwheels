import type { CalEvent, IEvent } from "app-calendar";
import { Calendar, CalendarEvents } from "nexious-library";
import { calendarEvents } from "@data/demo/calendar.json";
import { useEffect, useState } from "react";

const AppBooking = () => {
  const [selectedDay, setSelectedDay] = useState<CalEvent | null>(null);
  const [calEvent, setEvent] = useState<IEvent[] | null>(null);
  const [active, setActive] = useState<IEvent | null>(null);

  useEffect(() => {
    if (selectedDay) {
      setActive(null);
      setEvent(selectedDay.list);
    } else setEvent(null);
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
