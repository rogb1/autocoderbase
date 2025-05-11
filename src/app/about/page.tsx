import Link from "next/link";
import Footer from "@/components/ui/footer";

export default function About() {
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

      {/* Typing Animation */}
      <div className="absolute top-10 w-full flex flex-col items-center">
        <h1 className="text-6xl font-bold text-[#a172f8] typing-animation">
          About Me
        </h1>
        <p className="text-lg text-[#a172f8] text-center mt-4 max-w-3xl">
          Hi! I’m Roger Basantes a passionate and motivated Web and Information Systems student with a strong interest in front-end development, user experience, and building functional, user-friendly digital experiences. I enjoy turning ideas into interactive, responsive websites that are both visually appealing and accessible. I have experience with HTML, CSS, Bootstrap, JavaScript, Python, and Java, and I’m always eager to learn new technologies that help bring ideas to life.
        </p>
      </div>

      {/* Main Content */}
      <main className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-8 relative z-10"></main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
