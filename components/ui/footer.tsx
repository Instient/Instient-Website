"use client";

import Image from 'next/image'; // Importing the optimized image component from Next.js

export function Footer() {
  return (
    <footer className="divide-y divide-gray-200 font-ubuntu">
      {/* Middle Section - Info & Links */}
      <div className="bg-gray-50 text-gray-800 py-6 px-6 text-left lg:text-left">
        <div className="container mx-auto flex flex-col lg:flex-row justify-start lg:justify-between items-start">
          <div>
            <Image
              src="/Instient.webp"
              alt="Logo"
              width={150}
              height={150}
              className="mx-auto mt-2 mb-4 lg:mx-0"
            />
          </div>


          {/* List Container with Vertical Stacking for Mobile */}
          <div className="flex flex-col lg:flex-row mt-10 lg:mt-0">
            {/* Left List */}
            <div>
              <ul className="text-sm">
                <li className='mt-2 mb-2'>Services</li>
                <li className='mt-2 mb-2'>Client Case Studies</li>
                <li className='mt-2 mb-2'>Careers</li>
                <li className='mt-2 mb-2'>News</li>
                <li className='mt-2 mb-2'>About us</li>
                <li className='mt-2 mb-2'>Contact us</li>
              </ul>
            </div>
            {/* Right List */}
            <div className="mt-8 lg:mt-0 lg:px-72">
              <ul className="text-sm">
                <li className='mt-2 mb-2'>Accessibility</li>
                <li className='mt-2 mb-2'>Cookie Policy</li>
                <li className='mt-2 mb-2'>Cookie Settings</li>
                <li className='mt-2 mb-2'>Privacy Notice</li>   
                <li className='mt-2 mb-2'>Terms of Use</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Social Media */}
      <div className="text-black bg-gray-50 py-5 px-6 text-left font-ubuntu">
        <div className="flex flex-col lg:flex-row justify-between text-sm">
          <p>&copy; Instient PVT LTD, 2025</p>
          <p>Social Media Links</p>
          {/* Add your social media icons here */}
        </div>
      </div>
    </footer>
  );
}
