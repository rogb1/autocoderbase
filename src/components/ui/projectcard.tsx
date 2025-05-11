type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  image?: string;
  technologies: string[];
};

export default function ProjectCard({ title, description, link, image, technologies }: ProjectCardProps) {
  return (
    <div className="flex flex-col bg-[#1f1f1f] rounded-lg shadow-3d overflow-hidden h-full transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
      {/* Image Section - Responsive height, consistent aspect ratio */}
      <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
        {/* Overlay gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#a172f8] mb-2 sm:mb-3 md:mb-4 line-clamp-2">{title}</h3>
          {/* Line clamp for consistent card heights */}
          <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-5 md:mb-6 line-clamp-4">{description}</p>
        </div>

        {/* Technologies Section - Flex wrap for proper spacing */}
        <div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-[#2a2a2a] text-gray-300 text-[0.65rem] sm:text-xs font-medium px-1.5 py-0.5 sm:px-2 sm:py-1 rounded transition-colors hover:bg-[#3a3a3a] hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a172f8] font-medium hover:underline mt-auto inline-flex items-center group"
          >
            <span>Launch Project</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
