import React, {useEffect} from "react";
import "./register-page.css"
import {FaFacebookF, FaGoogle} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        lastName: "",
        firstName: "",
        phone: "",
        email: "",
        role: "customer",
        avatar: "",
        shippingAddress: "",
        password: "",
        repeatPassword: "",
    });
    const [users, setUsers] = React.useState([]);
    const fetchUsers = async () => {
        try {
            const response = await axios.get("https://6887fd68adf0e59551b8be5e.mockapi.io/users/");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }
    useEffect(() => {
        fetchUsers();
    },[]);

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const [errors, setErrors] = React.useState({});
    function handleValidate() {
        const newErrors = {};
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^(0|\+84)(\d{9,10})$/;
        if (!emailRegex.test(formData.email)) newErrors.email = "Email không hợp lệ.";
        const isEmailExist = users.some(customer => customer.email === formData.email);
        if (isEmailExist) newErrors.email = "Email đã tồn tại.";
        const isPhoneExist = users.some(customer => customer.phone === formData.phone);
        if (isPhoneExist) newErrors.phone = "Số điện thoại đã tồn tại.";
        if (!phoneRegex.test(formData.phone)) newErrors.phone = "Số điện thoại không hợp lệ.";
        if (formData.password.length < 6) newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự.";
        if (formData.repeatPassword !== formData.password) {
            newErrors.repeatPassword = "Mật khẩu xác nhận không khớp.";
        }
        return newErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = handleValidate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        } else {
            setErrors({});
        }
        const maxId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
        try {
            const newCustomer = {
                id: maxId + 1,
                lastName: formData.lastName,
                firstName: formData.firstName,
                phone: formData.phone,
                email: formData.email,
                role: formData.role,
                avatar: formData.avatar,
                shippingAddress: formData.shippingAddress,
                password: formData.password
            }
            await axios.post("https://6887fd68adf0e59551b8be5e.mockapi.io/users/", newCustomer);
            localStorage.setItem("currentUser", JSON.stringify(newCustomer));
            alert("Đăng ký thành công!");
        } catch (error) {
            console.error("Error creating new customer:", error);
            alert("Đăng ký không thành công, vui lòng thử lại sau.");
            return;
        }
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userRole", "customer");
        navigate("/");
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
                        <form className="register-form" onSubmit={handleSubmit}>
                            <label htmlFor="last-name" className="register-label">Họ <span>*</span></label>
                            <input type="text" className="register-input" name="lastName" placeholder="Họ" required
                                   onChange={(e) => handleChange(e)}/>
                            { errors.lastName && <p className="error-message">{errors.lastName}</p>}
                            <label htmlFor="first-name" className="register-label">Tên <span>*</span></label>
                            <input type="text" className="register-input" name="firstName" placeholder="Tên" required
                                   onChange={(e) => handleChange(e)}/>
                            { errors.firstName && <p className="error-message">{errors.firstName}</p>}
                            <label htmlFor="phone" className="register-label">Số điện thoại <span>*</span></label>
                            <input type="text" className="register-input" name="phone" placeholder="Số điện thoại"
                                   required onChange={(e) => handleChange(e)}/>
                            { errors.phone && <p className="error-message">{errors.phone}</p>}
                            <label htmlFor="shipping-address" className="register-label">Địa chỉ giao hàng <span>*</span></label>
                            <input type="text" className="register-input" name="shippingAddress"
                                   placeholder="Địa chỉ giao hàng" required onChange={(e) => handleChange(e)}/>
                            { errors.shippingAddress && <p className="error-message">{errors.shippingAddress}</p>}
                            <label htmlFor="avatar" className="register-label">Ảnh đại diện <span>*</span></label>
                            <input type="text" className="register-input" name="avatar" placeholder="URL ảnh đại diện" required
                                   onChange={(e) => handleChange(e)}/>
                            { errors.avatar && <p className="error-message">{errors.avatar}</p>}
                            <label htmlFor="email" className="register-label">Email (Dùng để đăng nhập) <span>*</span></label>
                            <input type="text" className="register-input" name="email" placeholder="Email" required
                                   onChange={(e) => handleChange(e)}/>
                            { errors.email && <p className="error-message">{errors.email}</p>}
                            <label htmlFor="password" className="register-label">Mật khẩu <span>*</span></label>
                            <input type="password" className="register-input" name="password" placeholder="Mật khẩu"
                                   required onChange={(e) => handleChange(e)}/>
                            { errors.password && <p className="error-message">{errors.password}</p>}
                            <label htmlFor="confirm-password" className="register-label">Xác nhận mật
                                khẩu <span>*</span></label>
                            <input type="password" className="register-input" name="repeatPassword"
                                   placeholder="Xác nhận mật khẩu" required
                                   onChange={(e) => handleChange(e)}/>
                            { errors.repeatPassword && <p className="error-message">{errors.repeatPassword}</p>}
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