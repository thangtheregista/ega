import React, { useState } from "react";
import "./NotificationPopup.css";

export default function NotificationPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div className="notification-container">
      <div
        className={`notification-icon ${isOpen ? "stopped" : "shake"}`}
        onClick={togglePopup}
      >
        🔔
      </div>

      {isOpen && (
        <div className="popup-box">
          <div className="popup-header">
            <span>Tích hợp sẵn các ứng dụng</span>
            <span className="popup-close" onClick={togglePopup}>✕</span>
          </div>
          <ul className="popup-list">
            <li><span className="highlight">Đánh giá sản phẩm</span></li>
            <li><span className="highlight">Ứng dụng Affiliate</span></li>
            <li><span className="highlight">Đa ngôn ngữ</span></li>
            <li><span className="highlight">Mua X Tặng Y</span></li>
            <li><span className="highlight">Combo sản phẩm</span></li>
          </ul>
          <p className="popup-note">
            Lưu ý với các ứng dụng trả phí bạn cần cài đặt và mua ứng dụng này trên App store Sapo để sử dụng ngay
          </p>
        </div>
      )}
    </div>
  );
}
