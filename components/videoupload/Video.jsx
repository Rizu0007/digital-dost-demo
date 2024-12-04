"use client";
import React from "react";

const Video = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 md:py-12 px-4 max-w-7xl mx-auto">
      <div className="w-full mb-8 text-center">
        <h2 className="font-bold text-3xl md:text-5xl">
          Inspire and be Inspired
        </h2>
      </div>

      <div className="relative rounded-2xl overflow-hidden shadow-lg w-full md:w-4/5 lg:w-3/4 aspect-video">
        <video
          preload="metadata"
          playsInline
          controls
          loop
          muted
          className="w-full h-full rounded-2xl object-cover"
        >
          <source src="/Shopexvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <p className="text-base md:text-lg font-medium mt-6 text-center max-w-2xl">
        Discover your next inspiration in our wide array of advanced solutions.
      </p>
    </div>
  );
};

export default Video;
