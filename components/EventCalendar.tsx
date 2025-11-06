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
    <div id="calendar" className="card">
      <h2 className="text-2xl font-semibold text-mend-neutral-900 mb-6">Security Training Calendar</h2>
      <div className="calendar-container">
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
        />
      </div>
      <style jsx global>{`
        .fc-event {
          cursor: pointer;
          border-radius: 0.25rem;
        }
        .event-category-training {
          background-color: #3b82f6;
          border-color: #2563eb;
        }
        .event-category-workshop {
          background-color: #0ea5e9;
          border-color: #0284c7;
        }
        .event-category-webinar {
          background-color: #f59e0b;
          border-color: #d97706;
        }
        .fc-button-primary {
          background-color: #2563eb;
          border-color: #1e40af;
        }
        .fc-button-primary:hover {
          background-color: #1e40af;
          border-color: #1e3a8a;
        }
        .fc-button-primary:not(:disabled):active,
        .fc-button-primary:not(:disabled).fc-button-active {
          background-color: #1e3a8a;
          border-color: #1e3a8a;
        }
      `}</style>
    </div>
  );
}

