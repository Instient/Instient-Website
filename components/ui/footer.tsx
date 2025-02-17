"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const footerRoutes = [
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/casestudies" },
    { name: "Careers", href: "/careers" },
    { name: "News", href: "/news" },
    { name: "About us", href: "/aboutus" },
    { name: "Contact us", href: "/contactus" },
  ];

  const policyLinks = [
    { name: "Accessibility", href: "/accessibility" },
    { name: "Cookie Policy", href: "/cookiepolicy" },
    { name: "Cookie Settings", href: "/cookiesettings" },
    { name: "Privacy Notice", href: "/privacynotice" },
    { name: "Terms of Use", href: "/termsofuse" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/instient", color: "blue-500" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/instientllc", color: "pink-500" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@Instient", color: "red-500" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/instient", color: "blue-700" },
  ];

  return (
    <footer className="divide-y divide-gray-200 font-ubuntu">
      {/* Middle Section - Info & Links */}
      <div className="bg-gray-50 text-gray-800 py-6 px-6 text-left lg:text-left">
        <div className="container mx-auto flex flex-col lg:flex-row justify-start lg:justify-between items-start">
          <div>
            <Image
              src="/Instient Logo.svg"
              alt="Logo"
              width={150}
              height={150}
              className="mx-auto mt-2 mb-4 lg:mx-0"
            />
          </div>

          {/* List Container with Vertical Stacking for Mobile */}
          <div className="flex flex-col lg:flex-row mt-10 lg:mt-0">
            <div>
              <ul className="text-base">
                {footerRoutes.map((route) => (
                  <li key={route.href} className="mt-2 mb-2">
                    <Link href={route.href} className="hover:text-primary transition">
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 lg:mt-0 lg:px-72">
              <ul className="text-base">
                {policyLinks.map((policy) => (
                  <li key={policy.href} className="mt-2 mb-2">
                    <Link href={policy.href} className="hover:text-primary transition">
                      {policy.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Social Media */}
      <div className="text-black bg-gray-50 py-5 px-6 text-left font-ubuntu">
        <div className="flex flex-col lg:flex-row justify-between text-base relative">
          <p>&copy; Instient PVT LTD, 2025</p>
          {/* Social Media Icons */}
          <div className="flex flex-col items-center">
            {hoveredIcon && (
              <div className="absolute -top-9 text-black-600 bg-gray-200 px-2 py-1 rounded-full font-ubuntu text-xs transition-opacity">
                {hoveredIcon}
              </div>
            )}
            <div className="flex space-x-4 mt-2 lg:mt-0">
              {socialLinks.map(({ name, icon: Icon, href, color }) => (
                <Link key={name} href={href} target="_blank" aria-label={name}>
                  <div
                    className={`p-2 bg-gray-200 rounded-full hover:text-sky-700 transition-all duration-300 transform hover:scale-110`}
                    onMouseEnter={() => setHoveredIcon(name)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <Icon size={20} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
