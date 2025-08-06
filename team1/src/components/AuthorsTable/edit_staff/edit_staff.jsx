import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import "./edit_staff.css";
function EditStaff() {
    const {id} = useParams();
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        shippingAddress: "",
        age: "",
        salary: "",
        title: "",
        team: "",
        status: "",
        date: new Date().toLocaleDateString(),
        avatar: "",
        isBlocked: false,
        password: "",
    });
    const fetchStaff = async () => {
        try {
            const response = await axios.get(`https://6887fd68adf0e59551b8be5e.mockapi.io/users/${id}`);
            setFormData(response.data);
        } catch (error) {
            console.error("Error fetching staff data:", error);
        }
    }
    React.useEffect(() => {
        fetchStaff();
    }, [id]);
    const navigate = useNavigate();
    if (!formData) {
        return <div>Loading...</div>;
    }
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
        const phoneRegex = /^(0|\+84)(\d{9,10})$/;
        if (!formData.firstName) newErrors.firstName = "Vui lòng nhập tên.";
        if (!formData.lastName) newErrors.lastName = "Vui lòng nhập họ.";
        if (!formData.email) {
            newErrors.email = "Vui lòng nhập email.";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Email không hợp lệ.";
        }
        if (!formData.phone) {
            newErrors.phone = "Vui lòng nhập số điện thoại.";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Số điện thoại không hợp lệ.";
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
        try {
            await axios.put(`https://6887fd68adf0e59551b8be5e.mockapi.io/users/${id}`, formData);
            alert("Cập nhật nhân viên thành công!");
            navigate("/ega/dashboard/staff");
        } catch (error) {
            console.error("Error updating staff:", error);
            alert("Cập nhật nhân viên thất bại. Vui lòng thử lại sau.");
        }
    }
    return (
        <>
            <div className="profile">
                <div className="edit-profile">
                    <h2 className="edit-profile__title">Sửa hồ sơ</h2>
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
                    <button className="edit-profile__button" onClick={(e) => handleSubmit(e)}>Cập nhật</button>
                    <button className="back__button" onClick={() => navigate(-1)}>Quay lại</button>
                </div>
            </div>
        </>
    )
}
export default EditStaff;