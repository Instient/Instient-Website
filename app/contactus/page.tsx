"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactSection from "@/components/ui/ContactSection";
import { Footer } from "@/components/ui/footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Contact() {
  const [contactData, setContactData] = useState(null);
  const pathname = usePathname();
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch("https://dev-api.instient.com/api/contactpage", {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setContactData(data.data);
      } catch (error) {
        console.error("Failed to fetch news data:", error);
      }
    };

    fetchContactData();
  }, [pathname]);

  if (!contactData) {
    return <p>Loading...</p>;
  }


  return (
    <main>
    <div className="w-full h-[425px] sm:h-[450px] bg-gray-200 p-6 font-ubuntu ">
        <div className=" my-64 sm:my-64 ">
          <Card className="lg:w-[600px] sm:w-[650px] bg-gradient-to-b from-[#3c83c1] to-[#459ae5] text-white font-ubuntu ">
            <CardContent>
              <p className="text-4xl py-24 sm:py-20 font-ubuntu font-medium">{contactData.Title}</p>
            </CardContent>
          </Card>
        </div>
    </div>
    <div className="container sm:p-6 py-6 px-3 font-ubuntu mt-32 sm:mt-24 sm:w-[60%]">
    <p className="text-2xl px-6 font-ubuntu sm:hidden">{contactData.Description_mobile}</p>
    <p className="text-2xl px-6 font-ubuntu hidden sm:block">{contactData.Description_web}</p>
    </div>

    <ContactSection/>

    <div className="w-full px-6 py-6 mt-10 sm:mt-10 bg-gradient-to-b from-[#3c83c1] to-[#459ae5] text-white font-ubuntu mb-6 relative">
      <p className="text-3xl font-ubuntu font-semibold mb-1">{contactData.Bottom_Title}</p>
      <p className="text-lg font-ubuntu">{contactData.Bottom_Description}</p>
      
      {/* Button positioned for desktop and moved below in mobile */}
      <Link href={`/${contactData.Bottom_Link}`}>
        <Button
          size="lg"
          className="absolute top-1/2 right-6 transform -translate-y-1/2 rounded-full text-black font-ubuntu bg-white hidden sm:inline-flex"
        >
        {contactData.Bottom_Button} <ArrowRight className="w-4 h-4" />
        </Button>
      </Link>

      <Link href={`/${contactData.Bottom_Link}`}>
        <Button
            size="lg"
            className="mt-4 rounded-full text-black font-ubuntu bg-white sm:hidden"
          >
            {contactData.Bottom_Button} <ArrowRight className="w-4 h-4" />
          </Button>
      </Link>
       
        
    </div>



    <Footer/>

  </main>
  )
}
