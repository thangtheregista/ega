import React from "react";
import "./customerPage.css";
import axios from "axios";
import {Link} from "react-router-dom";
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function CustomerPage() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [showAccountInfo, setShowAccountInfo] = React.useState(true);
    const [showChangePassword, setShowChangePassword] = React.useState(false);
    const [show, setShow] = useState(false);
    const [changeData, setChangeData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        shippingAddress: "",
        avatar: "",
        password: ""
    });
    const [changePasswordData, setChangePasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [passwordErrors, setPasswordErrors] = useState({});
    const [errors, setErrors] = useState({});

    function handleShowAccountInfo() {
        setShowAccountInfo(true);
        setShowChangePassword(false);
        document.getElementById("customer-aside__menu-info").style.color = "#EC720E";
        document.getElementById("customer-aside__menu-orders").style.color = "#000";
        document.getElementById("customer-aside__menu-address").style.color = "#000";
        document.getElementById("customer-aside__menu-changePassword").style.color = "#000";
    }

    function handleShowChangePassword() {
        setShowChangePassword(true);
        setShowAccountInfo(false);
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
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setChangeData({
            firstName: currentCustomer.firstName || "",
            lastName: currentCustomer.lastName || "",
            email: currentCustomer.email || "",
            phone: currentCustomer.phone || "",
            shippingAddress: currentCustomer.shippingAddress || "",
            avatar: currentCustomer.avatar || "",
            password: ""
        });
        setShow(true);
    };

    function handleChange(e) {
        const {name, value} = e.target;
        setChangeData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleValidate() {
        const newErrors = {};
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isEmailExists = customers.some(customer => customer.email === changeData.email && customer.id !== currentCustomer.id);
        const phoneRegex = /^(0|\+84)(\d{9,10})$/;
        const isPhoneExists = customers.some(customer => customer.phone === changeData.phone && customer.id !== currentCustomer.id);
        if (!changeData.firstName) {
            newErrors.firstName = "Họ không được để trống";
        }
        if (!changeData.lastName) {
            newErrors.lastName = "Tên không được để trống";
        }
        if (!changeData.email) {
            newErrors.email = "Email không được để trống";
        } else if (!emailRegex.test(changeData.email)) {
            newErrors.email = "Email không hợp lệ";
        } else if (isEmailExists) {
            newErrors.email = "Email đã tồn tại";
        }
        if (!changeData.phone) {
            newErrors.phone = "Số điện thoại không được để trống";
        } else if (!phoneRegex.test(changeData.phone)) {
            newErrors.phone = "Số điện thoại không hợp lệ";
        } else if (isPhoneExists) {
            newErrors.phone = "Số điện thoại đã tồn tại";
        }
        if (!changeData.shippingAddress) {
            newErrors.shippingAddress = "Địa chỉ không được để trống";
        }
        if (!changeData.avatar) {
            newErrors.avatar = "Ảnh đại diện không được để trống";
        }
        if (!changeData.password) {
            newErrors.password = "Mật khẩu không được để trống";
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
        if (changeData.password !== currentCustomer.password) {
            alert("Mật khẩu không đúng. Vui lòng nhập lại.");
            return;
        }
        try {
            await axios.put(`https://6887fd68adf0e59551b8be5e.mockapi.io/users/${currentCustomer.id}`, {
                firstName: changeData.firstName,
                lastName: changeData.lastName,
                email: changeData.email,
                phone: changeData.phone,
                shippingAddress: changeData.shippingAddress,
                avatar: changeData.avatar,
            });
            setCustomers(prevCustomers =>
                prevCustomers.map(customer =>
                    customer.id === currentCustomer.id ? {...customer, ...changeData} : customer
                )
            );
            localStorage.setItem('currentUser', JSON.stringify({
                ...currentUser,
                firstName: changeData.firstName,
                lastName: changeData.lastName,
                email: changeData.email,
                phone: changeData.phone,
                shippingAddress: changeData.shippingAddress,
                avatar: changeData.avatar
            }));
            handleClose();
        } catch (error) {
            console.error("Lỗi khi cập nhật thông tin:", error);
        }
    };

    function handleChangePassword(e) {
        const {name, value} = e.target;
        setChangePasswordData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleValidatePassword() {
        const newErrors = {};
        if (changePasswordData.currentPassword !== currentCustomer.password) {
            newErrors.currentPassword = "Mật khẩu hiện tại không đúng";
        }
        if (changePasswordData.newPassword.length < 8) {
            newErrors.newPassword = "Mật khẩu mới phải có ít nhất 8 ký tự";
        }
        if (changePasswordData.newPassword !== changePasswordData.confirmPassword) {
            newErrors.confirmPassword = "Xác nhận mật khẩu không khớp";
        }
        return newErrors;
    }

    const handleSubmitPassword = async (e) => {
        e.preventDefault();
        const errors = handleValidatePassword();
        if (Object.keys(errors).length > 0) {
            setPasswordErrors(errors);
            return;
        } else {
            setPasswordErrors({});
        }
        try {
            await axios.put(`https://6887fd68adf0e59551b8be5e.mockapi.io/users/${currentCustomer.id}`, {
                password: changePasswordData.newPassword,
            });
            setCustomers(prevCustomers =>
                prevCustomers.map(customer =>
                    customer.id === currentCustomer.id ? {
                        ...customer,
                        password: changePasswordData.newPassword
                    } : customer
                )
            );
            localStorage.setItem('currentUser', JSON.stringify({
                ...currentUser,
                password: changePasswordData.newPassword
            }));
            alert("Đổi mật khẩu thành công");
        } catch (error) {
            console.error("Lỗi khi cập nhật mật khẩu:", error);
        }
    };
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
                        <a href="#" id="customer-aside__menu-info" onClick={() => handleShowAccountInfo()}
                           style={{color: "#EC720E"}}>Thông
                            tin cá nhân</a>
                        <Link to="/ega/customer/orders"><a href="#" id="customer-aside__menu-orders">Đơn hàng
                            của tôi</a></Link>
                        <a href="#" id="customer-aside__menu-changePassword" onClick={() => handleShowChangePassword()}>Đổi
                            mật khẩu</a>
                    </div>
                    <div className="customer-main">
                        {showAccountInfo ? (
                            <div className="customer-main__info">
                                <h3>THÔNG TIN TÀI KHOẢN</h3>
                                <strong>Họ
                                    tên: </strong><p>{`${currentUser.firstName} ${currentUser.lastName}`}</p>
                                <strong>Email: </strong><p>{currentCustomer.email}</p>
                                <strong>Số điện thoại: </strong><p>{currentCustomer.phone}</p>
                                <strong>Địa chỉ: </strong><p>{currentCustomer.shippingAddress}</p>
                                <button onClick={handleShow}>Sửa thông tin</button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>SỬA THÔNG TIN</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Họ:</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Nhập họ của bạn"
                                                    autoFocus
                                                    name="lastName"
                                                    value={changeData.lastName}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </Form.Group>
                                            {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
                                            <Form.Group className="mb-3">
                                                <Form.Label>Tên:</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Nhập tên của bạn"
                                                    name="firstName"
                                                    value={changeData.firstName}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </Form.Group>
                                            {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email:</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Nhập email của bạn"
                                                    name="email"
                                                    value={changeData.email}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </Form.Group>
                                            {errors.email && <p className="text-danger">{errors.email}</p>}
                                            <Form.Group className="mb-3">
                                                <Form.Label>Số điện thoại:</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Nhập số điện thoại của bạn"
                                                    name="phone"
                                                    value={changeData.phone}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </Form.Group>
                                            {errors.phone && <p className="text-danger">{errors.phone}</p>}
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Nhập địa chỉ:</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    autoFocus
                                                    placeholder="Nhập địa chỉ của bạn"
                                                    name="shippingAddress"
                                                    value={changeData.shippingAddress}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </Form.Group>
                                            {errors.shippingAddress &&
                                                <p className="text-danger">{errors.shippingAddress}</p>}
                                            <Form.Group className="mb-3">
                                                <Form.Label>Ảnh đại diện:</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Nhập đường dẫn ảnh đại diện"
                                                    name="avatar"
                                                    value={changeData.avatar}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </Form.Group>
                                            {errors.avatar && <p className="text-danger">{errors.avatar}</p>}
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlTextarea1"
                                            >
                                                <Form.Label>Nhập mật khẩu để xác nhận</Form.Label>
                                                <Form.Control type="password"
                                                              placeholder="Nhập mật khẩu để xác nhận"
                                                              name="password"
                                                              value={changeData.password}
                                                              onChange={(e) => handleChange(e)}
                                                />
                                            </Form.Group>
                                            {errors.password && <p className="text-danger">{errors.password}</p>}
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Đóng
                                        </Button>
                                        <Button variant="primary" onClick={handleSubmit}>
                                            Lưu thay đổi
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        ) : showChangePassword ? (
                            <div className="customer-main__change-password">
                                <h3>ĐỔI MẬT KHẨU</h3>
                                <p>Để đảm bảo tính bảo mật, vui lòng đặt mật khẩu với ít nhất 8 ký tự</p>
                                <form className="password-form" onSubmit={handleSubmitPassword}>
                                    <div className="password_form-group">
                                        <label htmlFor="currentPassword">Mật khẩu hiện tại: <span
                                            style={{color: "red"}}>*</span></label> <br/>
                                        <input type="password" id="currentPassword" name="currentPassword"
                                               className="password-input" required
                                               value={changePasswordData.currentPassword}
                                               onChange={(e) => handleChangePassword(e)}/>
                                        {passwordErrors.currentPassword && (
                                            <p className="text-danger">{passwordErrors.currentPassword}</p>
                                        )}
                                    </div>
                                    <div className="password_form-group">
                                        <label htmlFor="newPassword">Mật khẩu mới: <span style={{color: "red"}}>*</span></label>
                                        <br/>
                                        <input type="password" id="newPassword" name="newPassword"
                                               className="password-input" required
                                               value={changePasswordData.newPassword}
                                               onChange={(e) => handleChangePassword(e)}/>
                                        {passwordErrors.newPassword && (
                                            <p className="text-danger">{passwordErrors.newPassword}</p>
                                        )}
                                    </div>
                                    <div className="password_form-group">
                                        <label htmlFor="confirmPassword">Xác nhận mật khẩu mới: <span
                                            style={{color: "red"}}>*</span></label> <br/>
                                        <input type="password" id="confirmPassword" name="confirmPassword"
                                               className="password-input" required
                                               value={changePasswordData.confirmPassword}
                                               onChange={(e) => handleChangePassword(e)}/>
                                        {passwordErrors.confirmPassword && (
                                            <p className="text-danger">{passwordErrors.confirmPassword}</p>
                                        )}
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