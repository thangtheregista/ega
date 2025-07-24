import React from "react";
import video1 from "./videos/Video1.mp4";
import video2 from "./videos/Video2.mp4";
import video3 from "./videos/Video3.mp4";
import video4 from "./videos/Video4.webm";
import "./MostViewedVideos.css";

const videos = [
  { id: 1, src: video1, type: "video/mp4" },
  { id: 2, src: video2, type: "video/mp4" },
  { id: 3, src: video3, type: "video/mp4" },
  { id: 4, src: video4, type: "video/webm" }
];

export default function MostViewedVideos() {
  return (
    <div className="most-viewed-container">
      <h2 className="mv-title">VIDEO ĐƯỢC XEM NHIỀU NHẤT</h2>
      <div className="video-list">
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
            <video
              muted
              loop
              autoPlay
              playsInline
              className="video-element"
            >
              <source src={video.src} type={video.type} />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}
