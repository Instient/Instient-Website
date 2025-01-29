import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";
import NewsSection from "@/components/ui/NewsSection";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <main>
    <div className="w-full h-[425px] sm:h-[450px] bg-gray-200 p-6 font-ubuntu ">
        <div className=" my-64 sm:my-64 ">
          <Card className="lg:w-[600px] sm:w-[650px] bg-gradient-to-b from-[#3c83c1] to-[#459ae5] text-white font-ubuntu ">
            <CardContent>
              <p className="text-4xl py-24 sm:py-20 font-ubuntu font-medium">Contact us</p>
            </CardContent>
          </Card>
        </div>
    </div>
    <div className="container sm:p-6 py-6 px-3 font-ubuntu mt-32 sm:mt-24 sm:w-[60%]">
      <p className="text-2xl px-6 font-ubuntu">Thank you for your interest in Instient. Whether you're a client, prospective team member, journalist, analyst, or investor, we've made it easy for you to connect with us. Find the most convenient way to reach out below.</p>
    </div>

    <div className="px-6 py-4 mt-10 sm:mt-10">
      <h2 className="text-3xl font-ubuntu px-4 sm:text-left sm:px-6 sm:mb-4 mb-4">Global contact details</h2>

      <div className="p-6 border-t border-gray-300 font-ubuntu">
        <h3 className="text-xl font-ubuntu font-semibold mb-1">Head Office</h3>
        <p className="text-sm font-ubuntu mb-1">Looking forward to the intersection of investing & AI.</p>
        <p className="text-sm font-ubuntu mb-1 ">T. +1 203 614 9590</p>
        <Button
          size="sm"
          className="rounded-full border-black border-2 text-black font-ubuntu bg-white mt-2"
        >
          Head office on Google maps <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="p-6 border-t border-gray-300 font-ubuntu">
        <h3 className="text-xl font-ubuntu font-semibold mb-1">Job Seekers</h3>
        <p className="text-sm font-ubuntu mb-1">Join a team of entrepreneurial technology enthusiasts to create cutting-edge products that transform commerce.</p>
        <Button
          size="sm"
          className="rounded-full border-black border-2 text-black font-ubuntu bg-white mt-2"
        >
          Visit our Careers page <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="p-6 border-t border-gray-300 font-ubuntu">
        <h3 className="text-xl font-ubuntu font-semibold mb-1">Clients</h3>
        <p className="text-sm font-ubuntu mb-1">We bring to the table deep development and operations know-how to bring your team‘s vision to life quickly, and cost effectively.</p>
        <Button
          size="sm"
          className="rounded-full border-black border-2 text-black font-ubuntu bg-white mt-2"
        >
          Our Services <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>


    <div className="w-full px-6 py-6 mt-10 sm:mt-10 bg-gradient-to-b from-[#3c83c1] to-[#459ae5] text-white font-ubuntu mb-6 relative">
      <p className="text-3xl font-ubuntu font-semibold mb-1">Other enquiries</p>
      <p className="text-lg font-ubuntu">For all other enquiries, please complete this form and a member of our team will be in touch.</p>
      
      {/* Button positioned for desktop and moved below in mobile */}
      <Button
        size="lg"
        className="absolute top-1/2 right-6 transform -translate-y-1/2 rounded-full text-black font-ubuntu bg-white hidden sm:inline-flex"
      >
        Get in touch <ArrowRight className="w-4 h-4" />
      </Button>
      
      <Button
        size="lg"
        className="mt-4 rounded-full text-black font-ubuntu bg-white sm:hidden"
      >
        Get in touch <ArrowRight className="w-4 h-4" />
      </Button>
    </div>



    <Footer/>

  </main>
  )
}
