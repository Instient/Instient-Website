"use client";

import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { useEffect, useState } from "react";

async function fetchMemberData(slug: string) {
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  const response = await fetch(
    `https://dev-api.instient.ai/api/meetourpeople-instients?filters[slug][$eq]=${slug}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      cache: "no-store",
    }
  );

  const data = await response.json();
  return data?.data?.[0] ?? null;
}

export default function MeetOurPeopleSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string | null>(null);
  const [memberData, setMemberData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSlug() {
      const resolvedParams = await params; // Resolving the params Promise
      setSlug(resolvedParams.slug);
    }

    getSlug();
  }, [params]);

  useEffect(() => {
    async function getData() {
      if (!slug) return;
      const fetchedData = await fetchMemberData(slug);
      setMemberData(fetchedData);
      setIsLoading(false);
    }

    getData();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>
    );
  }

  if (!memberData) {
    return <p className="text-center mt-20">Member not found or incomplete data.</p>;
  }

  const {
    Name,
    Post,
    email,
    About,
    Expertise,
    Experience_Name1,
    Experience_Role1,
    Experience_Name2,
    Experience_Role2,
    Education_College1,
    Education_Degree1,
    Education_College2,
    Education_Degree2,
    Image: { url } = {},
  } = memberData.attributes || memberData;

  return (
    <main>
      {/* Blue Background Container */}
      <div className="relative w-full h-[675px] sm:h-[450px] flex flex-col lg:flex-row gap-4 items-center justify-center p-6 sm:p-8">
        {/* Profile Image */}
        <div className="relative w-60 h-96 sm:w-80 sm:h-96 mt-5 rounded sm:mt-44 bg-white shadow-2xl overflow-hidden lg:-translate-y-8 lg:-translate-x-8 z-10 sm:rounded-lg">
          <Image
            src={url ? `https://dev-api.instient.ai${url}` : "/default-image.png"}
            alt={`${Name}'s Image`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Profile Details */}
        <div className="text-white text-center sm:text-left mt-5 sm:mt-12 max-w-lg lg:ml-16 z-20 px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl font-bold">{Name}</h1>
          <h2 className="text-xl sm:text-2xl font-semibold mt-2">{Post}</h2>
          <p className="text-base sm:text-lg mt-2">
            Email: <a href={`mailto:${email}`} className="text-blue-300 underline">{email}</a>
          </p>
        </div>

        {/* Decorative Blue Background */}
        <div className="absolute inset-0 bg-[#0042ad] -z-10 h-[700px] sm:h-[450px]" />
      </div>

      {/* Information Sections */}
      <div className="container mx-auto px-4 sm:px-8 md:px-20 py-12 text-black">
        <ContentSection title="About" content={About} />
        <ContentSection title="Expertise" content={Expertise} />

        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Experience</h2>
          <ExperienceItem role={Experience_Role1} company={Experience_Name1} />
          <ExperienceItem role={Experience_Role2} company={Experience_Name2} />
        </div>

        <div className="my-8 border-t-2 border-blue-300"></div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Education</h2>
          <EducationItem degree={Education_Degree1} college={Education_College1} />
          <EducationItem degree={Education_Degree2} college={Education_College2} />
        </div>
      </div>

      <Footer />
    </main>
  );
}

function ContentSection({ title, content }: { title: string; content: string | null }) {
  if (!content) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
      <p className="text-base sm:text-lg leading-relaxed">{content}</p>
      <div className="my-6 border-t-2 border-blue-300"></div>
    </div>
  );
}

function ExperienceItem({ role, company }: { role: string | null; company: string | null }) {
  if (!role || !company) return null;

  return (
    <div className="mb-4">
      <p className="text-base sm:text-lg font-semibold">{role}</p>
      <p className="text-base sm:text-lg">{company}</p>
    </div>
  );
}

function EducationItem({ degree, college }: { degree: string | null; college: string | null }) {
  if (!degree || !college) return null;

  return (
    <div className="mb-4">
      <p className="text-base sm:text-lg font-semibold">{degree}</p>
      <p className="text-base sm:text-lg">{college}</p>
    </div>
  );
}
