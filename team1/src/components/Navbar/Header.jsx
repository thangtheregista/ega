import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      {/* Top bar */}
      <div className="top-bar">
        FREESHIP VỚI ĐƠN HÀNG TỪ 500K
      </div>

      {/* Main header */}
      <div className="main-header">
        <div className="logo">
          <span className="logo-icon"><img src="/images/logo-footer.webp" alt="" /></span>
         
        </div>

        <nav className="nav">
          <a href="#">Sản phẩm</a>
          <a href="#">Phòng</a>
          <a href="#">Khuyến mãi</a>
          <a href="#">Góc cảm hứng</a>
          <a href="#">Hướng dẫn thiết lập</a>
        </nav>

        <div className="icons">
          <span className="flag">🇻🇳</span>
          <span className="search">🔍</span>
          <span className="user">👤</span>
          <span className="cart">
            🛒 <span className="cart-count">0</span>
          </span>
        </div>
      </div>
    </div>
  );
}
