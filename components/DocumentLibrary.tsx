"use client";

import { useState, useEffect, useRef } from "react";
import documentsData from "@/data/documents.json";

interface Document {
  id: number;
  title: string;
  category: string;
  fileUrl: string;
  updatedAt: string;
}

export default function DocumentLibrary() {
  const [documents] = useState<Document[]>(documentsData);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [announcement, setAnnouncement] = useState<string>("");
  const filterRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    ...Array.from(new Set(documents.map((doc) => doc.category))),
  ];

  const filteredDocuments =
    selectedCategory === "All"
      ? documents
      : documents.filter((doc) => doc.category === selectedCategory);

  useEffect(() => {
    if (selectedCategory !== "All") {
      setAnnouncement(
        `Showing ${filteredDocuments.length} ${selectedCategory.toLowerCase()} document${filteredDocuments.length !== 1 ? "s" : ""}`
      );
      // Move focus to results
      setTimeout(() => {
        filterRef.current?.setAttribute("tabindex", "-1");
        filterRef.current?.focus();
      }, 100);
    } else {
      setAnnouncement(`Showing all ${filteredDocuments.length} documents`);
    }
  }, [selectedCategory, filteredDocuments.length]);

  const getFileType = (url: string): string => {
    if (url.toLowerCase().endsWith(".pdf")) return "PDF";
    if (
      url.toLowerCase().endsWith(".doc") ||
      url.toLowerCase().endsWith(".docx")
    )
      return "DOC";
    return "Document";
  };

  return (
    <section id="policies" className="card" aria-labelledby="policies-heading">
      <div className="card-header">
        <h2 id="policies-heading" className="card-title" style={{ margin: 0 }}>
          Policies & Documentation
        </h2>
      </div>

      <div
        role="tablist"
        aria-label="Filter documents by category"
        style={{
          marginBottom: "var(--spacing-lg)",
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--spacing-sm)",
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={selectedCategory === category}
            aria-controls="policies-list"
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: "var(--spacing-sm) var(--spacing-md)",
              borderRadius: "var(--radius-sm)",
              border:
                selectedCategory === category
                  ? "2px solid var(--color-primary)"
                  : "2px solid transparent",
              fontWeight: "var(--font-weight-medium)",
              cursor: "pointer",
              transition:
                "background-color var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast)",
              backgroundColor:
                selectedCategory === category
                  ? "var(--color-primary)"
                  : "#f3f4f6",
              color:
                selectedCategory === category
                  ? "white"
                  : "var(--color-text-secondary)",
              outline: "none",
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = "2px solid var(--color-primary)";
              e.currentTarget.style.outlineOffset = "2px";
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = "none";
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== category) {
                e.currentTarget.style.backgroundColor = "#e5e7eb";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== category) {
                e.currentTarget.style.backgroundColor = "#f3f4f6";
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        id="policies-list"
        ref={filterRef}
        role="region"
        aria-live="polite"
        aria-atomic="true"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-md)",
        }}
      >
        {announcement && (
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            {announcement}
          </div>
        )}
        {filteredDocuments.length === 0 ? (
          <div
            style={{
              padding: "var(--spacing-xl)",
              textAlign: "center",
              color: "var(--color-text-secondary)",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "48px",
                display: "block",
                marginBottom: "var(--spacing-md)",
              }}
            >
              description
            </span>
            <p>No documents found in this category.</p>
          </div>
        ) : (
          filteredDocuments.map((doc) => {
            const fileType = getFileType(doc.fileUrl);
            const linkText = `View ${doc.title} (${fileType})`;
            return (
              <article
                key={doc.id}
                style={{
                  border: `1px solid var(--color-border)`,
                  borderRadius: "var(--radius-md)",
                  padding: "var(--spacing-md)",
                  transition:
                    "box-shadow var(--transition-medium), transform var(--transition-medium)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.transform =
                    "translateY(var(--hover-lift-small))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "var(--spacing-md)",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        marginBottom: "var(--spacing-sm)",
                        fontWeight: "var(--font-weight-bold)",
                        fontSize: "var(--font-size-lg)",
                        lineHeight: "var(--line-height-tight)",
                        color: "var(--color-text)",
                      }}
                    >
                      {doc.title}
                    </h3>
                    <div
                      style={{
                        marginBottom: "var(--spacing-md)",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "var(--spacing-sm)",
                        alignItems: "center",
                      }}
                    >
                      <span className="badge badge-primary">
                        {doc.category}
                      </span>
                      <span className="text-muted">
                        Last updated:{" "}
                        {new Date(doc.updatedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-primary"
                    aria-label={linkText}
                    style={{
                      marginLeft: "var(--spacing-md)",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      minWidth: "auto",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "18px", flexShrink: 0 }}
                      aria-hidden="true"
                    >
                      open_in_new
                    </span>
                    <span style={{ flexShrink: 0 }}>View {fileType}</span>
                  </a>
                </div>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
}
