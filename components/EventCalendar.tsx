"use client";

import { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import eventsData from "@/data/events.json";

interface CalendarEvent {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  category: string;
}

export default function EventCalendar() {
  const calendarRef = useRef<FullCalendar>(null);

  const calendarEvents = eventsData.map((event: CalendarEvent) => ({
    id: event.id.toString(),
    title: event.title,
    start: event.startDate,
    end: event.endDate,
    className: `event-category-${event.category.toLowerCase().replace(/\s+/g, "-")}`,
  }));

  return (
    <section 
      id="calendar" 
      className="card"
      aria-labelledby="calendar-heading"
    >
      <div className="card-header">
        <h2 id="calendar-heading" className="card-title" style={{ margin: 0 }}>Security Training Calendar</h2>
      </div>
      <div 
        className="calendar-container"
        role="application"
        aria-label="Security Training Calendar"
      >
        <div aria-live="polite" aria-atomic="true" className="sr-only" id="calendar-announcement"></div>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={calendarEvents}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth",
          }}
          height="auto"
          eventClick={(info) => {
            const event = eventsData.find((e) => e.id.toString() === info.event.id);
            if (event) {
              alert(`${event.title}\n${event.category}\n${event.startDate} - ${event.endDate}`);
            }
          }}
          viewDidMount={(view) => {
            const announcement = document.getElementById('calendar-announcement');
            if (announcement && calendarRef.current) {
              const calendarApi = calendarRef.current.getApi();
              const currentView = calendarApi.view;
              announcement.textContent = `Viewing ${currentView.title}`;
            }
          }}
        />
      </div>
      <style jsx global>{`
        .fc {
          font-family: var(--font-sans);
          font-size: var(--font-size-base);
        }
        .fc-header-toolbar {
          margin-bottom: var(--spacing-lg);
          flex-wrap: wrap;
          gap: var(--spacing-sm);
        }
        .fc-toolbar-title {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-bold);
          color: var(--color-text);
        }
        .fc-col-header-cell {
          padding: var(--spacing-sm);
          background-color: var(--color-bg);
          border-color: var(--color-border);
          font-weight: var(--font-weight-medium);
          color: var(--color-text);
          font-size: var(--font-size-sm);
        }
        .fc-daygrid-day {
          border-color: var(--color-border);
        }
        .fc-daygrid-day-number {
          padding: var(--spacing-xs);
          color: var(--color-text);
          font-size: var(--font-size-sm);
        }
        .fc-day-today {
          background-color: rgba(10, 132, 255, 0.05);
        }
        .fc-event {
          cursor: pointer;
          border-radius: var(--radius-sm);
          outline: none;
          border: none;
          padding: 2px 6px;
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
        }
        .fc-event:focus {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }
        .event-category-training {
          background-color: rgba(10, 132, 255, 0.15);
          color: var(--color-primary);
        }
        .event-category-workshop {
          background-color: rgba(0, 200, 150, 0.15);
          color: var(--color-accent);
        }
        .event-category-webinar {
          background-color: rgba(245, 158, 11, 0.15);
          color: var(--color-warning);
        }
        .fc-button {
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          background-color: var(--color-bg-alt);
          color: var(--color-text);
          font-weight: var(--font-weight-medium);
          padding: var(--spacing-sm) var(--spacing-md);
          font-size: var(--font-size-sm);
          transition: background-color var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
        }
        .fc-button:hover {
          background-color: var(--color-bg);
          border-color: var(--color-primary);
          color: var(--color-primary);
          transform: translateY(var(--hover-lift-small));
        }
        .fc-button-primary {
          background-color: var(--color-primary);
          border-color: var(--color-primary);
          color: white;
          transition: background-color var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
        }
        .fc-button-primary:hover {
          background-color: var(--color-primary-hover);
          border-color: var(--color-primary-hover);
          color: white;
          transform: translateY(var(--hover-lift-small));
        }
        .fc-button:focus {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }
        .fc-button:not(:disabled):active,
        .fc-button:not(:disabled).fc-button-active {
          background-color: var(--color-primary);
          border-color: var(--color-primary);
          color: white;
        }
        .fc-today-button {
          text-transform: capitalize;
        }
        .fc-prev-button,
        .fc-next-button {
          font-size: 0;
        }
        .fc-prev-button::before {
          content: "Previous month";
          font-size: var(--font-size-base);
        }
        .fc-next-button::before {
          content: "Next month";
          font-size: var(--font-size-base);
        }
        .fc-daygrid-event {
          margin: 2px 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .fc-event,
          .fc-button,
          .fc-button-primary {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

