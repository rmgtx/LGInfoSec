"use client";

import { useState } from "react";
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

  const categories = ["All", ...Array.from(new Set(documents.map((doc) => doc.category)))];

  const filteredDocuments =
    selectedCategory === "All"
      ? documents
      : documents.filter((doc) => doc.category === selectedCategory);

  return (
    <div id="policies" className="card mb-8">
      <h2 className="text-2xl font-semibold text-mend-neutral-900 mb-6">Policies & Documentation</h2>

      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-offset-1 ${
              selectedCategory === category
                ? "bg-mend-primary-600 text-white focus:ring-mend-primary-500"
                : "bg-mend-neutral-100 text-mend-neutral-700 hover:bg-mend-neutral-200 focus:ring-mend-neutral-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredDocuments.map((doc) => (
          <div
            key={doc.id}
            className="border border-mend-neutral-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-mend-neutral-900 mb-1">{doc.title}</h3>
                <p className="text-sm text-mend-neutral-600 mb-2">
                  <span className="inline-block px-2 py-1 bg-mend-primary-100 text-mend-primary-800 rounded text-xs mr-2">
                    {doc.category}
                  </span>
                  Last updated: {new Date(doc.updatedAt).toLocaleDateString()}
                </p>
              </div>
              <a
                href={doc.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 btn-primary"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

