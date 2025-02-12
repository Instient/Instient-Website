"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment !== "");

  // Hide breadcrumb on the home page
  if (pathname === "/") return null;

  return (
    <nav className="bg-gray-100 shadow-md w-full px-8 py-3">
      <div className="flex items-center space-x-2 text-base font-ubuntu text-black max-w-7xl mx-auto">
        <Link href="/" className="hover:text-gray-700 font-medium">
          Home
        </Link>
        {segments.length > 0 && <ChevronRight className="w-5 h-5" />}
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const label = decodeURIComponent(segment);

          return (
            <div key={href} className="flex items-center space-x-2">
              <Link href={href} className="capitalize hover:text-gray-700 font-medium">
                {label}
              </Link>
              {index < segments.length - 1 && <ChevronRight className="w-5 h-5" />}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
