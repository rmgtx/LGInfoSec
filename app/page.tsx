import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import MissionCard from "@/components/MissionCard";
import IncidentReportButton from "@/components/IncidentReportButton";
import NavigationColumns from "@/components/NavigationColumns";
import DocumentLibrary from "@/components/DocumentLibrary";
import EventCalendar from "@/components/EventCalendar";
import NewsFeed from "@/components/NewsFeed";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <main id="main-content" style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)" }} role="main">
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "var(--spacing-xl)" }}>
          <MissionCard />
          <IncidentReportButton />
          <NavigationColumns />
          <DocumentLibrary />
          <div 
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ 
              gap: "var(--spacing-xl)",
              marginTop: "var(--spacing-xl)"
            }}
          >
            <EventCalendar />
            <NewsFeed />
          </div>
        </div>
      </main>
    </>
  );
}

