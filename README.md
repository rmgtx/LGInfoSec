# Mend InfoSec Portal

An internal Information Security Portal built with Next.js and React, designed to centralize employee access to security incident reporting, InfoSec & IT request forms, security policies, and awareness training.

## Features

- 🚨 **Security Incident Reporting** - Quick and easy incident reporting with form validation
- 📋 **Request Forms** - Access to InfoSec processes, employee management, and IT requests
- 📚 **Policy Library** - Centralized documentation with category filtering
- 📅 **Training Calendar** - Interactive calendar showing security training events
- 📰 **Security Awareness Feed** - Latest security news and updates

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form
- **Calendar**: FullCalendar React
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
LGInfoSec/
├── app/
│   ├── api/
│   │   └── report/
│   │       └── route.ts          # API endpoint for incident reports
│   ├── request/
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic request form pages
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main landing page
├── components/
│   ├── DocumentLibrary.tsx       # Policies & documentation section
│   ├── EventCalendar.tsx         # Training calendar component
│   ├── Header.tsx                # Site header with navigation
│   ├── HeroBanner.tsx            # Hero section
│   ├── IncidentReportButton.tsx  # Report incident button
│   ├── IncidentReportModal.tsx   # Incident reporting form modal
│   ├── MissionCard.tsx           # Welcome & mission section
│   ├── NavigationColumns.tsx     # Three-column navigation
│   └── NewsFeed.tsx              # Security awareness feed
├── data/
│   ├── documents.json            # Mock policy documents
│   ├── events.json               # Mock calendar events
│   └── news.json                 # Mock news feed data
└── package.json
```

## Features in Detail

### Security Incident Reporting
- Modal-based form with validation
- Fields: Name, Email, Department, Incident Type, Description, Attachment
- Submits to `/api/report` endpoint
- Stores reports in `data/reports.json` (prototype)

### Navigation Sections
Three main categories:
1. **InfoSec Processes**: App approval, vendor risk, SFTP access, breach response
2. **Employee Management**: Onboarding/offboarding, system access, job title changes
3. **IT Requests**: Computer unlock, password reset, VPN setup, hardware requests

### Policy Library
- Filterable by category (Policies, Standards, External Documentation)
- Displays document title, category, and last updated date
- Mock data structure ready for SharePoint integration

### Event Calendar
- FullCalendar integration with month view
- Click events to view details
- Color-coded by event category

### Security Awareness Feed
- Displays latest security news articles
- Shows source, publication date, and summary
- Ready for RSS/API integration

## Development

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Phase 1 Deliverables ✅

- [x] Landing page with header, mission, and 3-column layout
- [x] Incident report form with mock submission
- [x] All request links route to placeholder pages
- [x] Calendar loads from static JSON
- [x] News feed renders articles from mock data
- [x] Responsive layout for desktop and mobile

## Future Enhancements (Phase 2+)

- Dynamic SharePoint or API integration
- Authentication + role-based views
- Request status dashboard
- Search and filtering for documents
- Notifications and chat support
- Analytics dashboard (incident counts, request metrics)

## License

Internal use only - Mend Information Security
