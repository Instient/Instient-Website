"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

interface Internship {
  id: number;
  Title: string;
  location: string;
  Description: string;
  type: string;
}

export function InternshipSection() {
  const [internshipData, setInternshipData] = useState<Internship[]>([]);
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${apiToken}`);

    const requestOptions: RequestInit = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow" as RequestRedirect,
    };

    fetch("https://dev-api.instient.com/api/internships", requestOptions) // Assuming the internships API endpoint is similar
      .then((response) => response.json())
      .then((result) => {
        setInternshipData(result.data); // Adjust based on your API response structure
      })
      .catch((error) => console.error("Error fetching internship openings:", error));
  }, [apiToken]);

  if (internshipData.length === 0) {
    return <p>Loading internship openings...</p>;
  }

  return (
    <div className="py-10 font-ubuntu relative sm:mt-0">
      {/* Parent Container */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-28 mt-16 sm:mt-0">
        {internshipData.map((internship) => (
          <div key={internship.id} className="relative mb-14 sm:mb-14 w-full sm:w-[407px]">
            {/* Background Underlap */}
            <div className="absolute top-[25%] sm:top-1/3 left-1/2 sm:left-[50%] w-full h-[300px] bg-gray-200 -translate-y-1/2 -translate-x-1/2 z-0 rounded-md"></div>

            {/* Card Component */}
            <Card className="relative py-4 shadow-xl rounded-lg bg-white z-10 mt-16 w-[90%] mx-auto">
              <CardContent>
                <h2 className="text-2xl font-bold py-3 font-ubuntu">{internship.Title}</h2>
                <p className="text-sm font-ubuntu text-gray-600">Location: {internship.location}</p>
                <p className="mt-4 text-base font-ubuntu">{internship.Description}</p>
                <p className="mt-4 text-sm font-ubuntu text-blue-600">Type: {internship.type}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InternshipSection;
