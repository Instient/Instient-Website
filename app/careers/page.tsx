"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CareerSection } from "@/components/ui/CareerSection";
import { Footer } from "@/components/ui/footer";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface CareerData {
  Title: string;
  Description: string;
  Content_Title: string;
}


export default function Careers() {

    const [careerData, setCareerData] = useState<CareerData | null>(null);
    const pathname = usePathname();
    const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
  
    useEffect(() => {
      const fetchCareerData = async () => {
        try {
          const response = await fetch("https://dev-api.instient.com/api/careerpage", {
            headers: {
              Authorization: `Bearer ${apiToken}`,
            },
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setCareerData(data.data);
        } catch (error) {
          console.error("Failed to fetch news data:", error);
        }
      };
  
      fetchCareerData();
    }, [pathname]);
  
    if (!careerData) {
      return (
           // Loading spinner
        <div className="flex justify-center items-center w-full h-screen">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
      );
    }


  return (
    <main>
      <div className="w-full h-[425px] sm:h-[450px] p-6 font-ubuntu  bg-[url('/Careers.webp')] bg-cover bg-center ">
          <div className=" my-64 sm:my-64 ">
            <Card className="lg:w-[600px] sm:w-[650px] bg-gradient-to-b from-[#3c83c1] to-[#459ae5] text-white font-ubuntu  opacity-95">
              <CardContent>
                <p className="text-4xl py-24 sm:py-20 font-ubuntu font-medium">{careerData.Title}</p>
              </CardContent>
            </Card>
          </div>
      </div>
      <div className="container sm:p-6 py-6 px-3 font-ubuntu mt-32 sm:mt-24 sm:w-[60%]">
        <p className="text-2xl px-6 font-ubuntu">{careerData.Description}</p>
      </div>

      <div className="sm:px-6 px-3 py-4 mt-10 sm:mt-10 sm:mb-16 mb-10 ">
        <h2 className="text-3xl font-ubuntu  sm:text-left px-6  sm:mb-16">{careerData.Content_Title}</h2>

        <CareerSection/>

      </div>


      <Footer/>

    </main>
  )
}
