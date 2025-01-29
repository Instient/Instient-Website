import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <main>
        <div className="w-full h-[425px] sm:h-[670px] p-6 bg-gray-200 font-ubuntu">
          <div className="flex my-64 sm:my-64 ">
            <Card className="w-full sm:w-[650px] bg-gradient-to-b from-[#3c83c1] to-[#215E92] text-white">
              <CardHeader>
                <CardTitle className="text-base font-light">---- Case Study</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl py-3 font-semibold">Heat Fleet</p>
                <p className="text-xl font-thin">Electronic fuel Marketplace</p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-transparent rounded-full border-2 flex items-center gap-2">
                  Discover more <ArrowRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="px-6 py-4 mt-44 sm:mt-10 mb-10">
          <h2 className="px-2 sm:px-10 font-ubuntu text-3xl">Last news</h2>

          <div className="pt-20 pb-10 font-ubuntu relative sm:mt-0">
            {/* Parent Container */}
            <div className="flex flex-col sm:flex-row justify-between items-center relative z-10 mt-24 sm:mt-0 ">
              {/* Card Component */}
              <Card className="w-[90%] sm:w-[757px] sm:p-4 p-2 shadow-xl rounded-lg bg-white ">
                <CardContent>
                  <p className="text-2xl py-3 font-ubuntu font-extralight">2025 Vietnam Investor Exposition</p>
                  <p className="text-base font-ubuntu font-thin">Looking forward to the intersection of investing & AI.</p>
                </CardContent>
                <CardFooter className="flex justify-end py-6">
                  <Button className="text-black border-black border-2 rounded-full flex items-center font-ubuntu gap-2">
                    Read more <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Blue Div Underlapping the Card */}
            <div className="absolute top-[40%] sm:top-1/2 left-1/2 sm:left-[72%] w-full sm:w-[807px] h-[300px] bg-gray-200 -translate-y-1/2 -translate-x-1/2 z-0 rounded-md"></div>
          </div>
          <div className="sm:px-10">
            <Button className="text-black border-black border-2 rounded-full flex items-center font-ubuntu gap-2">
              See all news <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

