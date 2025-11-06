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
      <h2 id="news-heading" style={{ marginBottom: "var(--spacing-lg)" }}>Security Awareness Feed</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-md)" }}>
        {news.map((item) => (
          <article
            key={item.id}
            style={{
              border: `1px solid var(--color-border)`,
              borderRadius: "var(--radius-md)",
              padding: "var(--spacing-md)",
              transition: "box-shadow var(--transition-medium)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "var(--shadow-md)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--spacing-md)" }}>
              <div 
                style={{
                  flexShrink: 0,
                  width: "64px",
                  height: "64px",
                  backgroundColor: "rgba(10, 132, 255, 0.1)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-hidden="true"
              >
                <span className="material-symbols-outlined" style={{ fontSize: "32px", color: "var(--color-primary)" }}>
                  security
                </span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-sm)", marginBottom: "var(--spacing-sm)" }}>
                  <span style={{
                    fontSize: "12px",
                    fontWeight: "var(--font-weight-bold)",
                    color: "var(--color-primary)",
                    textTransform: "uppercase",
                  }}>
                    {item.source}
                  </span>
                  <time 
                    dateTime={item.published}
                    style={{
                      fontSize: "12px",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {new Date(item.published).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
                <h3 style={{ marginBottom: "var(--spacing-sm)", fontWeight: "var(--font-weight-bold)", fontSize: "var(--font-size-lg)" }}>{item.title}</h3>
                <p style={{ 
                  fontSize: "var(--font-size-sm)", 
                  color: "var(--color-text-secondary)",
                  marginBottom: "var(--spacing-md)",
                  lineHeight: "1.6",
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
                  style={{
                    color: "var(--color-primary)",
                    fontSize: "var(--font-size-sm)",
                    fontWeight: "var(--font-weight-medium)",
                    textDecoration: "none",
                    transition: "color var(--transition-fast)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "var(--spacing-xs)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = "2px solid var(--color-primary)";
                    e.currentTarget.style.outlineOffset = "2px";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.outline = "none";
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                >
                  Read More
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
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

