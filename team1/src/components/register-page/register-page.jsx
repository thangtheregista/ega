import React from "react";
import "./register-page.css"
import {FaFacebookF, FaGoogle} from "react-icons/fa";

function Register() {
    return (
        <>
            <div className="register-page-container">
                <div className="register-page-wrapper">
                    <div className="register-breadcrumb">
                        <a href="#home" className="register-breadcrumb-link">Trang chủ</a> / <strong
                        className="register-breadcrumb-current">Đăng ký tài khoản</strong>
                    </div>
                    <div className="register-page-form">
                        <h2 className="register-title">ĐĂNG KÝ TÀI KHOẢN</h2>
                        <p className="login-reminder">
                            Bạn đã có tài khoản? <a href="#login-page" className="login-link">Đăng nhập tại đây</a>
                        </p>
                        <strong className="register-form-title">THÔNG TIN CÁ NHÂN</strong>
                        <form className="register-form">
                            <label htmlFor="last-name" className="register-label">Họ <span>*</span></label>
                            <input type="text" className="register-input" id="last-name" placeholder="Họ" required/>
                            <label htmlFor="first-name" className="register-label">Tên <span>*</span></label>
                            <input type="text" className="register-input" id="first-name" placeholder="Tên" required/>
                            <label htmlFor="phone" className="register-label">Số điện thoại <span>*</span></label>
                            <input type="text" className="register-input" id="phone" placeholder="Số điện thoại"
                                   required/>
                            <label htmlFor="email" className="register-label">Email <span>*</span></label>
                            <input type="text" className="register-input" id="email" placeholder="Email" required/>
                            <label htmlFor="password" className="register-label">Mật khẩu <span>*</span></label>
                            <input type="password" className="register-input" id="password" placeholder="Mật khẩu"
                                   required/>
                            <label htmlFor="confirm-password" className="register-label">Xác nhận mật
                                khẩu <span>*</span></label>
                            <input type="password" className="register-input" id="confirm-password"
                                   placeholder="Xác nhận mật khẩu" required/>
                            <button type="submit" className="register-button">Đăng ký</button>
                            <div className="register-social">
                                <p className="register-social-text">Hoặc đăng ký bằng</p>
                                <div className="register-social-buttons">
                                    <button className="register-social-facebook"><FaFacebookF /></button>
                                    <button className="register-social-google"><FaGoogle /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;