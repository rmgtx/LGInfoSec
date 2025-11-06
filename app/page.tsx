import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import MissionCard from "@/components/MissionCard";
import NavigationColumns from "@/components/NavigationColumns";
import DocumentLibrary from "@/components/DocumentLibrary";
import EventCalendar from "@/components/EventCalendar";
import NewsFeed from "@/components/NewsFeed";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <main
        id="main-content"
        style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)" }}
        role="main"
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "var(--spacing-xl)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--section-gap)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <MissionCard />
          <NavigationColumns />
          <DocumentLibrary />
          <EventCalendar />
          <NewsFeed />
        </div>
      </main>
    </>
  );
}
