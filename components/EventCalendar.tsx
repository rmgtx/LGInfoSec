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
    <section id="calendar" className="card" aria-labelledby="calendar-heading">
      <div className="card-header">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "var(--spacing-md)",
          }}
        >
          <div>
            <h2
              id="calendar-heading"
              className="card-title"
              style={{ margin: 0 }}
            >
              Security Training Calendar
            </h2>
            <p
              className="card-subtitle"
              style={{ marginTop: "var(--spacing-xs)" }}
            >
              View upcoming training sessions and security events
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "var(--spacing-sm)",
              alignItems: "center",
            }}
          >
            <button
              className="btn btn-outline"
              style={{
                fontSize: "var(--font-size-sm)",
                padding: "var(--spacing-sm) var(--spacing-md)",
                minHeight: "36px",
              }}
              aria-label="Refresh calendar"
              title="Feed integration coming soon"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "18px" }}
                aria-hidden="true"
              >
                refresh
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="calendar-container"
        role="application"
        aria-label="Security Training Calendar"
      >
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
          id="calendar-announcement"
        ></div>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={calendarEvents}
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "today",
          }}
          buttonText={{
            today: "Today",
          }}
          height="auto"
          eventClick={(info) => {
            const event = eventsData.find(
              (e) => e.id.toString() === info.event.id
            );
            if (event) {
              alert(
                `${event.title}\n${event.category}\n${event.startDate} - ${event.endDate}`
              );
            }
          }}
          viewDidMount={(view) => {
            const announcement = document.getElementById(
              "calendar-announcement"
            );
            if (announcement && calendarRef.current) {
              const calendarApi = calendarRef.current.getApi();
              const currentView = calendarApi.view;
              announcement.textContent = `Viewing ${currentView.title}`;
            }
          }}
        />
      </div>

      {/* Feed Integration Placeholder */}
      <div
        style={{
          marginTop: "var(--spacing-xl)",
          paddingTop: "var(--spacing-lg)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-md)",
            marginBottom: "var(--spacing-md)",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: "20px",
              color: "var(--color-text-secondary)",
            }}
            aria-hidden="true"
          >
            rss_feed
          </span>
          <h3
            style={{
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--color-text)",
              margin: 0,
            }}
          >
            Feed Integration
          </h3>
        </div>
        <div
          style={{
            padding: "var(--spacing-lg)",
            backgroundColor: "var(--color-bg)",
            borderRadius: "var(--radius-md)",
            border: "1px dashed var(--color-border)",
            textAlign: "center",
          }}
        >
          <p
            className="text-muted"
            style={{
              margin: 0,
              fontSize: "var(--font-size-sm)",
            }}
          >
            Feed integration coming soon. This section will display security
            alerts and updates from external sources.
          </p>
        </div>
      </div>

      <style jsx global>{`
        .fc {
          font-family: var(--font-sans);
          font-size: var(--font-size-base);
        }

        /* Header Toolbar - Clean, consistent layout */
        .fc-header-toolbar {
          margin-bottom: var(--spacing-lg);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }

        .fc-toolbar-chunk {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .fc-toolbar-chunk:first-child {
          order: 1;
        }

        .fc-toolbar-chunk:nth-child(2) {
          order: 2;
          flex: 1;
          justify-content: center;
          min-width: 200px;
        }

        .fc-toolbar-chunk:last-child {
          order: 3;
        }

        /* Month/Year Title - Prominent and clear */
        .fc-toolbar-title {
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-semibold);
          color: var(--color-text);
          margin: 0;
          line-height: var(--line-height-tight);
        }

        /* Navigation Buttons - WCAG AA compliant with proper contrast */
        .fc-button {
          border-radius: var(--radius-sm);
          border: 2px solid var(--color-primary);
          background-color: transparent;
          color: var(--color-primary);
          font-weight: var(--font-weight-semibold);
          padding: var(--spacing-sm) var(--spacing-md);
          font-size: var(--font-size-sm);
          min-height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition:
            background-color var(--transition-medium),
            border-color var(--transition-medium),
            color var(--transition-medium),
            box-shadow var(--transition-medium),
            transform var(--transition-medium);
          cursor: pointer;
        }

        .fc-button:hover:not(:disabled) {
          background-color: var(--color-primary);
          border-color: var(--color-primary);
          color: #ffffff;
          box-shadow: var(--shadow-sm);
          transform: translateY(var(--hover-lift-small));
        }

        .fc-button:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }

        .fc-button:active:not(:disabled) {
          transform: translateY(0);
          box-shadow: var(--shadow-sm);
        }

        .fc-button:disabled {
          border-color: var(--color-border);
          color: var(--color-text-secondary);
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Today button - same style as others */
        .fc-today-button {
          text-transform: capitalize;
          border: 2px solid var(--color-primary);
          background-color: transparent;
          color: var(--color-primary);
        }

        .fc-today-button:hover:not(:disabled) {
          background-color: var(--color-primary);
          border-color: var(--color-primary);
          color: #ffffff;
        }

        /* Previous/Next buttons - just blue arrows, no background or border */
        .fc-prev-button,
        .fc-next-button {
          padding: var(--spacing-sm) var(--spacing-md);
          min-width: 36px;
          font-size: 0; /* Hide any text */
          border: none !important;
          background-color: transparent !important;
          background: transparent !important;
          box-shadow: none !important;
        }

        .fc-prev-button:hover:not(:disabled),
        .fc-next-button:hover:not(:disabled) {
          background-color: transparent !important;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }

        .fc-prev-button:focus,
        .fc-next-button:focus {
          background-color: transparent !important;
          background: transparent !important;
        }

        .fc-prev-button .fc-icon,
        .fc-next-button .fc-icon {
          font-size: var(--font-size-base);
          color: var(--color-primary);
          transition: color var(--transition-medium);
        }

        .fc-prev-button:hover:not(:disabled) .fc-icon,
        .fc-next-button:hover:not(:disabled) .fc-icon {
          color: var(--color-primary-hover);
        }

        .fc-prev-button:disabled .fc-icon,
        .fc-next-button:disabled .fc-icon {
          color: var(--color-text-secondary);
        }

        /* Ensure icons are visible and properly sized */
        .fc-prev-button .fc-icon-chevron-left::before,
        .fc-next-button .fc-icon-chevron-right::before {
          font-size: var(--font-size-base);
        }

        /* Column Headers - Day names */
        .fc-col-header-cell {
          padding: var(--spacing-md);
          background-color: var(--color-bg);
          border-color: var(--color-border);
          font-weight: var(--font-weight-semibold);
          color: var(--color-text);
          font-size: var(--font-size-sm);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Day Cells */
        .fc-daygrid-day {
          border-color: var(--color-border);
          background-color: var(--color-bg-alt);
          min-height: 100px;
          transition: background-color var(--transition-fast);
        }

        .fc-daygrid-day:hover {
          background-color: rgba(10, 132, 255, 0.03);
        }

        .fc-daygrid-day-number {
          padding: var(--spacing-sm);
          color: var(--color-text);
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
        }

        /* Empty day cells */
        .fc-day-other .fc-daygrid-day {
          background-color: var(--color-bg);
          opacity: 0.5;
        }

        /* Today Highlight - More prominent */
        .fc-day-today {
          background-color: rgba(10, 132, 255, 0.1);
          border: 2px solid var(--color-primary);
          border-radius: var(--radius-sm);
        }

        .fc-day-today .fc-daygrid-day-number {
          color: var(--color-primary);
          font-weight: var(--font-weight-semibold);
        }

        /* Events */
        .fc-event {
          cursor: pointer;
          border-radius: var(--radius-sm);
          outline: none;
          border: none;
          padding: var(--spacing-xs) var(--spacing-sm);
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          line-height: 1.4;
          margin: 2px 0;
          transition:
            transform var(--transition-fast),
            box-shadow var(--transition-fast),
            opacity var(--transition-fast);
        }

        .fc-event:hover {
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
          opacity: 0.9;
        }

        .fc-event:focus {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }

        /* Event Category Colors - WCAG AA compliant with proper contrast */
        .event-category-training {
          background-color: #0a84ff;
          color: #ffffff;
          border-left: 3px solid #006ee6;
        }

        .event-category-workshop {
          background-color: #00c896;
          color: #ffffff;
          border-left: 3px solid #00b584;
        }

        .event-category-webinar {
          background-color: #f59e0b;
          color: #ffffff;
          border-left: 3px solid #d97706;
        }

        .fc-daygrid-event {
          margin: 2px 0;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .fc-header-toolbar {
            flex-direction: column;
            align-items: stretch;
          }

          .fc-toolbar-chunk {
            justify-content: center;
          }

          .fc-toolbar-chunk:nth-child(2) {
            order: 1;
            margin-bottom: var(--spacing-md);
          }

          .fc-toolbar-chunk:first-child {
            order: 2;
          }

          .fc-toolbar-chunk:last-child {
            order: 3;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .fc-event,
          .fc-button {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
