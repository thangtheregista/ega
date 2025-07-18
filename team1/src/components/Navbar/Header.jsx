import React, {useState} from "react";
import "./Header.css";

import Offcanvas from 'react-bootstrap/Offcanvas';
export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className="top-bar">
                FREESHIP VỚI ĐƠN HÀNG TỪ 500K
            </div>
            <div className="main-header">
                <button className="offcanvas-toggle" onClick={handleShow}>
                    &#9776;
                </button>
                <div className="logo">
                <span className="logo-icon"><img
                    src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/logo.png?1746582633520"
                    alt=""/></span>

                </div>

                <nav className="nav desktop-nav">
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
            🛒           <span className="cart-count">0</span>
                    </span>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <nav className="nav mobile-nav">
                        <a href="#" onClick={handleClose}>Sản phẩm</a>
                        <a href="#" onClick={handleClose}>Phòng</a>
                        <a href="#" onClick={handleClose}>Khuyến mãi</a>
                        <a href="#" onClick={handleClose}>Góc cảm hứng</a>
                        <a href="#" onClick={handleClose}>Hướng dẫn thiết lập</a>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}
