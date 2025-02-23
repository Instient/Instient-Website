import { Footer } from "@/components/ui/footer";
import Image from "next/image";

async function fetchMemberData(slug) {
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  const response = await fetch(
    `https://dev-api.instient.com/api/meetourpeople-instients?filters[slug][$eq]=${slug}&populate=*`,
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

export default async function MeetOurPeopleSlugPage({ params }) {
  const { slug } = await params;
  const memberData = await fetchMemberData(slug);

  if (!memberData) {
    return <p className="text-center mt-20">Member not found or incomplete data.</p>;
  }

  const {
    Name,
    Post,
    Description,
    email,
    About,
    Expertise,
    Publishedwork,
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
        
        {/* Profile Image - Larger for Mobile */}
        <div className="relative w-60 h-96 sm:w-80 sm:h-96 mt-5 rounded sm:mt-44 bg-white shadow-2xl overflow-hidden lg:-translate-y-8 lg:-translate-x-8 z-10 sm:rounded-lg">
          <Image
            src={url ? `https://dev-api.instient.com${url}` : "/default-image.png"}
            alt={`${Name}'s Image`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Profile Details - Below Image in Mobile */}
        <div className="text-white text-center sm:text-left mt-5 sm:mt-12 max-w-lg lg:ml-16 z-20 px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl font-bold">{Name}</h1>
          <h2 className="text-xl sm:text-2xl font-semibold mt-2">{Post}</h2>
          <p className="text-base text sm:text-lg mt-4">{Description}</p>
          <p className="text-base sm:text-lg mt-2">
            Email: <a href={`mailto:${email}`} className="text-blue-300 underline">{email}</a>
          </p>
        </div>

        {/* Decorative Blue Background */}
        <div className="absolute inset-0 bg-[#0042ad] -z-10 h-[700px] sm:h-[450px]">
          {/* Hidden SVG on Mobile */}
          <svg
            className="hidden sm:block absolute top-[55%] sm:top-1/3 left-0 w-[80%] sm:w-[45%] h-auto -z-10 opacity-40"
            viewBox="0 0 800 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 50 C150 100, 300 0, 450 50 S 700 150, 800 100"
              stroke="white"
              strokeWidth="3"
              fill="transparent"
            />
            <polygon points="790,98 800,100 790,102" fill="white" />
          </svg>
        </div>
      </div>

      {/* Information Sections */}
      <div className="container mx-auto px-4 sm:px-8 md:px-20 py-12 text-black">
        {/* Added Margin for Mobile View */}
        <div className="mt-4 sm:mt-0">
          {[{ title: "About", content: About }, { title: "Expertise", content: Expertise }, { title: "Published Work", content: Publishedwork }].map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-base sm:text-lg leading-relaxed">{section.content}</p>
              <div className="my-6 border-t-2 border-blue-300"></div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Experience</h2>
          {[{ company: Experience_Name1, role: Experience_Role1 }, { company: Experience_Name2, role: Experience_Role2 }].map((exp, idx) => (
            <div key={idx} className="mb-4">
              <p className="text-base sm:text-lg font-semibold">{exp.role}</p>
              <p className="text-base sm:text-lg">{exp.company}</p>
            </div>
          ))}
          <div className="my-6 border-t-2 border-blue-300"></div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Education</h2>
          {[{ college: Education_College1, degree: Education_Degree1 }, { college: Education_College2, degree: Education_Degree2 }].map((edu, idx) => (
            <div key={idx} className="mb-4">
              <p className="text-base sm:text-lg font-semibold">{edu.degree}</p>
              <p className="text-base sm:text-lg">{edu.college}</p>
            </div>
          ))}
          <div className="my-6 border-t-2 border-blue-300"></div>
        </div>
      </div>

      <Footer />
    </main>

  );
}
