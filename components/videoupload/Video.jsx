'use client'
import React, { useRef, useState, useEffect } from "react";

const Video = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (videoRef.current) {
            videoRef.current.play();
          }
        }
      },
      {
        threshold: 0.3 // Trigger when 30% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Simulate loading progress
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  // Handle video load completion
  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div 
      ref={sectionRef}
      className="flex flex-col items-center justify-center py-24 md:py-1 mx-3"
    >
      <div className="w-full mb-12 flex justify-center">
        <h6 className="font-bold text-center xs:text-[36px] md:text-[48px] opacity-0 translate-y-4 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(1rem)'
            }}>
          Inspire and be Inspired
        </h6>
      </div>
        
      <div className="relative rounded-2xl overflow-hidden  max-w-5xl w-full mx-auto px-4 md:px-24">
        {/* Loading Bar */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 rounded-2xl z-10">
            <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-300 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">{progress}%</p>
          </div>
        )}
        
        <video
          ref={videoRef}
          width="320"
          height="240"
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoaded}
          className={`w-full h-full rounded-2xl transition-all duration-700 transform ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <source src="/shopex video low.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <p className={`text-[16px] font-medium mt-4 text-center max-w-2xl mx-auto px-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        Discover your next inspiration in our wide array of advanced solutions.
      </p>
    </div>
  );
};

export default Video;