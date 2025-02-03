import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";

const WhatMakesUsStandOut = () => {
  const cardsData = [
    { title: "SEO-Friendly", content: "Our websites are built with SEO at their core, helping you rank higher on search engines and attract the right audience to grow your business organically." },
    { title: "Custom Code Solutions", content: "Forget cookie-cutter templates. We design and develop websites that are tailored specifically to your business goals, delivering a solution that stands out in a crowded market." },
    { title: "Cross-Platform Compatibility", content: "Your audience is everywhere, and your website should be too. We ensure a seamless, optimized experience on any device – desktop, tablet, or mobile." },
    { title: "Performance-Driven Design", content: "Speed matters. We create websites that are lightning-fast and optimized to perform under heavy traffic, ensuring your users stay engaged without delays." },
    { title: "Security You Can Rely On", content: "We implement the latest security protocols to protect your business and your customers, giving you peace of mind and earning customer trust." },
    { title: "Data-Driven Strategy", content: "Your website isn’t just a tool – it’s a powerful asset. We leverage analytics to continuously optimize performance, helping you stay ahead of the competition and adapt to market trends." }
  ];

  return (
        <div className="sm:px-6 px-3 py-4 mt-10 sm:mt-10 sm:mb-16 mb-10">
        <h2 className="text-3xl font-medium font-ubuntu sm:text-left px-6">What Makes Us Stand Out ?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
            {cardsData.map((card, index) => (
                <Card key={index} className="py-4 shadow-xl rounded-lg bg-white border-white p-6 w-[95%] sm:w-[100%] mx-auto ">
                    <h3 className="font-ubuntu text-xl font-semibold mb-2 mt-2">{card.title}</h3>
                    <div className="border-b-4 border-blue-500 w-12 mb-4"></div>
                    <CardContent className="text-black font-ubuntu text-base p-0">
                    {card.content}
                    </CardContent>
                </Card>
            ))}
        </div>
        </div>
  );
};

const OurProcess = () => {
  const processDetails = [
    { title: "Discovery & Strategy", content: "Understanding your business, target audience, and goals to lay the foundation for success." },
    { title: "Design & Prototyping", content: "Crafting visually stunning and user-friendly designs that capture your brand's essence." },
    { title: "Development & Testing", content: "Building a robust, scalable website while ensuring top-notch performance and security" },
    { title: "Launch & Support", content: "Seamless deployment with ongoing support to keep your website running flawlessly." }
  ];

  return (
    <div className="px-6 py-4 mt-10 sm:mt-10 sm:mb-10">
      <h2 className="text-3xl font-ubuntu font-medium px-4 sm:text-left sm:px-6 sm:mb-6 mb-4">Our Process</h2>

      <div className="grid grid-cols-1 gap-6">
        {processDetails.map((detail, index) => (
          <div key={index} className="p-6 border-t border-gray-300 font-ubuntu">
            <p className="text-lg font-ubuntu  mb-1">{`-- 0${index + 1}`}</p>
            <h3 className="text-xl font-ubuntu font-medium mb-1">{detail.title}</h3>
            <p className="text-sm font-ubuntu mb-1">{detail.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function QA() {
  return (
    <main>
      <div className="w-full h-[425px] sm:h-[450px] bg-gray-200 p-6 font-ubuntu ">
        <div className=" my-64 sm:my-64 ">
          <Card className="lg:w-[600px] sm:w-[650px] bg-gradient-to-b from-[#3c83c1] to-[#459ae5] text-white font-ubuntu ">
            <CardContent>
              <p className="text-4xl py-24 sm:py-20 font-ubuntu font-medium">QA | Automated + Manual</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="container sm:p-6 py-6 px-3 font-ubuntu mt-44 sm:mt-24 w-[90%] sm:w-[60%]">
        <p className="text-2xl px-6 font-ubuntu">We don’t just build websites – we craft digital experiences. Our solutions include responsive designs, custom development, and SEO optimization to ensure your business thrives in the online space.</p>
      </div>

      <WhatMakesUsStandOut />

      <div className="sm:px-6 px-3 py-4 mt-10 sm:mt-10 sm:mb-10 mb-10">
        <h2 className="text-3xl font-medium font-ubuntu sm:text-left px-6">Why Your Business Deserves a Professional Website</h2>
        <div className="container sm:p-6 py-6 px-3 font-ubuntu mt-10 sm:mt-2 w-[90%] sm:w-[60%]">
            <p className="text-xl px-3 sm:p-0 font-ubuntu ">Your website is the face of your brand. A professionally built site establishes credibility, attracts customers, and drives business growth. Let us create a website that reflects your excellence and helps you achieve your goals.</p>
        </div>
      </div>


      <OurProcess />

      <Footer />
    </main>
  );
}
