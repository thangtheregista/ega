import React, { useEffect, useState } from 'react';

const FloatingButtons = () => {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        const scrollStep = -window.scrollY / (500 / 15);
        const scrollAnimation = () => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
                requestAnimationFrame(scrollAnimation);
            }
        };
        requestAnimationFrame(scrollAnimation);
    };

    return (
        <>
            <style>{`
        .addThis_listSharing {
          position: fixed;
          right: 20px;
          bottom: 100px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .backtop {
          width: 44px;
          height: 44px;
          background: #f97b22;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
          animation: slideInUp 0.5s ease forwards;
        }

        .backtop:hover {
          background: #e0671d;
        }

        .backtop svg {
          width: 20px;
          height: 20px;
          fill: #fff; 
        }

        .addThis_listing {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .addThis_item {
          position: relative;
          opacity: 0;
          transform: translateX(20px);
          animation: slideInRight 0.5s ease forwards;
        }

        .addThis_item:nth-child(1) { animation-delay: 0.1s; }
        .addThis_item:nth-child(2) { animation-delay: 0.2s; }
        .addThis_item:nth-child(3) { animation-delay: 0.3s; }

        .addThis_item--icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          position: relative;
          transition: transform 0.3s ease;
        }

        .addThis_item--icon:hover {
          transform: scale(1.05);
        }

        .addThis_item--icon img {
          width: 44px;
          height: 44px;
          object-fit: contain;
        }

        .tooltip-text {
          position: absolute;
          right: 110%;
          top: 50%;
          transform: translateY(-50%);
          white-space: nowrap;
          background: rgba(0, 0, 0, 0.85);
          color: #fff;
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 4px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease;
        }

        .addThis_item--icon:hover .tooltip-text {
          opacity: 1;
          visibility: visible;
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 576px) {
          .addThis_listSharing {
            display: none;
          }
        }
      `}</style>

            <div className="addThis_listSharing">
                {showTop && (
                    <a
                        href="#"
                        id="back-to-top"
                        className="backtop back-to-top"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToTop();
                        }}
                    >
                        <svg viewBox="0 0 24 24">
                            <path d="M12 4l-8 8h6v8h4v-8h6z"/>
                        </svg>
                    </a>
                )}

                <ul className="addThis_listing">
                    <li className="addThis_item">
                        <a
                            className="addThis_item--icon"
                            href="tel:19006750"
                            rel="nofollow"
                            title="Gọi ngay cho chúng tôi"
                        >
                            <img
                                src="//bizweb.dktcdn.net/100/491/756/themes/956460/assets/addthis-phone.svg?1746582633520"
                                alt="Gọi ngay cho chúng tôi"
                            />
                            <span className="tooltip-text">Hãy gọi ngay cho chúng tôi</span>
                        </a>
                    </li>

                    <li className="addThis_item">
                        <a
                            className="addThis_item--icon"
                            href="https://zalo.me/834141234794359440"
                            target="_blank"
                            rel="nofollow"
                            title="Zalo"
                        >
                            <img
                                src="//bizweb.dktcdn.net/100/491/756/themes/956460/assets/addthis-zalo.svg?1746582633520"
                                alt="Zalo"
                            />
                            <span className="tooltip-text">Chat với chúng tôi qua Zalo</span>
                        </a>
                    </li>

                    <li className="addThis_item">
                        <a
                            className="addThis_item--icon"
                            href="https://m.me/"
                            target="_blank"
                            rel="nofollow"
                            title="Messenger"
                        >
                            <img
                                src="//bizweb.dktcdn.net/100/491/756/themes/956460/assets/addthis-messenger.svg?1746582633520"
                                alt="Messenger"
                            />
                            <span className="tooltip-text">Chat với chúng tôi qua Messenger</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default FloatingButtons;