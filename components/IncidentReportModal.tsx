"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface IncidentFormData {
  name: string;
  email: string;
  department: string;
  incidentType: string;
  description: string;
  attachment?: FileList;
}

export default function IncidentReportModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IncidentFormData>();

  const onSubmit = async (data: IncidentFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        reset();
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting report:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg"
        style={{
          backgroundColor: "var(--color-bg-alt)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <div
          className="sticky top-0 flex items-center justify-between"
          style={{
            backgroundColor: "var(--color-bg-alt)",
            borderBottom: "1px solid var(--color-border)",
            padding: "var(--spacing-xl)",
          }}
        >
          <h2 className="card-title" style={{ margin: 0 }}>
            Report Security Incident
          </h2>
          <button
            onClick={onClose}
            className="button btn-secondary"
            aria-label="Close modal"
            style={{
              minWidth: "44px",
              minHeight: "44px",
              padding: "var(--spacing-sm)",
              fontSize: "var(--font-size-xl)",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        {showSuccess ? (
          <div style={{ padding: "var(--spacing-xl)", textAlign: "center" }}>
            <div
              style={{
                fontSize: "64px",
                color: "var(--color-success)",
                marginBottom: "var(--spacing-lg)",
              }}
              aria-hidden="true"
            >
              ✓
            </div>
            <p
              style={{
                fontSize: "var(--font-size-xl)",
                fontWeight: "var(--font-weight-bold)",
                color: "var(--color-text)",
                marginBottom: "var(--spacing-md)",
              }}
            >
              Report submitted to InfoSec.
            </p>
            <p className="text-muted">Thank you for your report.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              padding: "var(--spacing-xl)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-lg)",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--color-text)",
                  marginBottom: "var(--spacing-sm)",
                }}
              >
                Name *
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                className="input"
              />
              {errors.name && (
                <p
                  style={{
                    color: "var(--color-error)",
                    fontSize: "var(--font-size-sm)",
                    marginTop: "var(--spacing-xs)",
                  }}
                >
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--color-text)",
                  marginBottom: "var(--spacing-sm)",
                }}
              >
                Email *
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                className="input"
              />
              {errors.email && (
                <p
                  style={{
                    color: "var(--color-error)",
                    fontSize: "var(--font-size-sm)",
                    marginTop: "var(--spacing-xs)",
                  }}
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--color-text)",
                  marginBottom: "var(--spacing-sm)",
                }}
              >
                Department *
              </label>
              <select
                {...register("department", {
                  required: "Department is required",
                })}
                className="select"
              >
                <option value="">Select Department</option>
                <option value="Engineering">Engineering</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Operations">Operations</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Other">Other</option>
              </select>
              {errors.department && (
                <p
                  style={{
                    color: "var(--color-error)",
                    fontSize: "var(--font-size-sm)",
                    marginTop: "var(--spacing-xs)",
                  }}
                >
                  {errors.department.message}
                </p>
              )}
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--color-text)",
                  marginBottom: "var(--spacing-sm)",
                }}
              >
                Incident Type *
              </label>
              <select
                {...register("incidentType", {
                  required: "Incident type is required",
                })}
                className="select"
              >
                <option value="">Select Incident Type</option>
                <option value="Phishing">Phishing Attempt</option>
                <option value="Malware">Malware Detection</option>
                <option value="Data Breach">Potential Data Breach</option>
                <option value="Unauthorized Access">Unauthorized Access</option>
                <option value="Lost Device">Lost or Stolen Device</option>
                <option value="Other">Other</option>
              </select>
              {errors.incidentType && (
                <p
                  style={{
                    color: "var(--color-error)",
                    fontSize: "var(--font-size-sm)",
                    marginTop: "var(--spacing-xs)",
                  }}
                >
                  {errors.incidentType.message}
                </p>
              )}
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--color-text)",
                  marginBottom: "var(--spacing-sm)",
                }}
              >
                Description *
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                rows={5}
                className="textarea"
              />
              {errors.description && (
                <p
                  style={{
                    color: "var(--color-error)",
                    fontSize: "var(--font-size-sm)",
                    marginTop: "var(--spacing-xs)",
                  }}
                >
                  {errors.description.message}
                </p>
              )}
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--color-text)",
                  marginBottom: "var(--spacing-sm)",
                }}
              >
                Attachment (Optional)
              </label>
              <input
                {...register("attachment")}
                type="file"
                className="input"
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "var(--spacing-md)",
                paddingTop: "var(--spacing-md)",
              }}
            >
              <button
                type="button"
                onClick={onClose}
                className="button btn-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="button button-accent"
                style={{
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit Report"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
