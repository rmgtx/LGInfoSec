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
    <main className="min-h-screen bg-mend-neutral-50">
      <Header />
      <HeroBanner />
      <div className="max-w-container mx-auto container-spacing py-8">
        <MissionCard />
        <IncidentReportButton />
        <NavigationColumns />
        <DocumentLibrary />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <EventCalendar />
          <NewsFeed />
        </div>
      </div>
    </main>
  );
}

