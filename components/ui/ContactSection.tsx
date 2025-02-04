"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ContactSection() {
  const [contactData, setContactData] = useState([]);
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${apiToken}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:1337/api/contacts", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setContactData(result.data);
      })
      .catch((error) => console.error("Error fetching contact data:", error));
  }, []);

  return (
    <div className="px-6 py-4 mt-10 sm:mt-10">
      <h2 className="text-3xl font-ubuntu px-4 sm:text-left sm:px-6 sm:mb-4 mb-4">Global contact details</h2>

      {contactData.map((contactItem) => (
        <div
          key={contactItem.id}
          className="p-6 border-t border-gray-300 font-ubuntu"
        >
          <h3 className="text-xl font-ubuntu font-semibold mb-1">{contactItem.Content_Title}</h3>
          <p className="text-sm font-ubuntu mb-1">{contactItem.Content_Desc1}</p>
          {contactItem.Content_Desc2 && <p className="text-sm font-ubuntu mb-1">{contactItem.Content_Desc2}</p>}
          <Link href={`/${contactItem.Content_Link}`}>
            <Button
              size="sm"
              className="rounded-full border-black border-2 text-black font-ubuntu bg-white mt-2"
            >
              {contactItem.Content_Button} <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ContactSection;
