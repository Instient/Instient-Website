import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";
import { ArrowRight } from "lucide-react";
import ServiceSection from "@/components/ui/ServiceSection";


export default function Services() {
  return (
    <main>
      <div className="w-full h-[425px] sm:h-[450px] p-6 font-ubuntu  bg-[url('/Services.png')] bg-cover bg-center ">
          <div className=" my-64 sm:my-64 ">
            <Card className="lg:w-[600px] sm:w-[650px] bg-gradient-to-b from-[#3c83c1] to-[#459ae5] text-white font-ubuntu  opacity-95">
              <CardContent>
                <p className="text-4xl py-24 sm:py-20 font-ubuntu font-medium">Services</p>
              </CardContent>
            </Card>
          </div>
      </div>
      <div className="container sm:p-6 py-6 px-3 font-ubuntu mt-32 sm:mt-24 sm:w-[60%]">
        <p className="text-2xl px-6 font-ubuntu">We bring to the table deep development and operations know-how to bring your team's vision to life quickly, and cost effectively.</p>
      </div>

      <ServiceSection/>


      <Footer/>

    </main>
  )
}
