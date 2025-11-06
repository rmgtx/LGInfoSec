// Client-side RSS parser for GitHub Pages deployment
// Uses a CORS proxy to fetch RSS feeds that don't allow direct access

export interface RSSItem {
  id: string;
  title: string;
  description: string;
  link: string;
  source: string;
  category: string;
  pubDate: string;
  read: boolean;
}

export interface RSSFeedData {
  success: boolean;
  items: RSSItem[];
  feedTitle?: string;
  feedDescription?: string;
  error?: string;
  message?: string;
}

// CORS proxy service - you can replace this with your own or use a different one
const CORS_PROXY = "https://api.allorigins.win/raw?url=";

export async function fetchRSSFeed(feedUrl: string): Promise<RSSFeedData> {
  try {
    // Use CORS proxy to fetch RSS feed
    const proxyUrl = `${CORS_PROXY}${encodeURIComponent(feedUrl)}`;
    const response = await fetch(proxyUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    }

    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    // Check for parsing errors
    const parseError = xmlDoc.querySelector("parsererror");
    if (parseError) {
      throw new Error("Failed to parse RSS feed XML");
    }

    // Extract feed metadata
    const channel = xmlDoc.querySelector("channel");
    const feedTitle =
      channel?.querySelector("title")?.textContent || "CyberAlerts";
    const feedDescription =
      channel?.querySelector("description")?.textContent || "";

    // Extract items
    const items = Array.from(xmlDoc.querySelectorAll("item")).map(
      (item, index) => {
        const title =
          item.querySelector("title")?.textContent || "Untitled Alert";
        const description =
          item.querySelector("description")?.textContent || "";
        const link = item.querySelector("link")?.textContent || "";
        const pubDate =
          item.querySelector("pubDate")?.textContent ||
          new Date().toISOString();
        const category =
          item.querySelector("category")?.textContent || "General";
        const guid =
          item.querySelector("guid")?.textContent || link || `item-${index}`;

        // Clean HTML from description
        const cleanDescription = description
          .replace(/<[^>]*>/g, "") // Remove HTML tags
          .replace(/\s+/g, " ") // Normalize whitespace
          .trim();

        return {
          id: guid,
          title: title.trim(),
          description: cleanDescription,
          link: link.trim(),
          source: feedTitle,
          category: category.trim(),
          pubDate: pubDate,
          read: false,
        };
      }
    );

    return {
      success: true,
      items,
      feedTitle,
      feedDescription,
    };
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return {
      success: false,
      items: [],
      error: error instanceof Error ? error.message : "Unknown error",
      message: "Failed to fetch RSS feed",
    };
  }
}
