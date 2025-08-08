import React from "react";
import "./Footer.css";
import footerImage from './image/footer.webp';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột 1 */}
        <div className="footer-col">
          <img src="/images/logo-footer.webp" alt="Logo" className="footer-logo" />
          <p className="footer-title">Siêu thị nội thất EGA</p>
          <p>Thương hiệu nội thất uy tín và chất lượng, cam kết mang đến những trải nghiệm mua sắm tiện lợi, hiện đại và phong phú</p>
          <p>Mã số thuế: 12345678999</p>
          <p>📍 Địa chỉ: 70 Lữ Gia, Quận 11, TP.HCM</p>
          <p>📞 Số điện thoại: 19006750</p>
        </div>

        {/* Cột 2 */}
        <div className="footer-col">
          <h4>HỖ TRỢ KHÁCH HÀNG</h4>
          <ul>
            <li>Giới thiệu</li>
            <li>Thông tin liên hệ</li>
            <li>Tra cứu cửa hàng</li>
            <li>Tư vấn nội thất theo phong thủy</li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div className="footer-col">
          <h4>CHÍNH SÁCH</h4>
          <ul>
            <li>Điều khoản dịch vụ</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách đổi trả</li>
            <li>Chính sách giao hàng</li>
            <li>Chương trình cộng tác viên</li>
          </ul>
        </div>

        {/* Cột 4 */}
        <div className="footer-col">
          <h4>ĐĂNG KÝ NHẬN TIN</h4>
          <p>Bạn muốn nhận khuyến mãi đặc biệt? Đăng ký ngay.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Nhập địa chỉ email" />
            <button>Đăng ký</button>
          </div>
          <div className="social-icons">
            <i><img src="/images/zalo.webp" alt="Zalo" /></i>
            <i><img src="/images/youtube.webp" alt="Youtube" /></i>
            <i><img src="/images/facebook.webp" alt="Facebook" /></i>
            <i><img src="/images/instagram.webp" alt="Instagram" /></i>
            <i><img src="/images/tiktok.webp" alt="Tiktok" /></i>
          </div>
        </div>
      </div>

      <div className="payment-icons1">
        <img src={footerImage} alt="Phương thức thanh toán" />
      </div>
    </footer>
  );
}
