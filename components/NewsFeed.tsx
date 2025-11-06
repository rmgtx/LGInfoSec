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
    <div id="news" className="card">
      <h2 className="text-2xl font-semibold text-mend-neutral-900 mb-6">Security Awareness Feed</h2>
      <div className="space-y-4">
        {news.map((item) => (
          <article
            key={item.id}
            className="border border-mend-neutral-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-mend-primary-100 rounded-lg flex items-center justify-center">
                <span className="text-mend-primary-600 font-bold text-xl">🔒</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs font-semibold text-mend-primary-600 uppercase">
                    {item.source}
                  </span>
                  <span className="text-xs text-mend-neutral-500">
                    {new Date(item.published).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-mend-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-mend-neutral-600 mb-3 line-clamp-2">{item.summary}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mend-primary-600 hover:text-mend-primary-700 text-sm font-medium transition-colors"
                >
                  Read More →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

