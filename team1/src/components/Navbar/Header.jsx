import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div>
            <div className="top-bar">
                FREESHIP VỚI ĐƠN HÀNG TỪ 5000K
            </div>
            <div className={`main-header${scrolled ? ' scrolled' : ''}`}>
                <button className="offcanvas-toggle" onClick={handleShow}>
                    &#9776;
                </button>
                <div className="logo">
                <Link to="/"><span className="logo-icon"><img
                    src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/logo.png?1746582633520"
                    alt=""/>
                </span>
                </Link>
                </div>

                <nav className="nav desktop-nav">
                    <a href="#" className="nav-item">Sản phẩm</a>
                    <div className="dropdown-menu">
                        <div className="dropdown-column">
                            <h6>Nội thất</h6>
                            <a href="#">Sofa phòng khách</a>
                            <a href="#">Bàn ăn</a>
                            <a href="#">Ghế ăn</a>
                            <a href="#">Tủ và giá đỡ</a>
                            <a href="#">Nội thất sân vườn</a>
                        </div>
                        <div className="dropdown-column">
                            <h6>Đèn trang trí</h6>
                            <a href="#">Đèn ngoài trời</a>
                            <a href="#">Đèn tường</a>
                            <a href="#">Đèn bàn</a>
                            <a href="#">Đèn trần</a>
                            <a href="#">Phụ kiện chống sét</a>
                        </div>
                        <div className="dropdown-column">
                            <h6>Vật dụng trong nhà</h6>
                            <a href="#">Gương</a>
                            <a href="#">Móc và giá treo áo</a>
                            <a href="#">Phụ kiện nhà bếp</a>
                            <a href="#">Chân nến và đèn lồng</a>
                            <a href="#">Bình hoa</a>
                        </div>
                        <div className="dropdown-column">
                            <h6>Bộ sưu tập</h6>
                            <a href="#">MỚI! Nâng cao nỗi nhớ</a>
                            <a href="#">BST Nỗi nhớ</a>
                            <a href="#">BST Bước ngoặt</a>
                        </div>
                    </div>
                    <a href="#">Phòng</a>
                    <a href="#">Khuyến mãi</a>
                    <a href="#">Góc cảm hứng</a>
                    <a href="#">Hướng dẫn thiết lập</a>
                </nav>

                <div className="icons">
                    <span className="flag">🇻🇳</span>
                    <span className="search">🔍</span>
                    <Dropdown align="end">
                        <Dropdown.Toggle as="span" className="user" style={{cursor: 'pointer'}}>
                            👤
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/ega/login">Đăng nhập</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/ega/register">Đăng ký</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <span className="cart">
                        🛒
                        {/*<span className="cart-count">0</span>*/}
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
