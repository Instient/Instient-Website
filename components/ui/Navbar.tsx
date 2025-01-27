"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Menu, X } from "lucide-react"; // For hamburger and close icons

// Define your routes for the navbar
const routes = [
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "About us",
    href: "/aboutus",
  },
];

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Navbar({ className, ...props }: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-white shadow-md">
      <ScrollArea className="max-w-[100%]">
        <div
          className={cn(
            "flex px-4 py-4 items-center justify-between lg:space-x-8",
            className
          )}
          {...props}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-4 px-4">
            <Image
              src="/Instient.png" // Adjust the logo file name and path if needed
              alt="Logo"
              width={100} // Adjust width
              height={50} // Adjust height
            />
          </Link>

          {/* Hamburger Menu Button for Mobile */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-md text-black-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Section for Desktop */}
          <div className="hidden lg:flex flex-1 justify-between items-center">
            {/* Left Routes */}
            <div className="flex space-x-1">
              {routes.map((route) => (
                <NavLink
                  key={route.href}
                  route={route}
                  isActive={pathname === route.href}
                />
              ))}
            </div>

            {/* Contact Us Link */}
            <div>
              <Link
                href="/contactus"
                className={cn(
                  "flex h-7 items-center justify-center rounded-full px-4 text-center text-base font-ubuntu text-black-600 transition-colors hover:text-primary",
                  pathname === "/contactus" && "bg-gray-100 text-primary"
                )}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col space-y-2 px-6 py-4 text-left">
            {routes.map((route) => (
              <NavLink
                key={route.href}
                route={route}
                isActive={pathname === route.href}
              />
            ))}
            <Link
              href="/contactus"
              className={cn(
                "flex h-7 items-center justify-start rounded-full px-4 text-base font-ubuntu text-black-600 transition-colors hover:text-primary",
                pathname === "/contactus" && "bg-gray-100 text-primary"
              )}
            >
              Contact us
            </Link>
          </div>
        )}

        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}

function NavLink({
  route,
  isActive,
}: {
  route: { name: string; href: string };
  isActive: boolean;
}) {
  return (
    <Link
      href={route.href}
      className={cn(
        "flex h-7 items-center justify-start rounded-full px-4 text-base font-ubuntu text-black-600 transition-colors hover:text-primary",
        isActive && "bg-gray-100 text-primary"
      )}
    >
      {route.name}
    </Link>
  );
}
