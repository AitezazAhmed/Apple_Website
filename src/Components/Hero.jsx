import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? "/smallHero.mp4" : "/hero.mp4");
  const handleResize = () => {
    if(window.innerWidth<760){
      setVideoSrc="/smallHero.mp4"
    }
    else{
      setVideoSrc="/hero.mp4"
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useGSAP(() => {
    gsap.to("#herotext", {
      opacity: 1,
      delay: 1.5,
    });
  }, []);

  return (
    <div className="h-150 w-full flex flex-col justify-center">
      <p id="herotext" className="text-white text-center font-semibold text-3xl opacity-0 max-md:mb-10">
        iPhone 15 Pro
      </p>
      <video className="pointer-events-none" muted autoPlay playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;

