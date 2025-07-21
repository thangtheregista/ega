import React from 'react';
import "./InteriorCollectionSection.css"

const ProductLookbook = () => {
  return (
      <section
          className="section_lookbook"
          style={{ marginBottom: '2rem', marginTop: '3rem' }}
      >
        <div className="container px-4" style={{maxWidth: "1250px"}}>
          <div className="mx-auto" style={{ maxWidth: '1250px' }}>
            <div className="heading-bar text-center" style={{ marginBottom: '4rem' }}>
              <h2 className="heading-bar__title fw-bold" style={{ fontSize: '28px' }}>
                BST NỘI THẤT DÀNH CHO BẠN
              </h2>
            </div>

            <div className="row justify-content-center">
              {[
                {
                  title: 'BST Phòng Bếp',
                  link: '/pages/bst-phong-bep',
                  image:
                      '//bizweb.dktcdn.net/100/491/756/themes/956460/assets/lookbook_1_image.jpg?1746582633520',
                },
                {
                  title: 'BST Phòng Ngủ',
                  link: '/pages/bst-phong-ngu',
                  image:
                      '//bizweb.dktcdn.net/100/491/756/themes/956460/assets/lookbook_2_image.jpg?1746582633520',
                },
                {
                  title: 'BST Phòng Khách',
                  link: '/pages/bst-phong-khach',
                  image:
                      '//bizweb.dktcdn.net/100/491/756/themes/956460/assets/lookbook_3_image.jpg?1746582633520',
                },
              ].map((item, idx) => (
                  <div
                      key={idx}
                      className="col-lg-4 col-md-6 col-12 mb-4 d-flex flex-column align-items-center"
                  >
                    <div className="lookbooks-banner">
                      <img
                          className="img-fluid"
                          loading="lazy"
                          width="100%"
                          style={{ maxWidth: '450px', height: 'auto' }}
                          src={item.image}
                          alt={item.title}
                      />
                      <div className="loookbook-info text-center mt-3">
                        <h3 className="fw-bold mb-2" style={{ fontSize: '20px' }}>
                          {item.title}
                        </h3>
                        <a
                            className="lookbook-link text-decoration-underline"
                            href={item.link}
                            style={{
                              color: '#000',
                              transition: 'color 0.3s ease',
                            }}
                        >
                          Xem chi tiết
                        </a>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>

        <style>
          {`
                    .lookbook-link:hover {
                        color: #f97b22 !important;
                        text-decoration: underline;
                    }
                `}
        </style>
      </section>
  );
};

export default ProductLookbook;
