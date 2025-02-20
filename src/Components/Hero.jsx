import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? "/assets/videos/smallHero.mp4" : "/assets/videos/hero.mp4");
  const handleResize = () => {
    if(window.innerWidth<760){
      setVideoSrc="/assets/videos/smallHero.mp4"
    }
    else{
      setVideoSrc="/assets/videos/hero.mp4"
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useGSAP(() => {
    gsap.to("#herotext", {
      opacity: 1,
      delay: 0.5,
    });
  }, []);
  useGSAP(() => {
    gsap.to("#buy", {
      opacity: 1,
      delay: 1.5,
      y:-30
    });
  }, []);
  useGSAP(() => {
    gsap.to("#herovideo", {
      opacity: 1,
      delay: 1,
    });
  }, []);
  return (
    <div className=" w-full flex h-150 flex-col justify-center max-sm:h-230 max-md:h-300 ">
      <p id="herotext" className="text-white text-center font-semibold text-3xl opacity-0 max-md:mb-10">
        iPhone 15 Pro
      </p>
      <video id="herovideo" className=" opacity-0 pointer-events-none" muted autoPlay playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div id="buy" className="opacity-0 justify-items-center translate-y-20 ">
        <a  href="#highlights" className="  text-white px-5 py-2 rounded-3xl bg-blue-700 my-5 border border-transparent hover:border hover:text-white hover:border-blue hover:bg-blue-500">Buy</a>
<p className="font-normal text-white mt-2 ">From $199/month or $999</p>
      </div>
    </div>
  );
};

export default Hero;

