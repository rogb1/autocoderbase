"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import emailjs from "emailjs-com";

export function MainNav() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      // Initial check
      checkIsMobile();
      
      // Add event listener for window resize
      window.addEventListener('resize', checkIsMobile);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkIsMobile);
    }
  }, []);

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setIsMessageSent(true);
          setTimeout(() => {
            setIsContactOpen(false);
          }, 2000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <>
      <nav className="flex items-center justify-between w-full py-4 px-4 md:px-6 bg-[#141415] text-gray-200 shadow-md relative z-20">
        {/* Leftmost Name */}
        <div className="flex items-center gap-2 text-lg font-bold text-gray-200">
          <span className="w-3 h-3 bg-[#a172f8] rounded-full"></span>
          Roger Basantes
        </div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            className="block md:hidden z-20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            {/* Centered Navigation */}
            <div className="flex items-center gap-8">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="relative text-gray-200 hover:text-[#f4cda6] transition font-medium group"
                >
                  {route.label}
                  {/* Underline Effect */}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f4cda6] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              {/* Contact Button */}
              <button
                onClick={() => {
                  setIsContactOpen(true);
                  setIsMessageSent(false);
                }}
                className="relative text-gray-200 hover:text-[#f4cda6] transition font-medium group"
              >
                Contact
                {/* Underline Effect */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f4cda6] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#a172f8] text-black font-semibold hover:bg-[#8e5edc] transition"
            >
              Resume
            </a>
          </>
        )}

        {/* Mobile Navigation */}
        {isMobile && mobileMenuOpen && (
          <div className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-[#141415] bg-opacity-95">
            <div className="flex flex-col items-center gap-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="text-xl text-gray-200 hover:text-[#f4cda6] transition font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
              {/* Contact Button */}
              <button
                onClick={() => {
                  setIsContactOpen(true);
                  setIsMessageSent(false);
                  setMobileMenuOpen(false);
                }}
                className="text-xl text-gray-200 hover:text-[#f4cda6] transition font-medium"
              >
                Contact
              </button>
              
              {/* Resume Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2 rounded-full bg-[#a172f8] text-black font-semibold hover:bg-[#8e5edc] transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-[#1f1f1f] text-[#f4cda6] rounded-lg shadow-lg p-5 md:p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-[#a172f8] mb-4">Contact Me</h2>
            {isMessageSent ? (
              <div className="text-center text-green-500 font-medium">
                Message sent successfully!
              </div>
            ) : (
              <form onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-[#141415] text-[#f4cda6] focus:outline-none focus:ring focus:ring-[#a172f8]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-[#141415] text-[#f4cda6] focus:outline-none focus:ring focus:ring-[#a172f8]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-[#141415] text-[#f4cda6] focus:outline-none focus:ring focus:ring-[#a172f8]"
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsContactOpen(false)}
                    className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-[#a172f8] hover:bg-[#8e5edc] text-white"
                  >
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}