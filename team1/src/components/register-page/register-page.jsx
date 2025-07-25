import React from "react";
import "./register-page.css"
import {FaFacebookF, FaGoogle} from "react-icons/fa";

function Register() {
    const [formData, setFormData] = React.useState({
        lastName: "",
        firstName: "",
        phone: "",
        email: "",
        password: "",
        repeatPassword: "",
    });

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function handleValidate() {
        const newErrors = {};
    }

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
                            <input type="text" className="register-input" name="lastName" placeholder="Họ" required
                                   onChange={(e) => handleChange(e.target.value)}/>
                            <label htmlFor="first-name" className="register-label">Tên <span>*</span></label>
                            <input type="text" className="register-input" name="firstName" placeholder="Tên" required
                                   onChange={(e) => handleChange(e.target.value)}/>
                            <label htmlFor="phone" className="register-label">Số điện thoại <span>*</span></label>
                            <input type="text" className="register-input" name="phone" placeholder="Số điện thoại"
                                   required onChange={(e) => handleChange(e.target.value)}/>
                            <label htmlFor="email" className="register-label">Email <span>*</span></label>
                            <input type="text" className="register-input" name="email" placeholder="Email" required
                                   onChange={(e) => handleChange(e.target.value)}/>
                            <label htmlFor="password" className="register-label">Mật khẩu <span>*</span></label>
                            <input type="password" className="register-input" name="password" placeholder="Mật khẩu"
                                   required onChange={(e) => handleChange(e.target.value)}/>
                            <label htmlFor="confirm-password" className="register-label">Xác nhận mật
                                khẩu <span>*</span></label>
                            <input type="password" className="register-input" name="repeatPassword"
                                   placeholder="Xác nhận mật khẩu" required
                                   onChange={(e) => handleChange(e.target.value)}/>
                            <button type="submit" className="register-button">Đăng ký</button>
                            <div className="register-social">
                                <p className="register-social-text">Hoặc đăng ký bằng</p>
                                <div className="register-social-buttons">
                                    <button className="register-social-facebook"><FaFacebookF/></button>
                                    <button className="register-social-google"><FaGoogle/></button>
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