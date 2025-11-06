"use client";

import { useState, useEffect, useCallback } from "react";
import FeedItem from "./FeedItem";
import FeedControls from "./FeedControls";

export interface FeedItemData {
  id: string;
  title: string;
  description: string;
  link: string;
  source: string;
  category: string;
  pubDate: string;
  read: boolean;
}

interface FeedResponse {
  success: boolean;
  items?: FeedItemData[];
  feedTitle?: string;
  feedDescription?: string;
  error?: string;
  message?: string;
}

export default function CyberAlertsFeed() {
  const [feedItems, setFeedItems] = useState<FeedItemData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [readItems, setReadItems] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);
  const itemsPerPage = 10;

  // Load read status from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("cyberalerts-read-items");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as string[];
        const readSet = new Set<string>(parsed);
        setReadItems(readSet);
      } catch (e) {
        console.error("Failed to load read items from localStorage", e);
      }
    }
  }, []);

  // Save read status to localStorage whenever it changes
  useEffect(() => {
    if (readItems.size > 0) {
      localStorage.setItem(
        "cyberalerts-read-items",
        JSON.stringify(Array.from(readItems))
      );
    }
  }, [readItems]);

  const fetchFeed = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/cyberalerts");
      const data: FeedResponse = await response.json();

      if (!data.success || !data.items) {
        throw new Error(data.message || data.error || "Failed to fetch feed");
      }

      // Merge with existing read status
      const itemsWithReadStatus = data.items.map((item) => ({
        ...item,
        read: readItems.has(item.id),
      }));

      setFeedItems(itemsWithReadStatus);
      setLastRefresh(new Date());
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch CyberAlerts feed"
      );
      console.error("Error fetching feed:", err);
    } finally {
      setLoading(false);
    }
  }, [readItems]);

  // Initial fetch
  useEffect(() => {
    fetchFeed();
  }, [fetchFeed]);

  // Auto-refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(
      () => {
        fetchFeed();
      },
      5 * 60 * 1000
    ); // 5 minutes

    return () => clearInterval(interval);
  }, [fetchFeed]);

  const handleMarkAsRead = useCallback((itemId: string) => {
    setReadItems((prev) => {
      const newSet = new Set(prev);
      newSet.add(itemId);
      return newSet;
    });

    // Update the item in feedItems
    setFeedItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, read: true } : item))
    );
  }, []);

  const handleRefresh = useCallback(() => {
    fetchFeed();
  }, [fetchFeed]);

  // Pagination
  const totalPages = Math.ceil(feedItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = feedItems.slice(startIndex, endIndex);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    // Scroll to top of feed section
    const feedSection = document.getElementById("cyberalerts-feed");
    if (feedSection) {
      feedSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section
      id="cyberalerts-feed"
      className="card"
      aria-labelledby="cyberalerts-heading"
    >
      <div className="card-header">
        <h2
          id="cyberalerts-heading"
          className="card-title"
          style={{ margin: 0 }}
        >
          CyberAlerts Feed
        </h2>
        {lastRefresh && (
          <p className="card-subtitle">
            Last updated: {lastRefresh.toLocaleTimeString()}
          </p>
        )}
      </div>

      <FeedControls
        onRefresh={handleRefresh}
        loading={loading}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        totalItems={feedItems.length}
        unreadCount={feedItems.filter((item) => !item.read).length}
      />

      {loading && feedItems.length === 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--spacing-3xl)",
            gap: "var(--spacing-md)",
          }}
          aria-live="polite"
          aria-busy="true"
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: "48px",
              color: "var(--color-primary)",
              animation: "spin 1s linear infinite",
            }}
            aria-hidden="true"
          >
            refresh
          </span>
          <p className="text-muted">Loading CyberAlerts feed...</p>
        </div>
      )}

      {error && (
        <div
          className="alert alert-error"
          role="alert"
          style={{
            marginBottom: "var(--spacing-lg)",
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-sm)",
          }}
        >
          <span
            className="material-symbols-outlined"
            aria-hidden="true"
            style={{ fontSize: "20px" }}
          >
            error
          </span>
          <div>
            <strong>Error loading feed:</strong> {error}
            <button
              onClick={handleRefresh}
              className="btn btn-outline"
              style={{
                marginTop: "var(--spacing-sm)",
                fontSize: "var(--font-size-sm)",
                padding: "var(--spacing-xs) var(--spacing-md)",
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {!loading && feedItems.length === 0 && !error && (
        <div
          style={{
            textAlign: "center",
            padding: "var(--spacing-3xl)",
            color: "var(--color-text-secondary)",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: "48px",
              marginBottom: "var(--spacing-md)",
              display: "block",
            }}
            aria-hidden="true"
          >
            rss_feed
          </span>
          <p>No alerts available at this time.</p>
        </div>
      )}

      {!loading && currentItems.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-lg)",
          }}
          role="list"
          aria-label="CyberAlerts feed items"
        >
          {currentItems.map((item) => (
            <FeedItem
              key={item.id}
              item={item}
              onMarkAsRead={handleMarkAsRead}
            />
          ))}
        </div>
      )}

      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
