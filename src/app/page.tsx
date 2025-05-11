"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/ui/footer";

export default function Home() {
  const [typingComplete, setTypingComplete] = useState(false);

  const techStack = [
    { name: "Python", icon: "/python.png" },
    { name: "Java", icon: "/java.png" },
    { name: "JavaScript", icon: "/js.png" },
    { name: "HTML", icon: "/html.png" },
    { name: "CSS", icon: "/css.png" },
    { name: "React", icon: "/react.png" },
    { name: "Node.js", icon: "/nodejs.png" },
  ];

  // Just handle typing animation
  useEffect(() => {
    // Set typing animation to complete after the animation duration
    const typingTimeout = setTimeout(() => {
      setTypingComplete(true);
    }, 2500); // 2.5s is enough time for typing animations to complete
    
    return () => {
      clearTimeout(typingTimeout);
    }; // Cleanup timeout
  }, []);

  return (
    <div className="min-h-screen bg-[#141415] text-[#f4cda6] relative overflow-x-hidden flex flex-col">
      {/* Grid Background */}
      <div
        className="absolute inset-0 bg-grid-pattern pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: "10px 10px",
          zIndex: 0,
        }}
      ></div>

      {/* Typing Animations */}
      <div className="absolute top-6 sm:top-10 w-full flex flex-col items-center px-4 text-center">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#a172f8] ${typingComplete ? 'typing-animation-complete' : 'typing-animation'}`}
          style={{ lineHeight: "1.1", paddingBottom: "4.5px" }}>
          Hi, I'm Roger Basantes
        </h1>
        <div className="w-full max-w-[310px] sm:max-w-md mx-auto text-center" style={{ paddingTop: "10px" }}>
          <p className={`inline-block text-[10px] xs:text-xs sm:text-base md:text-lg font-medium text-[#f4cda6] mt-2 sm:mt-3 ${typingComplete ? 'typing-animation-reverse-complete' : 'typing-animation-reverse'}`}>
            I am a Web and Information Systems student at NJIT.
          </p>
        </div>
      </div>

      {/* Main Content - Adjusted spacing */}
      <main className="container mx-auto flex flex-col items-center pt-44 sm:pt-52 md:pt-56 lg:pt-48 pb-16 px-4 sm:px-6 lg:px-8 relative z-10 flex-grow">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl">
          {/* Left Section: Description */}
          <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6 max-w-xs sm:max-w-sm order-2 lg:order-1">
            <p className="text-base sm:text-lg leading-relaxed">
              My focus is in UX design, web development, and information systems. I've worked on projects spanning both frontend and backend development, gaining hands-on experience with Python, Java, JavaScript, HTML, and CSS.
            </p>
            {/* Horizontal Line */}
            <div className="border-t border-gray-600 w-full"></div>
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start items-center gap-3 sm:gap-4">
              <a
                href="https://github.com/rogb1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg hover:shadow-xl transition-transform transform hover:scale-110 group"
                aria-label="GitHub"
              >
                <img
                  src="/github.png"
                  alt="GitHub"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/roger-basantes-1357652b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 shadow-lg hover:shadow-xl transition-transform transform hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <img
                  src="/linkedin.png"
                  alt="LinkedIn"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
              
              <a
                href="mailto:rnb2@njit.edu"
                className="flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#f4cda6] hover:bg-[#e4b88a] shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 group"
                aria-label="Email"
              >
                <img
                  src="/gmail.png"
                  alt="Email"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <span className="text-xs sm:text-sm font-medium text-black">rnb2@njit.edu</span>
              </a>
            </div>
          </div>          
          
          {/* Center Section: Headshot */}
          <div className="relative flex items-center justify-center py-8 sm:py-12 order-1 lg:order-2">
            {/* Wavy Border Effect */}
            <div 
              className="absolute wavy-border"
              style={{
                width: "calc(100% + 16px)",
                height: "calc(100% + 16px)",
                top: "-8px",
                left: "-8px",
                zIndex: 6,
              }}
            ></div>
            
            {/* Subtle Glow Effect Behind Headshot */}
            <div 
              className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full opacity-50"
              style={{
                background: "radial-gradient(circle, rgba(161, 114, 248, 0.3) 0%, rgba(244, 205, 166, 0.1) 70%, transparent 100%)",
                filter: "blur(15px)",
                transform: "scale(1.1)",
                zIndex: 5
              }}
            ></div>

            {/* Wavy Headshot Container */}
            <div
              className="relative z-10 wavy-image w-56 h-56 sm:w-64 sm:h-64 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4), 0 6px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Image with wavy effect */}
              <div 
                className="w-full h-full wavy-image-inner" 
                style={{
                  backgroundImage: "url('/headshot.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
            </div>
          </div>

          {/* Right Section: Tech Stack */}
          <div className="flex-1 text-center space-y-4 sm:space-y-6 max-w-xs sm:max-w-sm order-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4cda6]">Tech Stack</h2>
            {/* Horizontal Line */}
            <div className="border-t border-gray-600 w-full"></div>
            {/* Tech Stack with animated hover states */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center group transition-all">
                  <div className="p-2 sm:p-3 rounded-xl bg-[#1f1f1f] hover:bg-[#2a2a2a] transform hover:-translate-y-1 transition-all duration-300">
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                  </div>
                  <span className="text-xs sm:text-sm mt-1 sm:mt-2 opacity-80 group-hover:opacity-100">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}