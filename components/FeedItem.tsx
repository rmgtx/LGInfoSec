"use client";

import { FeedItemData } from "./CyberAlertsFeed";

interface FeedItemProps {
  item: FeedItemData;
  onMarkAsRead: (itemId: string) => void;
}

export default function FeedItem({ item, onMarkAsRead }: FeedItemProps) {
  const handleClick = () => {
    if (!item.read) {
      onMarkAsRead(item.id);
    }
    // Open link in new tab (browser default behavior)
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <article
      style={{
        border: `1px solid var(--color-border)`,
        borderRadius: "var(--radius-lg)",
        padding: "var(--spacing-lg)",
        transition:
          "box-shadow var(--transition-medium), border-color var(--transition-medium), transform var(--transition-medium)",
        background: item.read ? "var(--color-bg-alt)" : "var(--color-bg-alt)",
        position: "relative",
        opacity: item.read ? 0.85 : 1,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
        e.currentTarget.style.borderColor = "var(--color-primary)";
        e.currentTarget.style.transform = "translateY(var(--hover-lift))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
      role="listitem"
    >
      {!item.read && (
        <div
          style={{
            position: "absolute",
            top: "var(--spacing-md)",
            right: "var(--spacing-md)",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "var(--color-primary)",
            boxShadow: "0 0 0 2px var(--color-bg-alt)",
          }}
          aria-label="Unread alert"
        />
      )}

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "var(--spacing-md)",
        }}
      >
        <div
          style={{
            flexShrink: 0,
            width: "72px",
            height: "72px",
            backgroundColor: "rgba(10, 132, 255, 0.1)",
            borderRadius: "var(--radius-lg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(10, 132, 255, 0.2)",
          }}
          aria-hidden="true"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "36px", color: "var(--color-primary)" }}
          >
            security
          </span>
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--spacing-md)",
              marginBottom: "var(--spacing-md)",
              flexWrap: "wrap",
            }}
          >
            <span
              className="badge badge-primary"
              style={{ textTransform: "uppercase" }}
            >
              {item.category}
            </span>
            <span
              className="badge badge-accent"
              style={{
                textTransform: "uppercase",
                fontSize: "var(--font-size-sm)",
              }}
            >
              {item.source}
            </span>
            <time dateTime={item.pubDate} className="text-muted">
              {formatDate(item.pubDate)}
            </time>
          </div>

          <h3
            style={{
              marginBottom: "var(--spacing-md)",
              fontWeight: item.read
                ? "var(--font-weight-semibold)"
                : "var(--font-weight-bold)",
              fontSize: "var(--font-size-lg)",
              lineHeight: "var(--line-height-tight)",
              color: "var(--color-text)",
            }}
          >
            {item.title}
          </h3>

          {item.description && (
            <p
              className="text-muted"
              style={{
                marginBottom: "var(--spacing-lg)",
                lineHeight: "var(--line-height-relaxed)",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {item.description}
            </p>
          )}

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read more about ${item.title}`}
              className="link-button"
              onClick={handleClick}
            >
              Read More
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "18px" }}
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
