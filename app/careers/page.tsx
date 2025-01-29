import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";
import { ArrowRight } from "lucide-react";


export default function Careers() {
  return (
    <main>
      <div className="w-full h-[425px] sm:h-[450px] p-6 font-ubuntu  bg-[url('/Careers.png')] bg-cover bg-center ">
          <div className=" my-64 sm:my-64 ">
            <Card className="lg:w-[600px] sm:w-[650px] bg-gradient-to-b from-[#3c83c1] to-[#459ae5] text-white font-ubuntu  opacity-95">
              <CardContent>
                <p className="text-4xl py-24 sm:py-20 font-ubuntu font-medium">Careers</p>
              </CardContent>
            </Card>
          </div>
      </div>
      <div className="container sm:p-6 py-6 px-3 font-ubuntu mt-32 sm:mt-24 sm:w-[60%]">
        <p className="text-2xl px-6 font-ubuntu">Join a team of entrepreneurial technology enthusiasts to create cutting-edge products that transform commerce.</p>
      </div>

      <div className="sm:px-6 px-3 py-4 mt-10 sm:mt-10 sm:mb-16 mb-10 ">
        <h2 className="text-3xl font-ubuntu  sm:text-left px-6  sm:mb-16">Explore Instient</h2>

        <div className="py-10 font-ubuntu relative sm:mt-0">
          {/* Parent Container */}
          <div className="flex flex-col sm:flex-row justify-between sm:justify-start items-center relative z-10 mt-24 sm:mt-0 gap-32">
            
            {/* First Card with Underlap and Shift Down */}
            <div className="relative w-[90%] sm:w-[407px]">
              {/* Blue Div Underlap */}
              <div className="absolute top-[25%] sm:top-1/3 left-1/2 sm:left-[50%] w-full h-[300px] bg-gray-200 -translate-y-1/2 -translate-x-1/2 z-0 rounded-md"></div>

              {/* Card Component shifted down */}
              <Card className="relative py-4 shadow-xl rounded-lg bg-white z-10 mt-16 w-[90%] mx-auto">
                <CardContent>
                  <p className="text-2xl py-3 font-ubuntu font-extralight">Why join Instient</p>
                </CardContent>
                <CardFooter className="flex justify-end sm:py-6 pb-6">
                  <Button className="text-black border-black  rounded-full flex items-center font-ubuntu gap-2">
                     <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Second Card */}
            <div className="relative w-[90%] sm:w-[407px]">
              <div className="absolute top-[25%] sm:top-1/3 left-1/2 sm:left-[50%] w-full h-[300px] bg-gray-200 -translate-y-1/2 -translate-x-1/2 z-0 rounded-md"></div>

              <Card className="relative py-4 shadow-xl rounded-lg bg-white z-10 mt-16 w-[90%] mx-auto">
                <CardContent>
                  <p className="text-2xl py-3 font-ubuntu font-extralight">Life at Instient</p>
                </CardContent>
                <CardFooter className="flex justify-end sm:py-6 pb-6">
                  <Button className="text-black border-black  rounded-full flex items-center font-ubuntu gap-2">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Third Card */}
            <div className="relative w-[90%] sm:w-[407px]">
              <div className="absolute top-[25%] sm:top-1/3 left-1/2 sm:left-[50%] w-full h-[300px] bg-gray-200 -translate-y-1/2 -translate-x-1/2 z-0 rounded-md"></div>

              <Card className="relative py-4 shadow-xl rounded-lg bg-white z-10 mt-16 w-[90%] mx-auto">
                <CardContent>
                  <p className="text-2xl py-3 font-ubuntu font-extralight">Job Openings</p>
                </CardContent>
                <CardFooter className="flex justify-end sm:py-6 pb-6">
                  <Button className="text-black border-black  rounded-full flex items-center font-ubuntu gap-2">
                      <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
          </div>
        </div>

        <div className="py-10 mt-10 font-ubuntu relative sm:mt-10">
        {/* Parent Container */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center relative z-10  sm:mt-0 gap-32">
          
          {/* First Card */}
          <div className="relative w-[90%] sm:w-[407px]">
            {/* Blue Div Underlap */}
            <div className="absolute top-[25%] sm:top-1/3 left-1/2 sm:left-[50%] w-full h-[300px] bg-gray-200 -translate-y-1/2 -translate-x-1/2 z-0 rounded-md"></div>

            {/* Card Component */}
            <Card className="relative py-4 shadow-xl rounded-lg bg-white z-10 mt-16 w-[90%] mx-auto">
              <CardContent>
                <p className="text-2xl py-3 font-ubuntu font-extralight">Internships</p>
              </CardContent>
              <CardFooter className="flex justify-end sm:py-6 pb-6 ">
                  <Button className="text-black  rounded-full flex items-center font-ubuntu gap-2">
                     <ArrowRight className="w-4 h-4" />
                  </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      </div>


      <Footer/>

    </main>
  )
}
