'use client';

import ProjectCard from "@/components/ui/projectcard";
import Footer from "@/components/ui/footer";
import { useEffect, useState } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation effect when page loads
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#141415] text-[#f4cda6] relative flex flex-col">
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

      {/* Typing Animation */}
      <div className="absolute top-6 sm:top-10 w-full flex justify-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#a172f8] typing-animation">
          Projects
        </h1>
      </div>

      {/* Main Content */}
      <main className="container mx-auto flex flex-col items-center pt-24 sm:pt-32 md:pt-36 pb-16 px-4 sm:px-6 lg:px-8 relative z-10 flex-grow">
        {/* Project Cards Section */}
        <section 
          className={`w-full max-w-7xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProjectCard
              title="The Cost of Living Alongside Crime Rates Across America"
              description="A React-based interactive data visualization dashboard analyzing the relationship between the cost of living and violent crime rates across major U.S. cities."
              link="https://dataproject-delta.vercel.app/"
              image="/dataproject.png"
              technologies={["JavaScript", "JSX", "React", "D3.js", "PapaParse"]}
            />
            <ProjectCard
              title="Streaming Chat Application"
              description="This project features a Streaming Chat application is a sophisticated chat interface that enhances user experience by displaying AI responses character-by-character in real time, rather than waiting for the complete response before displaying it."
              link="https://js-rag-demo-31np.vercel.app/"
              image="/rag.png"
              technologies={["OpenAI API","Langchain", "Express.js", "Node.js", "JavaScript"]}
            />
            <ProjectCard
              title="Sports Team Website"
              description="This project was the beginning of my front-end web development skills through a dynamic site that highlights a mock up of Manchester City's recent achievements, upcoming fixtures, and club history. Built using HTML, CSS, and Bootstrap."
              link="https://rogb1.github.io/P4/#home"
              image="/mancity.png"
              technologies={["HTML", "CSS", "Bootstrap"]}
            />
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
