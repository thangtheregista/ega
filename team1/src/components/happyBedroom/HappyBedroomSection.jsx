import React from 'react';

const HappyBedroomSection = () => {
  return (
      <section className="happy-bedroom-section text-center">
        <div className="container px-4">
          <div
              className="mx-auto"
              style={{ maxWidth: '1200px', backgroundColor: '#ffebd4' }}
          >
            {/* Hình ảnh */}
            <img
                src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/lookbook_oneproduct_img.jpg?1746582633520"
                alt="Phòng Ngủ Hạnh Phúc"
                className="img-fluid w-100"
                style={{
                  maxHeight: '650px',
                  objectFit: 'cover',
                }}
            />

            {/* Mô tả */}
            <div className="py-5 px-4">
              <h2 className="fw-bold mb-3" style={{ fontSize: '28px' }}>
                PHÒNG NGỦ HẠNH PHÚC
              </h2>
              <p
                  className="mx-auto"
                  style={{ maxWidth: '700px', fontSize: '16px', lineHeight: '1.8' }}
              >
                Đắm mình trong chiếc giường trang trí với bộ khăn trải giường sang trọng, sự kết hợp
                giữa chất liệu vải xa hoa và đồ nội thất được sắp xếp hợp lý để tạo nên một thiên
                đường ngủ xa hoa. Lấy cảm hứng và biến nhạt nhẽo thành hạnh phúc.
              </p>
              <a
                  href="/phong-ngu"
                  className="btn btn-outline-dark mt-3 px-4 py-2 custom-hover-btn"
                  style={{
                    borderColor: '#f97b22',
                    color: '#f97b22',
                    transition: 'all 0.3s ease',
                  }}
              >
                Xem chi tiết
              </a>
            </div>
          </div>
        </div>

        {/* Hover style */}
        <style>
          {`
                    .custom-hover-btn:hover {
                        background-color: #f97b22 !important;
                        color: white !important;
                        border-color: #f97b22 !important;
                    }
                `}
        </style>
      </section>
  );
};

export default HappyBedroomSection;
