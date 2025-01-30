
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";


export default function NextjsVSReactNative() {
  return (
    <main>
      <div className="w-full h-[425px] sm:h-[450px] bg-gray-200 p-6 font-ubuntu ">
        <div className=" my-64 sm:my-64 ">
          <Card className="lg:w-[600px] sm:w-[650px] bg-gradient-to-b from-[#3c83c1] to-[#459ae5] text-white font-ubuntu ">
            <CardHeader>
                <CardTitle className="text-base font-light">---- Case Study</CardTitle>
            </CardHeader>
            <CardContent >
              <p className="text-4xl py-6 sm:py-0 mb-20 sm:mb-24  font-ubuntu font-medium">Next.js vs. React Native</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="container sm:p-6 py-6 px-3 font-ubuntu mt-44 sm:mt-24 w-[90%] sm:w-[60%]" >
        <p className="text-2xl px-6 font-ubuntu sm:hidden">We don’t just build websites – we craft digital experiences. Our solutions include responsive designs, custom development, and SEO optimization to ensure your business thrives in the online space.</p>
        <p className="text-2xl px-6 font-ubuntu hidden sm:block">When building modern applications, developers often face the decision of choosing the right framework. Two popular options, Next.js and React Native, cater to different platforms but share a foundation: React. In this case study, we’ll explore the pros and cons of each, their use cases, and how to decide which is better for your project.</p>
      </div>


        <div className="sm:px-6 px-3 py-4 mt-10 sm:mt-10 sm:mb-10 mb-10">
            <h2 className="text-3xl font-medium font-ubuntu sm:text-left px-6">What is Next.js?</h2>
            <div className="container sm:p-6 py-6 px-3 font-ubuntu mt-10 sm:mt-2 w-[90%] sm:w-[60%]">
                <p className="text-xl px-3 sm:p-0 font-ubuntu ">
                Next.js is a React-based framework designed for server-side rendering (SSR) and static site generation (SSG). It’s highly optimized for web development, offering features like:
                </p>
                <ul className="text-xl list-disc px-3 sm:p-0 ml-4 font-ubuntu">
                <li>SEO-friendly architecture</li>
                <li>Built-in routing system</li>
                <li>Easy data fetching with APIs</li>
                </ul>
                <p className="text-xl px-3 sm:p-0 font-ubuntu ">
                 Best for:
                </p>
                <ul className="text-xl list-disc px-3 sm:p-0 ml-4 font-ubuntu">
                <li className="text-xl">Content-driven websites (e.g., blogs, e-commerce).</li>
                <li className="text-xl">Web applications requiring high performance and SEO.</li>
                </ul>
            </div>
        </div>


      <div className="sm:px-6 px-3 py-4 mt-10 sm:mt-10 sm:mb-10 mb-10">
        <h2 className="text-3xl font-medium font-ubuntu sm:text-left px-6">What is React Native?</h2>
        <div className="container sm:p-6 py-6 px-3 font-ubuntu mt-10 sm:mt-2 w-[90%] sm:w-[60%]">
                <p className="text-xl px-3 sm:p-0 font-ubuntu ">
                React Native, on the other hand, is a framework for building cross-platform mobile applications. It allows developers to write one codebase that runs on iOS and Android, saving time and resources.
                </p>
                <p className="text-xl px-3 sm:p-0 font-ubuntu ">
                 Best for:
                </p>
                <ul className="text-xl list-disc px-3 sm:p-0 ml-4 font-ubuntu">
                <li className="text-xl">Mobile-first products.</li>
                <li className="text-xl">Apps requiring native-like performance and features.</li>
                </ul>
                
            </div>
      </div>


      <div className="sm:px-6 px-3 py-4 mt-10 sm:mt-10 sm:mb-10 mb-10">
        <h2 className="text-3xl font-medium font-ubuntu sm:text-left px-6">Conclusion</h2>
        <div className="container sm:p-6 py-6 px-3 font-ubuntu mt-10 sm:mt-2 w-[90%] sm:w-[60%]">
            <p className="text-xl px-3 sm:p-0 font-ubuntu ">The choice between Next.js and React Native depends on your project’s goals and the target audience. For web apps or SEO-heavy projects, Next.js is the clear winner. However, if mobile-first design and native-like functionality are your priorities, React Native is your best bet.</p>
        </div>
      </div>

      <Footer />
    </main>
  );
}

