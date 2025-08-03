import React from "react";
import "./customerPage.css";

function CustomerPage() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [showAccountInfo, setShowAccountInfo] = React.useState(false);
    const [showOrders, setShowOrders] = React.useState(false);
    const [showAddress, setShowAddress] = React.useState(false);
    const [showChangePassword, setShowChangePassword] = React.useState(false);
    function handleShowAccountInfo() {
        setShowAccountInfo(true);
        setShowOrders(false);
        setShowAddress(false);
        setShowChangePassword(false);
    }
    function handleShowOrders() {
        setShowOrders(true);
        setShowAccountInfo(false);
        setShowAddress(false);
        setShowChangePassword(false);
    }
    function handleShowAddress() {
        setShowAddress(true);
        setShowAccountInfo(false);
        setShowOrders(false);
        setShowChangePassword(false);
    }
    function handleShowChangePassword() {
        setShowChangePassword(true);
        setShowAccountInfo(false);
        setShowOrders(false);
        setShowAddress(false);
    }
    return (
        <>
            <div className="customerPage-container">
                <div className="customer-breadcrumb">
                    <a href="#" className="customer-breadcrumb__link">Trang chủ</a> / <strong className="customer-breadcrumb__current">Trang khách hàng</strong>
                </div>
                <div className="customerPage-content">
                    <div className="customer-aside__menu">
                        <div className="customer-aside__menu-header">
                            <h3>TRANG TÀI KHOẢN</h3>
                            <p style={{fontWeight: "bold"}}>Xin chào, <span style={{color: "#EC720E"}}>{`${currentUser.firstName} ${currentUser.lastName}`}!</span></p>
                        </div>
                        <a href="#" className="customer-aside__menu-item" onClick={() => handleShowAccountInfo()}>Thông tin cá nhân</a>
                        <a href="#" className="customer-aside__menu-item" onClick={() => handleShowOrders()}>Đơn hàng của tôi</a>
                        <a href="#" className="customer-aside__menu-item" onClick={() => handleShowAddress()}>Địa chỉ giao hàng</a>
                        <a href="#" className="customer-aside__menu-item" onClick={() => handleShowChangePassword()}>Đổi mật khẩu</a>
                    </div>
                    <div className="customer-main">
                        {/*{showAccountInfo ? (*/}
                        {/*    <div className="customer-main__info">*/}
                        {/*        <h3>THÔNG TIN TÀI KHOẢN</h3>*/}
                        {/*        <strong>Họ tên:</strong><span>{`${currentUser.firstName} ${currentUser.lastName}`}</span>*/}
                        {/*        <strong>Email:</strong><span>{currentUser.email}</span>*/}
                        {/*    </div>*/}
                        {/*): {showOrders ? (*/}
                        {/*    <div className="customer-main__orders">*/}
                        {/*        <h3>ĐƠN HÀNG CỦA BẠN</h3>*/}
                        {/*        <table border={1}>*/}
                        {/*            <thead>*/}
                        {/*            <tr>*/}
                        {/*                <th>Đơn hàng</th>*/}
                        {/*                <th>Ngày</th>*/}
                        {/*                <th>Địa chỉ</th>*/}
                        {/*                <th>Giá trị đơn hàng</th>*/}
                        {/*                <th>TT Thanh toán</th>*/}
                        {/*            </tr>*/}
                        {/*            </thead>*/}
                        {/*            <tbody>*/}

                        {/*            </tbody>*/}
                        {/*        </table>*/}
                        {/*    </div>*/}
                        {/*    )}}*/}
                    </div>
                </div>
            </div>
        </>
    )
}
export default CustomerPage;