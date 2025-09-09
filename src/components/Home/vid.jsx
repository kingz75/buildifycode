import React, { useEffect, useState } from "react";

function ScrollVideo() {
  const [frameIndex, setFrameIndex] = useState(1);
  const totalFrames = 445; // update to match your frames
  const animationDuration = 9000; // scroll distance before unpinning

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const progress = Math.min(scrollTop / animationDuration, 1);

      const newFrame = Math.min(
        totalFrames,
        Math.max(1, Math.floor(progress * totalFrames))
      );

      setFrameIndex(newFrame);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalFrames, animationDuration]);

  return (
    <div style={{ height: `${animationDuration}px` }}>
      {/* Sticky video section */}
      <section className="sticky top-0 h-screen flex justify-center items-center  mt-[50px]">
        {/* Responsive container with border radius */}
        <div className="w-full h-full rounded-2xl sm:rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl">
          <img
            src={`/frames/frame_${String(frameIndex).padStart(4, "0")}.jpg`}
            alt={`Frame ${frameIndex}`}
            className="w-full h-full object-contain bg-black"
          />
        </div>
      </section>
    </div>
  );
}

export default ScrollVideo;
