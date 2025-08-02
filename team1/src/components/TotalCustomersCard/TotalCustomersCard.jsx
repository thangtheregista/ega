import React from "react";
import { FaUsers } from "react-icons/fa";
import "./TotalCustomersCard.css";

export default function TotalCustomersCard() {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="text-section">
          <p className="card-title">KHÁCH HÀNG</p>
          <h2 className="card-number">1.6k</h2>
          <div className="card-status">
            <span className="status-down">↓ 16%</span>
            <span className="status-desc">Từ tháng trước</span>
          </div>
        </div>
        <div className="icon-section">
          <div className="icon-circle">
            <FaUsers className="card-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
