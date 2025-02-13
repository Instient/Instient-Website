import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";
import Image from 'next/image'; // Importing Image


async function fetchInternshipData(slug: string) {
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  const response = await fetch(
    `https://dev-api.instient.com/api/internships?filters[slug][$eq]=${slug}&populate=*`,
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

export default async function InternshipSlugPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const internshipData = await fetchInternshipData(slug);

  if (!internshipData || !internshipData.Title || !internshipData.Description) {
    return <p className="text-center mt-20">This internship does not exist or is missing required fields.</p>;
  }

  const {
    Title,
    location,
    Description,
    type,
    role,
    responsibilty,
    skills,
    Qulaification,
    Image_Thumbnail: { url } = {},
  } = internshipData;

  return (
    <main>
      {/* Header Section */}
      <div className="w-full h-[425px] sm:h-[450px] p-6 font-ubuntu relative">
        {/* Image Component as Background */}
        <Image
          src={url ? `https://dev-api.instient.com${url}` : '/default-image.png'} // Use default image if url is undefined
          alt="Background Image"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover" // Ensures image covers the space and stays behind content
        />

        {/* Card Content */}
        <div className="my-64 sm:my-64 relative z-10">
          <Card className="lg:w-[600px] sm:w-[650px] bg-gradient-to-b from-[#3c83c1] to-[#459ae5] text-white font-ubuntu">
            <CardHeader>
              <CardTitle className="text-base font-light">
                {location} | {type}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl py-6 sm:py-0 mb-12 sm:mb-24 font-ubuntu font-medium">
                {Title}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Internship Description */}
      <div className="container sm:p-6 py-4 px-3 font-ubuntu mt-32 sm:mt-24 w-[100%] sm:w-[60%]">
        <h2 className="text-3xl font-medium font-ubuntu sm:text-left px-6">Internship Description</h2>
        <p className="text-lg px-6 font-ubuntu text-justify mt-4">{Description}</p>
      </div>

      {/* Detailed Internship Sections */}
      <InternshipSection title="About the Role" content={role} isRole />
      <InternshipSection title="Key Responsibilities" content={responsibilty} />
      <InternshipSection title="Required Skills" content={skills} />
      <InternshipSection title="Preferred Qualifications" content={Qulaification} />

      {/* Apply Button */}
      <div className=" px-6 text-center sm:text-left sm:px-12 mt-12 mb-10">
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-all">
          Apply Now
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

function InternshipSection({ title, content, isRole }: { title: string; content: string | null; isRole?: boolean }) {
  if (!content) return null;

  const formattedContent = isRole
    ? <p className="text-lg font-ubuntu">{content}</p>
    : content.split(/•\s*/).filter(Boolean).map((line, index) => (
        <p key={index} className="mb-2 text-lg font-ubuntu flex items-start">
          <span className="mr-2">•</span>
          {line}
        </p>
      ));

  return (
    <div className="sm:px-6 px-3 py-4 mt-4 sm:mt-4 sm:mb-4">
      <h2 className="text-3xl font-medium font-ubuntu sm:text-left px-6">{title}</h2>
      <div className="container sm:p-6 py-6 px-6 font-ubuntu  sm:mt-2 w-[100%] sm:w-[60%] text-justify">
        {formattedContent}
      </div>
    </div>
  );
}
