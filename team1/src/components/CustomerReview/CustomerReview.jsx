import React from "react";
import "./CustomerReview.css";
import customerImg from "./images/customer.jpg";

export default function CustomerReview() {
  return (
    <div className="review-section">
      <div className="review-left">
        <div>
          <div className="review-title">
            <span className="icon">👍</span> Đánh giá khách hàng
          </div>
          <h2 className="review-heading">Khách hàng nói gì về chúng tôi</h2>
        </div>
        <div className="review-author">
          <h3>Nguyễn Minh Tâm</h3>
          <p>Giám đốc kinh doanh</p>
        </div>
      </div>

      <div className="review-center">
        <img src={customerImg} alt="Customer" className="review-image" />
      </div>

      <div className="review-right">
        <p className="review-text">
          Mình mới mua ghế sofa da cao cấp tại EGA Furniture và rất ưng ý. Ghế
          da mềm mại, ngồi rất thoải mái, kiểu dáng hiện đại và sang trọng, phù
          hợp với không gian phòng khách nhà mình. Giá cả cũng hợp lý, dịch vụ
          khách hàng chu đáo. Rất hài lòng!
        </p>
        <div className="review-stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
      </div>
    </div>
  );
}
