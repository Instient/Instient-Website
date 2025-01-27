import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="min-h-96  p-6 bg-gray-200 font-ubuntu">
        <div className=" flex my-64 " >
          <Card className="w-[647px] bg-gradient-to-b from-[#3c83c1] to-[#215E92] text-white ">
            <CardHeader>
              <CardTitle className="text-base font-light">---- Case Study</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl py-3 font-semibold ">Heat Fleet</p>
              <p className="text-xl font-thin" >Electronic fuel Marketplace</p>
            </CardContent>
            <CardFooter className="flex justify-end">
            <Button className=" bg-transparent rounded-full border-2 flex items-center gap-2">
              Discover more <ArrowRight className="w-4 h-4" />
            </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  );
}
