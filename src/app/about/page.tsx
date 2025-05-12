import Link from "next/link";
import Footer from "@/components/ui/footer";

export default function About() {
  // Skills data organized by category
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Python", "Java"],
  };

  return (
    <div className="min-h-screen bg-[#141415] text-[#f4cda6] relative overflow-x-hidden flex flex-col">
      {/* Grid Background */}
      <div
        className="absolute inset-0 bg-grid-pattern pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: "10px 10px",
        }}
      ></div>

      {/* Heading */}
      <div className="absolute top-10 w-full flex flex-col items-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#a172f8] typing-animation">
          About Me
        </h1>
      </div>

      {/* Main Content - Added flex-grow to push footer down */}
      <main className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 pb-16 relative z-10 flex-grow">
        <div className="w-full max-w-4xl space-y-16">
          
          {/* Education Section */}
          <section> 
            <h2 className="text-3xl sm:text-4xl font-bold text-[#a172f8] mb-6 text-center">Education</h2>
            
            <div className="bg-[#1a1a1c] border border-[#2a2a2c] rounded-xl p-6 hover:shadow-lg hover:shadow-purple-800/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h3 className="text-xl font-semibold text-[#f4cda6]">New Jersey Institute of Technology</h3>
                <span className="px-3 py-1 bg-[#2a2a2c]/70 text-[#a172f8] text-sm rounded-full mt-1 sm:mt-0">2023 - 2027</span>
              </div>
              <p className="text-[#f4cda6]/80 mb-2">B.S. in Web and Information Systems || Business Minor</p>  
            </div>
          </section>
          
          {/* Skills Section */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#a172f8] mb-6 text-center">Skills</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Frontend Skills */}
              <div className="bg-[#1a1a1c] border border-[#2a2a2c] rounded-xl p-5 sm:p-6 hover:shadow-lg hover:shadow-purple-800/10 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#f4cda6] mb-4">
                  Frontend Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-[#2a2a2c]/70 text-[#f4cda6]/90 text-sm rounded-full hover:bg-[#2a2a2c] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Backend Skills */}
              <div className="bg-[#1a1a1c] border border-[#2a2a2c] rounded-xl p-5 sm:p-6 hover:shadow-lg hover:shadow-purple-800/10 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#f4cda6] mb-4">
                  Backend Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-[#2a2a2c]/70 text-[#f4cda6]/90 text-sm rounded-full hover:bg-[#2a2a2c] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
             
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
