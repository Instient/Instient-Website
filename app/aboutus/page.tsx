import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";
import { ArrowRight, ArrowUp } from "lucide-react";

export default function About() {
  return (
    <main>
    <div className="w-full h-[425px] sm:h-[450px] p-6 font-ubuntu  bg-[url('/Careers.png')] bg-cover bg-center ">
        <div className=" my-64 sm:my-64 ">
          <Card className="lg:w-[600px] sm:w-[650px] bg-gradient-to-b from-[#3c83c1] to-[#459ae5] text-white font-ubuntu  opacity-95">
            <CardContent>
              <p className="text-4xl py-24 sm:py-20 font-ubuntu font-medium">About us</p>
            </CardContent>
          </Card>
        </div>
    </div>
    <div className="container sm:p-6 py-6 px-3 font-ubuntu mt-32 sm:mt-24 sm:w-[60%]">
      <p className="text-2xl px-6 font-ubuntu">Instient partners with companies to transform and manage their business by unlocking the value of technology.</p>
    </div>


    <div className="px-6 py-4 mt-8 sm:mt-10 mb-5">
          <div className="py-10 sm:py-20 font-ubuntu relative sm:mt-0">
            {/* Parent Container */}
            <div className="flex flex-col sm:flex-row justify-between items-center relative z-10 mt-24 sm:mt-0 ">
              {/* Card Component */}
              <Card className="w-[90%] sm:w-[757px] p-4 shadow-xl rounded-lg bg-white ">
                <CardContent>
                  <p className="text-2xl py-3 font-ubuntu font-extralight">2025 Vietnam Investor Exposition</p>
                  <p className="text-base font-ubuntu font-thin">Looking forward to the intersection of investing & AI.</p>
                </CardContent>
                <CardFooter className="flex justify-end py-6">

                </CardFooter>
              </Card>
            </div>

            {/* Blue Div Underlapping the Card */}
            <div className="absolute top-[35%] sm:top-1/2 left-1/2 sm:left-[72%] w-full sm:w-[807px] h-[300px] bg-gray-200 -translate-y-1/2 -translate-x-1/2 z-0 rounded-md"></div>
          </div>
    </div>


   <div className="flex sm:flex-nowrap flex-wrap justify-start px-2 py-2 sm:gap-52 sm:py-6">
      {/* First Stat Card */}
      <div className="flex flex-col px-6 py-4 w-1/2 sm:w-auto">
        <h1 className="text-6xl font-bold font-ubuntu">230K</h1>
        <hr className="w-8 border-t-2 border-blue-400 my-1" />
        <div className="flex items-center gap-1 text-sm font-medium ">
          <p className="font-ubuntu text-2xl">Title</p>
        </div>
      </div>

      {/* Second Stat Card */}
      <div className="flex flex-col px-6 py-4 w-1/2 sm:w-auto">
        <h1 className="text-6xl font-bold font-ubuntu">230K</h1>
        <hr className="w-8 border-t-2 border-blue-400 my-1" />
        <div className="flex items-center gap-1 text-sm font-medium ">
          <p className="font-ubuntu text-2xl">Title</p>
        </div>
      </div>

      {/* Third Stat Card */}
      <div className="flex flex-col px-6 py-4 w-1/2 sm:w-auto">
        <h1 className="text-6xl font-bold font-ubuntu">230K</h1>
        <hr className="w-8 border-t-2 border-blue-400 my-1" />
        <div className="flex items-center gap-1 text-sm font-medium ">
          <p className="font-ubuntu text-2xl">Title</p>
        </div>
      </div>
    </div>








    <div className="sm:px-6 px-3 py-4 mt-2 sm:mt-10 sm:mb-16 mb-10 ">

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
                <p className="text-2xl py-3 font-ubuntu font-extralight">About us</p>
              </CardContent>
              <CardFooter className="flex justify-end py-6">
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
                <p className="text-2xl py-3 font-ubuntu font-extralight">About us</p>
              </CardContent>
              <CardFooter className="flex justify-end py-6">
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
                <p className="text-2xl py-3 font-ubuntu font-extralight">About us</p>
              </CardContent>
              <CardFooter className="flex justify-end py-6">
                <Button className="text-black border-black  rounded-full flex items-center font-ubuntu gap-2">
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
