'use client'
import React, {  useRef } from "react";

const Video = () => {
  

  return (
    <div className="flex flex-col items-center justify-center py-24 md:py-1 mx-3">
      {/* Video Container */}
      <div className="w-full mb-12 flex justify-center">
          <h6 className="font-bold xs:text-[36px] md:text-[48px]">
          Inspire and be Inspired

          </h6>
        </div>
        
      <div className="relative rounded-2xl overflow-hidden shadow-lg max-w-4xl w-full mx-24">
     
        <video
          
          src="shopex video low.mp4"
          controls
          loop
          muted
          className="w-full h-full rounded-2xl "
        ></video>
      </div>

      <p className="text-[16px] font-medium mt-4">Discover your next inspiration in our wide array of advanced solutions.
      </p>

    </div>
  );
};

export default Video;
