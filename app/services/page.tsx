import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";
import { ArrowRight } from "lucide-react";


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

      <div className="sm:px-6 px-3 py-4 mt-10 sm:mt-10 sm:mb-16 mb-10 ">
        <h2 className="text-3xl font-ubuntu  sm:text-left px-6  sm:mb-16">Explore Our Services</h2>

        <div className="py-10 font-ubuntu relative sm:mt-0">
          {/* Parent Container */}
          <div className="flex flex-col sm:flex-row justify-between sm:justify-start items-center relative z-10 mt-16 sm:mt-0 gap-32">
            
            {/* First Card with Underlap and Shift Down */}
            <div className="relative w-[90%] sm:w-[407px]">
              {/* Blue Div Underlap */}
              <div className="absolute top-[25%] sm:top-1/3 left-1/2 sm:left-[50%] w-full h-[300px] bg-gray-200 -translate-y-1/2 -translate-x-1/2 z-0 rounded-md"></div>

              {/* Card Component shifted down */}
              <Card className="relative py-4 shadow-xl rounded-lg bg-white z-10 mt-16 w-[90%] mx-auto">
                <CardContent>
                  <p className="text-2xl py-3 font-ubuntu font-extralight">Mobile App <br/> Development</p>
                </CardContent>
                <CardFooter className="flex justify-end sm:py-6 pb-6">
                  <Link href="/services/mobile-app-development">
                  <Button className="text-black border-black  rounded-full flex items-center font-ubuntu gap-2">
                     <ArrowRight className="w-4 h-4" />
                  </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            {/* Second Card */}
            <div className="relative w-[90%] sm:w-[407px]">
              <div className="absolute top-[25%] sm:top-1/3 left-1/2 sm:left-[50%] w-full h-[300px] bg-gray-200 -translate-y-1/2 -translate-x-1/2 z-0 rounded-md"></div>

              <Card className="relative py-4 shadow-xl rounded-lg bg-white z-10 mt-16 w-[90%] mx-auto">
                <CardContent>
                  <p className="text-2xl py-3 font-ubuntu font-extralight">Website <br /> Development</p>
                </CardContent>
                 <CardFooter className="flex justify-end sm:py-6 pb-6">
                    <Link href="/services/website-development">
                      <Button className="text-black border-black rounded-full flex items-center font-ubuntu gap-2">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                 </CardFooter>
              </Card>
            </div>

            {/* Third Card */}
            <div className="relative w-[90%] sm:w-[407px]">
              <div className="absolute top-[25%] sm:top-1/3 left-1/2 sm:left-[50%] w-full h-[300px] bg-gray-200 -translate-y-1/2 -translate-x-1/2 z-0 rounded-md"></div>

              <Card className="relative py-4 shadow-xl rounded-lg bg-white z-10 mt-16 w-[90%] mx-auto">
                <CardContent>
                  <p className="text-2xl py-3 font-ubuntu font-extralight">Cloud + <br/> DevOps</p>
                </CardContent>
                <CardFooter className="flex justify-end sm:py-6 pb-6">
                  <Link href="/services/cloud+devops">
                  <Button className="text-black border-black  rounded-full flex items-center font-ubuntu gap-2">
                      <ArrowRight className="w-4 h-4" />
                  </Button>
                  </Link>
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
                <p className="text-2xl py-3 font-ubuntu font-extralight">QA | Automated + Manual</p>
              </CardContent>
              <CardFooter className="flex justify-end sm:py-6 pb-6">
                 <Link href="/services/QA">
                  <Button className="text-black  rounded-full flex items-center font-ubuntu gap-2">
                     <ArrowRight className="w-4 h-4" />
                  </Button>
                  </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Second Card (Center if Alone, Right if Another Card Exists) */}
          <div className="relative w-[90%] sm:w-[407px]">
            <div className="absolute top-[25%] sm:top-1/3 left-1/2 sm:left-[50%] w-full h-[300px] bg-gray-200 -translate-y-1/2 -translate-x-1/2 z-0 rounded-md"></div>

            <Card className="relative py-4 shadow-xl rounded-lg bg-white z-10 mt-16 w-[90%] mx-auto">
              <CardContent>
                <p className="text-2xl py-3 font-ubuntu font-extralight">3D Rendering + Animation</p>
              </CardContent>
              <CardFooter className="flex justify-end sm:py-6 pb-6">
               <Link href="/services/3d-rendering">
                  <Button className="text-black rounded-full flex items-center font-ubuntu gap-2">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                </Link>
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
