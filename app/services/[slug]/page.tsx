import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";

async function fetchServiceData(slug: string) {
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  const response = await fetch(
    `http://localhost:1337/api/service-instients?filters[slug][$eq]=${slug}`,
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

export default async function ServiceSlugPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const serviceData = await fetchServiceData(slug);

  if (!serviceData) {
    return <p className="text-center mt-20">Service not found or incomplete data.</p>;
  }

  const {
    Service_Title,
    Service_Description,
    Service_Content1_Title,
    Service_Content1_Card1_Title,
    Service_Content1_Card1_Description,
    Service_Content1_Card2_Title,
    Service_Content1_Card2_Description,
    Service_Content1_Card3_Title,
    Service_Content1_Card3_Description,
    Service_Content2_Title,
    Service_Content2_Description,
    Service_Content3_Title,
    Service_Content3_Card1_Title,
    Service_Content3_Card1_Description,
    Service_Content3_Card1_Content,
    Service_Content3_Card2_Title,
    Service_Content3_Card2_Description,
    Service_Content3_Card2_Content,
  } = serviceData.attributes || serviceData;

  return (
    <main>
      <div className="w-full h-[425px] sm:h-[450px] bg-gray-200 p-6 font-ubuntu">
        <div className="my-64 sm:my-64">
          <Card className="lg:w-[600px] sm:w-[650px] bg-gradient-to-b from-[#3c83c1] to-[#459ae5] text-white font-ubuntu">
            <CardContent>
              <p className="text-4xl py-24 sm:py-20 font-ubuntu font-medium">{Service_Title}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container sm:p-6 py-6 px-3 font-ubuntu mt-44 sm:mt-24 w-[90%] sm:w-[60%]">
        <p className="text-2xl px-6 font-ubuntu">{Service_Description}</p>
      </div>

      <WhatMakesUsStandOut
        title={Service_Content1_Title}
        cards={[
          { title: Service_Content1_Card1_Title, content: Service_Content1_Card1_Description },
          { title: Service_Content1_Card2_Title, content: Service_Content1_Card2_Description },
          { title: Service_Content1_Card3_Title, content: Service_Content1_Card3_Description },
        ]}
      />

      <div className="sm:px-6 px-3 py-4 mt-10 sm:mt-10 sm:mb-10 mb-10">
        <h2 className="text-3xl font-medium font-ubuntu sm:text-left px-6">{Service_Content2_Title}</h2>
        <div className="container sm:p-6 py-6 px-3 font-ubuntu mt-10 sm:mt-2 w-[90%] sm:w-[60%]">
          <p className="text-xl px-3 sm:p-0 font-ubuntu">{Service_Content2_Description}</p>
        </div>
      </div>

      <OurProcess
        title={Service_Content3_Title}
        processDetails={[
          { title: Service_Content3_Card1_Title, description: Service_Content3_Card1_Description, content: Service_Content3_Card1_Content },
          { title: Service_Content3_Card2_Title, description: Service_Content3_Card2_Description, content: Service_Content3_Card2_Content },
        ]}
      />

      <Footer />
    </main>
  );
}

function WhatMakesUsStandOut({ title, cards }) {
    return (
      <div className="sm:px-6 px-3 py-4 mt-10 sm:mt-10 sm:mb-16 mb-10">
        <h2 className="text-3xl font-medium font-ubuntu sm:text-left px-6">{title}</h2>
  
        <div className={`grid gap-10 mt-8 grid-cols-1 ${cards.length >= 2 ? 'sm:grid-cols-2' : ''} ${cards.length >= 3 ? 'lg:grid-cols-3' : ''}`}>
          {cards.filter(card => card.title && card.content).map((card, index) => (
            <Card key={index} className="py-4 shadow-xl rounded-lg bg-white border-white p-6 w-[95%] sm:w-[100%] mx-auto">
              <h3 className="font-ubuntu text-xl font-semibold mb-2 mt-2">{card.title}</h3>
              <div className="border-b-4 border-blue-500 w-12 mb-4"></div>
              <CardContent className="text-black font-ubuntu text-base p-0">{card.content}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  

function OurProcess({ title, processDetails }) {
  return (
    <div className="px-6 py-4 mt-10 sm:mt-10 sm:mb-10">
      <h2 className="text-3xl font-ubuntu font-medium px-4 sm:text-left sm:px-6 sm:mb-6 mb-4">{title}</h2>

      <div className="grid grid-cols-1 gap-6">
        {processDetails.map((detail, index) => (
          <div key={index} className="p-6 border-t border-gray-300 font-ubuntu">
            <p className="text-lg font-ubuntu mb-1">{detail.title}</p>
            <h3 className="text-xl font-ubuntu font-medium mb-1">{detail.description}</h3>
            <p className="text-sm font-ubuntu mb-1">{detail.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
