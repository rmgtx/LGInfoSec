"use client";

interface FeedControlsProps {
  onRefresh: () => void;
  loading: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  unreadCount: number;
}

export default function FeedControls({
  onRefresh,
  loading,
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  unreadCount,
}: FeedControlsProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "var(--spacing-lg)",
        paddingBottom: "var(--spacing-md)",
        borderBottom: "1px solid var(--color-border)",
        flexWrap: "wrap",
        gap: "var(--spacing-md)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-md)",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={onRefresh}
          disabled={loading}
          className="btn btn-outline"
          aria-label="Refresh feed"
          style={{
            fontSize: "var(--font-size-sm)",
            padding: "var(--spacing-sm) var(--spacing-md)",
            minHeight: "36px",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: "18px",
              animation: loading ? "spin 1s linear infinite" : "none",
            }}
            aria-hidden="true"
          >
            refresh
          </span>
          {loading ? "Refreshing..." : "Refresh"}
        </button>

        {unreadCount > 0 && (
          <span
            className="badge badge-primary"
            style={{
              fontSize: "var(--font-size-sm)",
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--spacing-xs)",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "16px" }}
              aria-hidden="true"
            >
              mark_chat_unread
            </span>
            {unreadCount} unread
          </span>
        )}

        <span
          className="text-muted"
          style={{ fontSize: "var(--font-size-sm)" }}
        >
          {totalItems} {totalItems === 1 ? "alert" : "alerts"}
        </span>
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Feed pagination"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-sm)",
          }}
        >
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="btn btn-outline"
            aria-label="Previous page"
            style={{
              fontSize: "var(--font-size-sm)",
              padding: "var(--spacing-sm) var(--spacing-md)",
              minHeight: "36px",
              minWidth: "36px",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "18px" }}
              aria-hidden="true"
            >
              chevron_left
            </span>
          </button>

          <span
            className="text-muted"
            style={{
              fontSize: "var(--font-size-sm)",
              padding: "0 var(--spacing-sm)",
            }}
            aria-current="page"
          >
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="btn btn-outline"
            aria-label="Next page"
            style={{
              fontSize: "var(--font-size-sm)",
              padding: "var(--spacing-sm) var(--spacing-md)",
              minHeight: "36px",
              minWidth: "36px",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "18px" }}
              aria-hidden="true"
            >
              chevron_right
            </span>
          </button>
        </nav>
      )}
    </div>
  );
}
