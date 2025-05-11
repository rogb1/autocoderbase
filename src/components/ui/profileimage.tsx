'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: number;
  animationDuration?: number;
  disableBorder?: boolean; // Option to disable the border when parent component provides its own
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt,
  size = 250,
  animationDuration = 6, // Animation duration for the wavy effect
  disableBorder = false, // Default to showing the border
}) => {
  // Responsive size adjustment
  const [currentSize, setCurrentSize] = useState(size);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        // Adjust size based on screen width
        if (window.innerWidth < 640) {
          setCurrentSize(Math.floor(size * 0.8)); // 80% of original on small screens
        } else if (window.innerWidth < 768) {
          setCurrentSize(Math.floor(size * 0.9)); // 90% of original on medium screens
        } else {
          setCurrentSize(size); // Original size on large screens
        }
      };
      
      // Initial size setup
      handleResize();
      
      // Listen for window resize events
      window.addEventListener('resize', handleResize);
      
      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [size]);
  return (
    <div
      className="relative"
      style={{
        width: currentSize,
        height: currentSize,
      }}
    >
      {/* Wavy Border Effect - Only render if not disabled */}
      {!disableBorder && (
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            width: currentSize,
            height: currentSize,
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a172f8" />
                <stop offset="50%" stopColor="#f4cda6" />
                <stop offset="100%" stopColor="#a172f8" />
              </linearGradient>
              <mask id="wavyMask">
                <path
                  d="M50,2 C65,5 80,20 95,50 C80,80 65,95 50,98 C35,95 20,80 5,50 C20,20 35,5 50,2 Z"
                  fill="white"
                />
              </mask>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="url(#gradient)"
              mask="url(#wavyMask)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur={`${animationDuration}s`}
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      )}

      {/* Profile Image */}
      <div
        className="absolute rounded-full overflow-hidden"
        style={{
          // Adjust positioning based on whether the border is disabled
          top: disableBorder ? 0 : currentSize * 0.04,
          left: disableBorder ? 0 : currentSize * 0.04,
          width: disableBorder ? currentSize : currentSize * 0.92,
          height: disableBorder ? currentSize : currentSize * 0.92,
          boxShadow: disableBorder ? 'none' : '0 10px 30px rgba(0, 0, 0, 0.3)', // Subtle shadow
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={currentSize}
          height={currentSize}
          className="object-cover w-full h-full"
          priority // Load this image with priority since it's above the fold
        />
      </div>
    </div>
  );
};

export default ProfileImage;