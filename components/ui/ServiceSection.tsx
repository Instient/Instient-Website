"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "./card";

export function ServiceSection() {
  const [services, setServices] = useState([]);
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  // Fetch service data from API
  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch("http://localhost:1337/api/service-instients", {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch service data");
        }

        const data = await response.json();
        if (data && data.data) {
          setServices(data.data);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    }

    fetchServices();
  }, []);

  return (
    <div className="sm:px-6 px-3 py-4 mt-10 sm:mt-10 sm:mb-16 mb-10">
      <h2 className="text-3xl font-ubuntu sm:text-left px-6 sm:mb-16">Explore Our Services</h2>

      <div className="py-10 font-ubuntu relative sm:mt-0">
        <div className="flex flex-wrap justify-center sm:justify-start gap-28 mt-16 sm:mt-0">
          {services.map((service) => (
            <div key={service.id} className="relative mb-14 sm:mb-14 w-full sm:w-[407px]">
              {/* Background Underlap */}
              <div className="absolute top-[25%] sm:top-1/3 left-1/2 sm:left-[50%] w-full h-[300px] bg-gray-200 -translate-y-1/2 -translate-x-1/2 z-0 rounded-md"></div>

              {/* Card Component */}
              <Card className="relative py-4 shadow-xl rounded-lg bg-white z-10 mt-16 w-[90%] mx-auto">
                <CardContent>
                  <p className="text-2xl py-3 font-ubuntu font-extralight">
                    {service.Service_Title}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end sm:py-6 pb-6">
                  <Link href={`/services/${service.slug}`}>
                    <Button className="text-black border-black rounded-full flex items-center font-ubuntu gap-2">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
