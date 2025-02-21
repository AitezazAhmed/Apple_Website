import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const highlightFirstVideo = "/assets/videos/highlight-first.mp4";
const highlightSecondVideo = "/assets/videos/hightlight-third.mp4";
const highlightThirdVideo = "/assets/videos/hightlight-sec.mp4";
const highlightFourthVideo = "/assets/videos/hightlight-fourth.mp4";

const highlightsSlides = [
    {
        id: 1,
        textLists: [
            "Enter A17 Pro.",
            "Game‑changing chip.",
            "Groundbreaking performance.",
        ],
        video: highlightFirstVideo,
        videoDuration: 4,
    },
    {
        id: 2,
        textLists: ["Titanium.", "So strong. So light. So Pro."],
        video: highlightSecondVideo,
        videoDuration: 5,
    },
    {
        id: 3,
        textLists: [
            "iPhone 15 Pro Max has the",
            "longest optical zoom in",
            "iPhone ever. Far out.",
        ],
        video: highlightThirdVideo,
        videoDuration: 2,
    },
    {
        id: 4,
        textLists: ["All-new Action button.", "What will yours do?"],
        video: highlightFourthVideo,
        videoDuration: 3.63,
    },
];

const VideoCarousel = () => {
    const videoRefs = useRef([]);
    const containerRef = useRef(null);
    const [currentVideo, setCurrentVideo] = useState(0);

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            ScrollTrigger.create({
                trigger: video,
                start: "top 80%",
                onEnter: () => {
                    if (index === 0) {
                        video.play();
                    }
                },
            });
        });
    }, []);

    useEffect(() => {
        const playNextVideo = (index) => {
            let nextIndex = index + 1;
            if (nextIndex >= highlightsSlides.length) {
                nextIndex = 0; // Loop back to the first video
            }

            gsap.to(containerRef.current, {
                x: `-${nextIndex * 100}%`,
                duration: 1.5,
                ease: "power2.inOut",
                onComplete: () => {
                    setCurrentVideo(nextIndex);
                    videoRefs.current[nextIndex].play();
                },
            });
        };

        if (videoRefs.current[currentVideo]) {
            videoRefs.current[currentVideo].onended = () => playNextVideo(currentVideo);
        }
    }, [currentVideo]);

    return (
        <div className="overflow-hidden relative w-full">
            <div ref={containerRef} className="flex transition-transform duration-700 w-full">
                {highlightsSlides.map((list, i) => (
                    <div key={list.id} className="w-full flex-shrink-0 p-5">
                        <div className="relative w-full max-w-4xl mx-auto h-[50vh] sm:h-[60vh] md:h-[70vh]">
                            <div className="w-full h-full flex items-center justify-center rounded-3xl overflow-hidden bg-black">
                                <video
                                    ref={(el) => (videoRefs.current[i] = el)}
                                    muted
                                    playsInline
                                    preload="metadata"
                                    className="w-full h-full object-cover"
                                >
                                    <source src={list.video} type="video/mp4" />
                                </video>
                            </div>
                            <div className="absolute top-12 left-5 text-white z-10">
                                {list.textLists.map((text, index) => (
                                    <p key={index} className="text-lg md:text-2xl font-medium">{text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {highlightsSlides.map((_, index) => (
              <span
                  key={index}
                  className={`w-3 h-3 rounded-full ${currentVideo === index ? "bg-white" : "bg-gray-500"}`}
              />
          ))}
      </div>
          
        </div>
    
    );
};

export default VideoCarousel;










