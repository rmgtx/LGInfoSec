import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser();

export async function GET() {
  try {
    // Use the actual redirect target URL
    const feedUrl = "https://www.armourcyber.io/rss/latest-public";
    const feed = await parser.parseURL(feedUrl);

    // Transform RSS feed items to our data model
    const items = feed.items.map((item, index) => {
      // Clean HTML from description if present
      const description = item.contentSnippet || item.content || "";
      const cleanDescription = description
        .replace(/<[^>]*>/g, "") // Remove HTML tags
        .replace(/\s+/g, " ") // Normalize whitespace
        .trim();

      return {
        id: item.guid || item.link || `item-${index}`,
        title: item.title || "Untitled Alert",
        description: cleanDescription,
        link: item.link || "",
        source: item.creator || feed.title || "CyberAlerts",
        category:
          (Array.isArray(item.categories) && item.categories[0]) ||
          (typeof item.categories === "string" && item.categories) ||
          "General",
        pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
        read: false, // Will be managed client-side
      };
    });

    return NextResponse.json({
      success: true,
      items,
      feedTitle: feed.title,
      feedDescription: feed.description,
    });
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch RSS feed",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
