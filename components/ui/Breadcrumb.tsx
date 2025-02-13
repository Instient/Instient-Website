"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronDown, ArrowRight } from "lucide-react";
import ServicesBreadcrumb from "./ServicesBreadcrumb";
import CaseStudiesBreadcrumb from "./CaseStudiesBreadcrumb";
import NewsBreadcrumb from "./NewsBreadcrumb";

// Define route names for consistency
const routeMap: Record<string, string> = {
  services: "Services",
  casestudies: "Case Studies",
  careers: "Careers",
  news: "News",
  aboutus: "About Us",
  contactus: "Contact Us",
};

// Manually defined subpages for Careers and About Us
const careersSubpages = [
  { name: "Job Openings", href: "/careers/job-openings" },
  { name: "Internships", href: "/careers/internships" },
  { name: "Life at Instient", href: "/careers/life-at-instients" },
  { name: "Why join Instients", href: "/careers/why-join-instients" },
];

const aboutUsSubpages = [
  { name: "Management and Governance", href: "/aboutus/management-&-governance" },
  { name: "Technology Partners", href: "/aboutus/technology-partners" },
  { name: "Who we are", href: "/aboutus/who-we-are" },
];

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment !== "");

  if (pathname === "/") return null; // Hide breadcrumb on home page

  return (
    <nav className="bg-gray-100 shadow-md w-full px-8 py-3 flex justify-between items-center">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-base font-ubuntu text-black max-w-7xl">
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

              {/* Dropdowns for dynamic and manually defined subpages */}
              {segment === "services" && <ServicesBreadcrumb />}
              {segment === "casestudies" && <CaseStudiesBreadcrumb />}
              {segment === "news" && <NewsBreadcrumb />}

              {/* Careers Dropdown */}
              {segment === "careers" && (
                <div className="relative group cursor-pointer">
                  <ChevronDown className="w-4 h-4 ml-1" />
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity">
                    {careersSubpages.map((subpage) => (
                      <Link key={subpage.href} href={subpage.href} className="block px-4 py-2 text-sm text-black hover:bg-gray-200">
                        {subpage.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* About Us Dropdown */}
              {segment === "aboutus" && (
                <div className="relative group cursor-pointer">
                  <ChevronDown className="w-4 h-4 ml-1" />
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity">
                    {aboutUsSubpages.map((subpage) => (
                      <Link key={subpage.href} href={subpage.href} className="block px-4 py-2 text-sm text-black hover:bg-gray-200">
                        {subpage.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {index < segments.length - 1 && <ChevronRight className="w-5 h-5" />}
            </div>
          );
        })}
      </div>

      {/* Get in Touch Button */}
      <Link
        href="/contactus"
        className="bg-gray-200 text-black px-6 py-2 rounded-md flex items-center text-sm font-medium shadow hover:bg-blue-700 transition-all"
      >
        Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </nav>
  );
}
