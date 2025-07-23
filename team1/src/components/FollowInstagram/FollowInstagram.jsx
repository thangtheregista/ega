import React from "react";
import "./FollowInstagram.css";

export default function FollowInstagram() {
  return (
    <div className="instagram-container">
      <h2 className="instagram-title">@ FOLLOW INSTAGRAM</h2>
      <div className="instagram-grid">
        <img src="/images/ins1.jpg" alt="Instagram 1" />
        <img src="/images/ins2.jpg" alt="Instagram 2" />
        <img src="/images/ins3.jpg" alt="Instagram 3" />
        <img src="/images/ins4.jpg" alt="Instagram 4" />
        <img src="/images/ins5.jpg" alt="Instagram 5" />
      </div>
    </div>
  );
}
