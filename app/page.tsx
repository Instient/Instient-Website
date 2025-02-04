"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Home() {
  const [homeData, setHomeData] = useState(null);
  const pathname = usePathname();
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch("https://dev-api.instient.com/api/homepage", {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHomeData(data.data);
      } catch (error) {
        console.error("Failed to fetch news data:", error);
      }
    };

    fetchHomeData();
  }, [pathname]);

  if (!homeData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <main>
        <div className="w-full h-[425px] sm:h-[670px] p-6 bg-gray-200 font-ubuntu">
          <div className="flex my-64 sm:my-64 ">
            <Card className="w-full sm:w-[650px] bg-gradient-to-b from-[#3c83c1] to-[#215E92] text-white">
              <CardHeader>
                <CardTitle className="text-base font-light">
                  {homeData.Card_Header}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl py-3 font-semibold">
                  {homeData.Card_Title}
                </p>
                <p className="text-xl font-thin">{homeData.Card_Content}</p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-transparent rounded-full border-2 flex items-center gap-2">
                  Discover more <ArrowRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="px-6 py-4 mt-44 sm:mt-10 mb-10">
          <h2 className="px-2 sm:px-10 font-ubuntu text-3xl">
            {homeData.Content_Header}
          </h2>

          <div className="pt-20 pb-10 font-ubuntu relative sm:mt-0">
            <div className="flex flex-col sm:flex-row justify-between items-center relative z-10 mt-24 sm:mt-0 ">
              <Card className="w-[90%] sm:w-[757px] sm:p-4 p-2 shadow-xl rounded-lg bg-white ">
                <CardContent>
                  <p className="text-2xl py-3 font-ubuntu font-extralight">
                    {homeData.Content_Title}
                  </p>
                  <p className="text-base font-ubuntu font-thin">
                    {homeData.Content_Text}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end py-6">
                  <Button className="text-black border-black border-2 rounded-full flex items-center font-ubuntu gap-2">
                    Read more <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="absolute top-[40%] sm:top-1/2 left-1/2 sm:left-[72%] w-full sm:w-[807px] h-[300px] bg-gray-200 -translate-y-1/2 -translate-x-1/2 z-0 rounded-md"></div>
          </div>
          <div className="sm:px-10">
            <Button className="text-black border-black border-2 rounded-full flex items-center font-ubuntu gap-2">
              See all news <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
