import "./staffForm.css"
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function StaffForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        lastName: "",
        firstName: "",
        phone: "",
        email: "",
        role: "staff",
        shippingAddress: "",
        age: "",
        salary: "",
        team: "",
        title: "",
        avatar: "",
        isBlocked: false,
        password: "",
        status: "offline",
        date: new Date().toISOString().split('T')[0]
    })
    const [users, setUsers] = useState([]);
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
    }, []);

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === "age" || name === "salary" ? parseFloat(value) : value
        }));
    }

    const [errors, setErrors] = useState({});

    function handleValidate() {
        const newErrors = {};
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isEmailExist = users.some(staff => staff.email === formData.email);
        const phoneRegex = /^(0|\+84)(\d{9,10})$/;
        const isPhoneExist = users.some(staff => staff.phone === formData.phone);
        if (!formData.firstName) newErrors.firstName = "Vui lòng nhập tên.";
        if (!formData.lastName) newErrors.lastName = "Vui lòng nhập họ.";
        if (!formData.email) {
            newErrors.email = "Vui lòng nhập email.";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Email không hợp lệ.";
        } else if (isEmailExist) {
            newErrors.email = "Email đã tồn tại.";
        }
        if (!formData.phone) {
            newErrors.phone = "Vui lòng nhập số điện thoại.";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Số điện thoại không hợp lệ.";
        } else if (isPhoneExist) {
            newErrors.phone = "Số điện thoại đã tồn tại.";
        }
        if (!formData.shippingAddress) newErrors.shippingAddress = "Vui lòng nhập địa chỉ.";
        if (!formData.age || isNaN(formData.age) || formData.age <= 18 || formData.age > 60) {
            newErrors.age = "Vui lòng nhập tuổi hợp lệ.";
        }
        if (!formData.salary || isNaN(formData.salary) || formData.salary <= 0) {
            newErrors.salary = "Vui lòng nhập lương hợp lệ.";
        }
        if (!formData.team) newErrors.team = "Vui lòng nhập nhóm.";
        if (!formData.title) newErrors.title = "Vui lòng nhập chức danh.";
        if (!formData.avatar) newErrors.avatar = "Vui lòng nhập link ảnh đại diện.";
        if (!formData.password) newErrors.password = "Vui lòng nhập mật khẩu.";
        if (formData.password.length < 6) newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự.";
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
            const newStaff = {
                id: maxId + 1,
                lastName: formData.lastName,
                firstName: formData.firstName,
                phone: formData.phone,
                email: formData.email,
                role: formData.role,
                shippingAddress: formData.shippingAddress,
                age: formData.age,
                password: formData.password,
                salary: formData.salary,
                team: formData.team,
                title: formData.title,
                avatar: formData.avatar,
                isBlocked: formData.isBlocked,
                status: formData.status,
                date: formData.date
            };
            await axios.post("https://6887fd68adf0e59551b8be5e.mockapi.io/users/", newStaff);
            alert("Thêm nhân viên thành công!");
            setFormData({
                lastName: "",
                firstName: "",
                phone: "",
                email: "",
                role: "staff",
                shippingAddress: "",
                age: "",
                salary: "",
                team: "",
                title: "",
                avatar: "",
                isBlocked: false,
                password: "",
                status: "offline",
                date: new Date().toISOString().split('T')[0]
            });
            setErrors({});
        } catch (error) {
            console.error("Error adding staff:", error);
            alert("Thêm nhân viên thất bại. Vui lòng thử lại.");
        }
    }
    return (
        <div>
            <div className="profile">
                <div className="edit-profile">
                    <h2 className="edit-profile__title">Thêm hồ sơ</h2>
                    <div className="edit-profile__grid">
                        <div className="edit-profile__field">
                            <label htmlFor="first-name">Tên</label>
                            <input type="text" id="first-name" name="firstName" value={formData.firstName}
                                   placeholder="Tên"
                                   onChange={(e) => handleChange(e)}/>
                            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="last-name">Họ</label>
                            <input type="text" id="last-name" placeholder="Họ" name="lastName"
                                   value={formData.lastName}
                                   onChange={(e) => handleChange(e)}/>
                            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="email-edit">Email (Dùng để đăng nhập)</label>
                            <input type="email" id="email-edit" placeholder="Email" name="email" value={formData.email} onChange={(e) => handleChange(e)}/>
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="password">Mật khẩu</label>
                            <input type="text" id="password" placeholder="Mật khẩu" name="password" value={formData.password} onChange={(e) => handleChange(e)}/>
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="shippingAddress">Địa chỉ</label>
                            <input type="text" id="shippingAddress" placeholder="Địa chỉ" name="shippingAddress" value={formData.shippingAddress}
                                   onChange={(e) => handleChange(e)}/>
                            {errors.shippingAddress && <span className="error-message">{errors.shippingAddress}</span>}
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="age">Tuổi</label>
                            <input type="text" id="age" placeholder="Tuổi" name="age" value={formData.age} onChange={(e) => handleChange(e)}/>
                            {errors.age && <span className="error-message">{errors.age}</span>}
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="phone">SĐT</label>
                            <input type="text" id="phone" placeholder="SĐT" name="phone" value={formData.phone} onChange={(e) => handleChange(e)}/>
                            {errors.phone && <span className="error-message">{errors.phone}</span>}
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="salary">Lương</label>
                            <input type="text" id="salary" placeholder="Lương" name="salary" value={formData.salary} onChange={(e) => handleChange(e)}/>
                            {errors.salary && <span className="error-message">{errors.salary}</span>}
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="team">Phòng ban</label>
                            <select id="team" onChange={(e) => handleChange(e)} name="team" value={formData.team}>
                                <option value="">--Chọn phòng ban--</option>
                                <option value="Product & Content Management">Product & Content Management</option>
                                <option value="Technology">Technology</option>
                                <option value="Operations & Logistics">Operations & Logistics</option>
                                <option value="Sales & Marketing">Sales & Marketing</option>
                                <option value="Customer Support">Customer Support</option>
                                <option value="Business & Strategy">Business & Strategy</option>
                            </select>
                            {errors.team && <span className="error-message">{errors.team}</span>}
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="title">Chức vụ</label>
                            <input type="text" id="title" placeholder="Chức vụ" name="title" value={formData.title} onChange={(e) => handleChange(e)}/>
                            {errors.title && <span className="error-message">{errors.title}</span>}
                        </div>
                        <div className="edit-profile__field">
                            <label htmlFor="avatar">Link ảnh đại diện</label>
                            <input type="text" id="avatar" placeholder="Link ảnh đại diện" name="avatar" value={formData.avatar}
                                   onChange={(e) => handleChange(e)}/>
                            {errors.avatar && <span className="error-message">{errors.avatar}</span>}
                        </div>
                    </div>
                    {/*<div className="edit-profile__field edit-profile__field--full">*/}
                    {/*    <label htmlFor="about">About Me</label>*/}
                    {/*    <textarea id="about" placeholder="Enter about your description"></textarea>*/}
                    {/*</div>*/}
                    <button className="edit-profile__button" onClick={(e) => handleSubmit(e)}>Thêm</button>
                    <button className="back__button" onClick={() => navigate(-1)}>Quay lại</button>
                </div>
            </div>
        </div>
    )
}