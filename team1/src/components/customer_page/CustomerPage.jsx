import React from "react";
import "./customerPage.css";
import axios from "axios";
import {Link} from "react-router-dom";

function CustomerPage() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [showAccountInfo, setShowAccountInfo] = React.useState(true);
    const [showAddress, setShowAddress] = React.useState(false);
    const [showChangePassword, setShowChangePassword] = React.useState(false);

    function handleShowAccountInfo() {
        setShowAccountInfo(true);
        setShowAddress(false);
        setShowChangePassword(false);
        document.getElementById("customer-aside__menu-info").style.color = "#EC720E";
        document.getElementById("customer-aside__menu-orders").style.color = "#000";
        document.getElementById("customer-aside__menu-address").style.color = "#000";
        document.getElementById("customer-aside__menu-changePassword").style.color = "#000";
    }

    function handleShowAddress() {
        setShowAddress(true);
        setShowAccountInfo(false);
        setShowChangePassword(false);
        document.getElementById("customer-aside__menu-address").style.color = "#EC720E";
        document.getElementById("customer-aside__menu-info").style.color = "#000";
        document.getElementById("customer-aside__menu-orders").style.color = "#000";
        document.getElementById("customer-aside__menu-changePassword").style.color = "#000";
    }

    function handleShowChangePassword() {
        setShowChangePassword(true);
        setShowAccountInfo(false);
        setShowAddress(false);
        document.getElementById("customer-aside__menu-changePassword").style.color = "#EC720E";
        document.getElementById("customer-aside__menu-info").style.color = "#000";
        document.getElementById("customer-aside__menu-orders").style.color = "#000";
        document.getElementById("customer-aside__menu-address").style.color = "#000";
    }

    const [customers, setCustomers] = React.useState([]);
    const fetchCustomers = async () => {
        try {
            const response = await axios.get("https://6887fd68adf0e59551b8be5e.mockapi.io/users?role=customer");
            setCustomers(response.data);
        } catch (error) {
            console.error("Error fetching customers:", error);
        }
    }
    React.useEffect(() => {
        fetchCustomers();
    }, []);
    const currentCustomer = customers.find(customer => customer.email === currentUser.email);
    if (!currentCustomer) {
        return <div className="customerPage-container">Không tìm thấy thông tin khách hàng.</div>;
    }
    return (
        <>
            <div className="customerPage-container">
                <div className="customer-breadcrumb">
                    <a href="#" className="customer-breadcrumb__link">Trang chủ</a> / <strong
                    className="customer-breadcrumb__current">Trang khách hàng</strong>
                </div>
                <div className="customerPage-content">
                    <div className="customer-aside__menu">
                        <div className="customer-aside__menu-header">
                            <h3>TRANG TÀI KHOẢN</h3>
                            <p style={{fontWeight: "bold"}}>Xin chào, <span
                                style={{color: "#EC720E"}}>{`${currentUser.firstName} ${currentUser.lastName}`}!</span>
                            </p>
                        </div>
                        <a href="#" id="customer-aside__menu-info" onClick={() => handleShowAccountInfo()} style={{color: "#EC720E"}}>Thông
                            tin cá nhân</a>
                        <Link to="/ega/customer/orders"><a href="#" id="customer-aside__menu-orders">Đơn hàng
                            của tôi</a></Link>
                        <a href="#" id="customer-aside__menu-address" onClick={() => handleShowAddress()}>Địa chỉ
                            giao hàng</a>
                        <a href="#" id="customer-aside__menu-changePassword" onClick={() => handleShowChangePassword()}>Đổi
                            mật khẩu</a>
                    </div>
                    <div className="customer-main">
                        {showAccountInfo ? (
                            <div className="customer-main__info">
                                <h3>THÔNG TIN TÀI KHOẢN</h3>
                                <strong>Họ
                                    tên: </strong><span>{`${currentUser.firstName} ${currentUser.lastName}`}</span>
                                <br/>
                                <strong>Email: </strong><span>{currentUser.email}</span>
                            </div>
                        ) : showAddress ? (
                            <div className="customer-main__address">
                                <h3>ĐỊA CHỈ GIAO HÀNG</h3>
                                <strong>Họ
                                    tên: </strong><span>{`${currentUser.firstName} ${currentUser.lastName}`}</span>
                                <br/>
                                <strong>Địa
                                    chỉ: </strong><span>{currentCustomer.shippingAddress || "Chưa cập nhật"}</span>
                                <br/>
                                <strong>Số điện thoại: </strong><span>{currentCustomer.phone || "Chưa cập nhật"}</span>
                                <br/>
                                <button>Thêm địa chỉ</button>
                            </div>
                        ) : showChangePassword ? (
                            <div className="customer-main__change-password">
                                <h3>ĐỔI MẬT KHẨU</h3>
                                <p>Để đảm bảo tính bảo mật, vui lòng đặt mật khẩu với ít nhất 8 ký tự</p>
                                <form className="password-form">
                                    <div className="password_form-group">
                                        <label htmlFor="currentPassword">Mật khẩu hiện tại: <span
                                            style={{color: "red"}}>*</span></label> <br/>
                                        <input type="password" id="currentPassword" name="currentPassword"
                                               className="password-input" required/>
                                    </div>
                                    <div className="password_form-group">
                                        <label htmlFor="newPassword">Mật khẩu mới: <span style={{color: "red"}}>*</span></label>
                                        <br/>
                                        <input type="password" id="newPassword" name="newPassword"
                                               className="password-input" required/>
                                    </div>
                                    <div className="password_form-group">
                                        <label htmlFor="confirmPassword">Xác nhận mật khẩu mới: <span
                                            style={{color: "red"}}>*</span></label> <br/>
                                        <input type="password" id="confirmPassword" name="confirmPassword"
                                               className="password-input" required/>
                                    </div>
                                    <button type="submit">Đổi mật khẩu</button>
                                </form>
                            </div>
                        ) : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerPage;