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
    <div id="calendar" className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Training Calendar</h2>
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
        }
        .event-category-training {
          background-color: #3b82f6;
          border-color: #2563eb;
        }
        .event-category-workshop {
          background-color: #10b981;
          border-color: #059669;
        }
        .event-category-webinar {
          background-color: #f59e0b;
          border-color: #d97706;
        }
      `}</style>
    </div>
  );
}

