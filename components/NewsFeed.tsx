"use client";

import { useState } from "react";
import newsData from "@/data/news.json";

interface NewsItem {
  id: number;
  title: string;
  source: string;
  published: string;
  summary: string;
  url: string;
}

export default function NewsFeed() {
  const [news] = useState<NewsItem[]>(newsData);

  return (
    <section 
      id="news" 
      className="card"
      aria-labelledby="news-heading"
    >
      <div className="card-header">
        <h2 id="news-heading" className="card-title" style={{ margin: 0 }}>Security Awareness Feed</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-lg)" }}>
        {news.map((item) => (
          <article
            key={item.id}
            style={{
              border: `1px solid var(--color-border)`,
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)",
              transition: "box-shadow var(--transition-medium), border-color var(--transition-medium), transform var(--transition-medium)",
              background: "var(--color-bg-alt)",
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
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--spacing-md)" }}>
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
                <span className="material-symbols-outlined" style={{ fontSize: "36px", color: "var(--color-primary)" }}>
                  security
                </span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-md)", marginBottom: "var(--spacing-md)", flexWrap: "wrap" }}>
                  <span className="badge badge-primary" style={{ textTransform: "uppercase" }}>
                    {item.source}
                  </span>
                  <time 
                    dateTime={item.published}
                    className="text-muted"
                  >
                    {new Date(item.published).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
                <h3 style={{ 
                  marginBottom: "var(--spacing-md)", 
                  fontWeight: "var(--font-weight-bold)", 
                  fontSize: "var(--font-size-lg)",
                  lineHeight: "var(--line-height-tight)",
                  color: "var(--color-text)"
                }}>
                  {item.title}
                </h3>
                <p className="text-muted" style={{ 
                  marginBottom: "var(--spacing-lg)",
                  lineHeight: "var(--line-height-relaxed)",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>
                  {item.summary}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read more about ${item.title}`}
                  className="link-button"
                >
                  Read More
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }} aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

