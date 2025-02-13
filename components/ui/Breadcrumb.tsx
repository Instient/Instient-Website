"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronDown, ArrowRight, ChevronLeft } from "lucide-react";
import ServicesBreadcrumb from "./ServicesBreadcrumb";
import CaseStudiesBreadcrumb from "./CaseStudiesBreadcrumb";
import NewsBreadcrumb from "./NewsBreadcrumb";

const routeMap: Record<string, string> = {
  services: "Services",
  casestudies: "Case Studies",
  careers: "Careers",
  news: "News",
  aboutus: "About Us",
  contactus: "Contact Us",
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment !== "");

  if (pathname === "/") return null; // Hide breadcrumb on home page

  const previousPage =
    segments.length > 1
      ? `/${segments.slice(0, segments.length - 1).join("/")}`
      : "/";

  const previousLabel =
    segments.length > 1
      ? routeMap[segments[segments.length - 2]] ||
        decodeURIComponent(segments[segments.length - 2]).replace(/-/g, " ")
      : "Home";

  return (
    <nav className="bg-gray-100 shadow-md w-full px-8 py-3 flex justify-between items-center">
      {/* Desktop View */}
      <div className="hidden md:flex items-center space-x-2 text-base font-ubuntu text-black max-w-7xl">
        <Link href="/" className="hover:text-gray-700 font-medium">Home</Link>
        {segments.length > 0 && <ChevronRight className="w-5 h-5" />}
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const label = routeMap[segment.toLowerCase()] || decodeURIComponent(segment).replace(/-/g, " ");

          return (
            <div key={href} className="relative flex items-center space-x-2">
              <Link href={href} className="capitalize hover:text-gray-700 font-medium">
                {label}
              </Link>

              {/* Dynamic Subpage Dropdowns */}
              {segment === "services" && <ServicesBreadcrumb />}
              {segment === "casestudies" && <CaseStudiesBreadcrumb />}
              {segment === "news" && <NewsBreadcrumb />}

              {index < segments.length - 1 && <ChevronRight className="w-5 h-5" />}
            </div>
          );
        })}
      </div>

      {/* Mobile View */}
     {/* Mobile View */}
      <div className="md:hidden flex items-center w-full justify-between">
        <Link
          href={previousPage}
          className="flex items-center text-base sm:text-sm font-medium text-black"
        >
          <ChevronLeft className="w-5 h-5" />
          {previousLabel}
        </Link>
      </div>


      {/* Get in Touch Button (visible on all views) */}
      <Link
        href="/contactus"
        className="bg-gray-200 text-black px-6 py-2 w-full sm:w-auto rounded-md flex items-center justify-center text-sm font-medium shadow hover:bg-gray-300 transition-all"
      >
        Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
      </Link>

    </nav>
  );
}
