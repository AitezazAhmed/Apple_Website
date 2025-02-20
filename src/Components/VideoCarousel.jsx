import React, { useEffect, useRef } from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// Define video paths (Replace with actual paths)
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
// const videoRef= useRef([])
// const videoSpanRef= useRef([])
// const videoDevRef= useRef([])
// const [video, setVideo]=({
//     isEnd:false,
//     startPlay:false,
//     videoId:0,
//     isLastvideo:false,
//     isPlaying:false
// }
// )
// const {isEnd,isLastvideo,isPlaying,videoId,startPlay}=video
// useEffect(()=>{

// },[videoId,startPlay])
const VideoCarousel = () => {
    return (
        <div className="flex items-center">
            {highlightsSlides.map((list, i) => (
                <div key={list.id} id="slider" className="sm:pr-20 pr-10">
                    <div className="relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]">
                    <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                        <video  muted preload="auto"  ><source src={list.video} /></video></div>
                         <div className="absolute top-12 left-5 text-white z-10 max-sm:left-0">
                           <p className="text-xl font-medium md:text-2xl">{list.textLists}</p>
                         </div>
                     </div>
                  
                </div>
            ))}
        </div>
    );
};

export default VideoCarousel;




