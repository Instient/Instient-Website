"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const newsData = [
  {
    title: "2025 Vietnam Investor Exposition",
    date: "Jan 21,2025",
    head: "-- Case Study",
  },
  {
    title: "NextJS vs. React Native",
    date: "Jan 21, 2025",
    head: "-- Case Study",
  },
  {
    title: "Heat Fleet Launch",
    date: "Jan 26, 2025",
    head: "-- Case Study",
  },
  {
    title: "Health Sector Witnesses Major Breakthrough",
    date: "Jan 25, 2025",
    head: "-- Case Study",
  },
];

export function NewsSection() {
  const [visibleNews, setVisibleNews] = useState(3);

  const handleShowMore = () => {
    setVisibleNews(newsData.length);
  };

  return (
    <div>
      <section className="px-4 py-4">
        <div className="space-y-6">
          {newsData.slice(0, visibleNews).map((newsItem, index) => (
            <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-t border-gray-300 font-ubuntu">
              <div>
                <p className="text-sm mb-2">{newsItem.head}</p>
                <h3 className="text-xl font-semibold mb-3">{newsItem.title}</h3>
                <p className="text-sm">{newsItem.date}</p>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-auto">
                <Button
                  size="sm"
                  className="rounded-full border-black border-2 text-black font-ubuntu bg-white"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
          {visibleNews < newsData.length && (
            <div className="text-center mt-6">
              <Button
                onClick={handleShowMore}
                className="rounded-full border-black border-2 text-black font-ubuntu bg-white"
              >
                Show More news
              </Button>
            </div>
          )}
        </div>
      </section>
   </div>
  
  );
}

export default NewsSection;
