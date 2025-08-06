import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import Dropdown from 'react-bootstrap/Dropdown';
import {Link, useNavigate} from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdKeyboardArrowDown } from "react-icons/md";
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/react'
import {useCart} from "../../hooks/CartContext.jsx";

export default function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    const [visibleA, setVisibleA] = useState(false)
    const [visibleB, setVisibleB] = useState(false)

    const [showSearchPopup, setShowSearchPopup] = useState(false);
    const handleSearchClick = () => {
        setShowSearchPopup(true);
    };
    const handleCloseSearchPopup = () => {
        setShowSearchPopup(false);
    };

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
        localStorage.removeItem('currentUser');
        navigate('/ega/login');
    }
    const {cartCount} = useCart()
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
                    <div className="desktop-nav__link">
                        <a href="#">Sản phẩm <MdKeyboardArrowDown />
                        </a>
                        <div className="desktop-nav__submenu--fullwidth">
                            <ul className="desktop-nav__submenu-list">
                                <li><a href="#">Nội thất</a></li>
                                <li><a href="#">Sofa phòng khách</a></li>
                                <li><a href="#">Bàn ăn</a></li>
                                <li><a href="#">Ghế ăn</a></li>
                                <li><a href="#">Tủ và giá đỡ</a></li>
                                <li><a href="#">Nội thất sân vườn</a></li>
                            </ul>
                            <ul className="desktop-nav__submenu-list">
                                <li><a href="#">Đèn trang trí</a></li>
                                <li><a href="#">Đèn ngoài trời</a></li>
                                <li><a href="#">Đèn tường</a></li>
                                <li><a href="#">Đèn bàn</a></li>
                                <li><a href="#">Đèn trần</a></li>
                                <li><a href="#">Phụ kiện chống sét</a></li>
                            </ul>
                            <ul className="desktop-nav__submenu-list">
                                <li><a href="#">Vật dụng trong nhà</a></li>
                                <li><a href="#">Gương</a></li>
                                <li><a href="#">Móc và giá treo áo</a></li>
                                <li><a href="#">Phụ kiện nhà bếp</a></li>
                                <li><a href="#">Chân nến và đèn lồng</a></li>
                                <li><a href="#">Phụ kiện chống sét</a></li>
                            </ul>
                            <ul className="desktop-nav__submenu-list">
                                <li><a href="#">Bộ sưu tập</a></li>
                                <li><a href="#">MỚI! Nâng cao nỗi nhớ</a></li>
                                <li><a href="#">BST Nỗi nhớ</a></li>
                                <li><a href="#">BST Bước ngoặc</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="desktop-nav__link">
                        <a href="#">Phòng <MdKeyboardArrowDown />
                        </a>
                        <div className="desktop-nav__submenu">
                            <a href="#">Phòng khách</a>
                            <a href="#">Phòng ngủ</a>
                            <a href="#">Phòng bếp</a>
                        </div>
                    </div>
                    <a href="#">Khuyến mãi</a>
                    <a href="#">Góc cảm hứng</a>
                    <a href="#">Hướng dẫn thiết lập</a>
                </nav>

                <div className="icons">
                    <Dropdown align="end">
                        <Dropdown.Toggle as="span" className="flag" style={{cursor: 'pointer'}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
                                 alt="Flag of Vietnam" style={{width: '20px', height: '15px'}}/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="#" data-lang="vi" title="Tiếng Việt">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
                                     alt="Flag of Vietnam" style={{width: '20px', height: '15px', marginRight: '5px'}}/>
                                Tiếng Việt
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="#" data-lang="us" title="Tiếng Anh">
                                <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                                     alt="Flag of USA" style={{width: '20px', height: '15px', marginRight: '5px'}}/>
                                English
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <span className="search" onClick={handleSearchClick}>🔍</span>
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
                                            <Dropdown.Item as={Link} to="/ega/customer">Trang khách hàng</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/ega/customer/orders">Đơn hàng của tôi</Dropdown.Item>
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
                    <Link to="/ega/cart" className="router-link">
                        <span className="cart">
                        🛒
                            {cartCount > 0 && (
                                <span className="cart-count">{cartCount}</span>
                            )}
                            </span>
                    </Link>
                </div>
            </div>
            <div className="certification-section">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/FSC_Logo.svg/1200px-FSC_Logo.svg.png" alt="FSC Certification" />
                <img src="https://www.oeko-tex.com/media/xrpu3e0v/oeko-tex-logo-cmyk.jpg" alt="OEKO-TEX Certification" />
                <img src="https://www.c2ccertified.org/sites/default/files/C2C_CertifiedLogo_CMYK_0.png" alt="Cradle to Cradle Certification" />
                <img src="https://masgreencertified.org/wp-content/uploads/2020/05/MAS-Certified-Green-Logo.jpg" alt="MAS Certified Green" />
            </div>
            <Offcanvas show={show} onHide={handleClose} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <nav className="nav mobile-nav">
                        <div>
                            <CButton
                                className="mobile-nav__link"
                                href="#"
                                onClick={(event) => {
                                    event.preventDefault()
                                    setVisibleA(!visibleA)
                                }}
                            >
                                Sản phẩm <MdKeyboardArrowDown />
                            </CButton>
                            <CCollapse visible={visibleA}>
                                <CCard className="mt-1">
                                    <CCardBody>
                                        <div className="">
                                            <ul className="mobile-nav__submenu-list">
                                                <li><a href="#" onClick={handleClose}>Nội thất</a></li>
                                                <li><a href="#" onClick={handleClose}>Sofa phòng khách</a></li>
                                                <li><a href="#" onClick={handleClose}>Bàn ăn</a></li>
                                                <li><a href="#" onClick={handleClose}>Ghế ăn</a></li>
                                                <li><a href="#" onClick={handleClose}>Tủ và giá đỡ</a></li>
                                                <li><a href="#" onClick={handleClose}>Nội thất sân vườn</a></li>
                                            </ul>
                                            <ul className="mobile-nav__submenu-list">
                                                <li><a href="#" onClick={handleClose}>Đèn trang trí</a></li>
                                                <li><a href="#" onClick={handleClose}>Đèn ngoài trời</a></li>
                                                <li><a href="#" onClick={handleClose}>Đèn tường</a></li>
                                                <li><a href="#" onClick={handleClose}>Đèn bàn</a></li>
                                                <li><a href="#" onClick={handleClose}>Đèn trần</a></li>
                                                <li><a href="#" onClick={handleClose}>Phụ kiện chống sét</a></li>
                                            </ul>
                                            <ul className="mobile-nav__submenu-list">
                                                <li><a href="#" onClick={handleClose}>Vật dụng trong nhà</a></li>
                                                <li><a href="#" onClick={handleClose}>Gương</a></li>
                                                <li><a href="#" onClick={handleClose}>Móc và giá treo áo</a></li>
                                                <li><a href="#" onClick={handleClose}>Phụ kiện nhà bếp</a></li>
                                                <li><a href="#" onClick={handleClose}>Chân nến và đèn lồng</a></li>
                                                <li><a href="#" onClick={handleClose}>Phụ kiện chống sét</a></li>
                                            </ul>
                                            <ul className="mobile-nav__submenu-list">
                                                <li><a href="#" onClick={handleClose}>Bộ sưu tập</a></li>
                                                <li><a href="#" onClick={handleClose}>MỚI! Nâng cao nỗi nhớ</a></li>
                                                <li><a href="#" onClick={handleClose}>BST Nỗi nhớ</a></li>
                                                <li><a href="#" onClick={handleClose}>BST Bước ngoặc</a></li>
                                            </ul>
                                        </div>
                                    </CCardBody>
                                </CCard>
                            </CCollapse>
                        </div>
                        <div>
                            <CButton
                                className="mobile-nav__link"
                                href="#"
                                onClick={(event) => {
                                    event.preventDefault()
                                    setVisibleB(!visibleB)
                                }}
                            >
                                Phòng <MdKeyboardArrowDown />
                            </CButton>
                            <CCollapse visible={visibleB}>
                                <CCard className="mt-1">
                                    <CCardBody>
                                        <div className="">
                                            <ul className="mobile-nav__submenu-list__variant-b">
                                                <li><a href="#" onClick={handleClose}>Phòng khách</a></li>
                                                <li><a href="#" onClick={handleClose}>Phòng ngủ</a></li>
                                                <li><a href="#" onClick={handleClose}>Phòng bếp</a></li>
                                            </ul>
                                        </div>
                                    </CCardBody>
                                </CCard>
                            </CCollapse>
                        </div>
                        <a href="#" onClick={handleClose}>Khuyến mãi</a>
                        <a href="#" onClick={handleClose}>Góc cảm hứng</a>
                        <a href="#" onClick={handleClose}>Hướng dẫn thiết lập</a>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>

            {showSearchPopup && (
                <div className="search-popup-overlay" onClick={handleCloseSearchPopup}>
                    <div className="search-popup-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-popup" onClick={handleCloseSearchPopup}>×</span>
                        <div className="search-popup-header">
                            <div className="search-box">
                                <input type="text" placeholder="Tìm theo từ khóa" />
                                <button className="search-button">
                                    <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L452.9 452.9c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="search-suggestions">
                            <span>Mẫu Sofa mới</span>
                            <span>Nội thất phòng khách</span>
                            <span>Đèn trang trí</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}