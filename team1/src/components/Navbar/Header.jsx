import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import Dropdown from 'react-bootstrap/Dropdown';
import {Link, useNavigate} from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userRole = localStorage.getItem('userRole');
    function handleLogout() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userRole');
        navigate('/ega/login');
    }
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
                    <a href="#">Sản phẩm</a>
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
                            {isLoggedIn ? (
                                <>
                                    {userRole === 'admin' && (
                                        <>
                                            <Dropdown.Item as={Link} to="/ega/dashboard">Trang admin</Dropdown.Item>
                                            <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
                                        </>
                                    )}
                                    {userRole === 'supplier' && (
                                        <>
                                            <Dropdown.Item as={Link} to="/supplier">Trang nhà cung cấp</Dropdown.Item>
                                            <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
                                        </>
                                    )}
                                    {userRole === 'customer' && (
                                        <>
                                            <Dropdown.Item as={Link} to="/customer">Trang khách hàng</Dropdown.Item>
                                            <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
                                        </>
                                    )}
                                    {userRole === 'staff' && (
                                        <>
                                            <Dropdown.Item as={Link} to="/staff">Trang nhân viên</Dropdown.Item>
                                            <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
                                        </>
                                    )}
                                </>
                            ) : (
                                <>
                                    <Dropdown.Item as={Link} to="/ega/login">Đăng nhập</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/ega/register">Đăng ký</Dropdown.Item>
                                </>
                            )}
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
