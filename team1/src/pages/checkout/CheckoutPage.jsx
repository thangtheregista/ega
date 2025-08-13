import "./checkoutPage.css"
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import {useCart} from "../../hooks/CartContext.jsx";

export default function CheckoutPage() {
    const {setCart} = useCart()
    const location = useLocation()
    const navigate = useNavigate()
    const userNote = localStorage.getItem("note");
    const [note, setNote] = useState(userNote)
    const items = location.state?.items || [];
    const subtotal = items.reduce((sum, item) => {
        if (item.checked) {
            const numericPrice = parseInt(item.price.replace(/[₫.]/g, ""));
            return sum + numericPrice * item.quantity;
        }
        return sum;
    }, 0);
    const shippingFee = 50000;
    const total = subtotal + shippingFee;
    const [errors, setErrors] = useState({});

    const [shippingInfo, setShippingInfo] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        shippingAddress: "",
        note: ""
    });
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            setShippingInfo({
                email: currentUser.email || "",
                firstName: currentUser.firstName || "",
                lastName: currentUser.lastName || "",
                phone: currentUser.phone || "",
                shippingAddress: currentUser.shippingAddress || "",
                note: ""
            });
        }
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setShippingInfo(prev => ({
            ...prev,
            [name] : value
        }))
        if (name === "note") {
            localStorage.setItem("note", value);
            setNote(value)
        }
    }
    const validate = () => {
        const newErrors = {};

        if (!shippingInfo.lastName.trim()) {
            newErrors.name = 'Cần nhập họ.';
        }

        if (!shippingInfo.firstName.trim()) {
            newErrors.name = 'Cần nhập tên.';
        }

        if (!shippingInfo.shippingAddress.trim()) {
            newErrors.shippingAddress = 'Cần nhập địa chỉ.';
        }

        if (!shippingInfo.phone.trim()) {
            newErrors.phone = 'Cần nhập số điện thoại.';
        } else if (!/^\d{8,15}$/.test(shippingInfo.phone.trim())) {
            newErrors.phone = 'Số điện thoại không hợp lệ. Vui lòng nhập từ 8 đến 15 chữ số.';
        }

        if (!shippingInfo.email.trim()) {
            newErrors.email = 'Cần nhập email.';
        } else if (
            !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
                shippingInfo.email.trim()
            )
        ) {
            newErrors.email = 'Email không hợp lệ. Vui lòng nhập đúng định dạng email.';
        }
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };
    const handlePlaceOrder = async () => {
        if (!validate()) {
            return;
        }
        const orderData = {
            date: new Date().toLocaleDateString('vi-VN', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            }),
            note,
            items,
            subtotal,
            shippingFee,
            total,
            status: "Đang xử lý"
        }
        // try {
        //     await axios.post(`https://6887fd68adf0e59551b8be5e.mockapi.io/orders`, {
        //         id: uuidv4(),
        //         ...orderData
        //     })
        //     console.log(orderData)
        //     alert('Đặt hàng thành công!');
        //     const orderedIds = items.map(item => item.id);
        //     setCart(prev => prev.filter(item => !orderedIds.includes(item.id)));
        //     navigate("/")
        // } catch (error) {
        //     console.error(error)
        // }
        try {
            const response = await axios.get(
                `https://6887fd68adf0e59551b8be5e.mockapi.io/users`,
                {
                    params: {
                        email: shippingInfo.email
                    }
                }
            );
            const user = response.data[0]
            const currentOrders = user.orders || [];
            const newOrder = {
                id: uuidv4(),
                ...orderData
            }
            await axios.put(
                `https://6887fd68adf0e59551b8be5e.mockapi.io/users/${user.id}`,
                { orders: [...currentOrders, newOrder] }
            );
            console.log(orderData)
                alert('Đặt hàng thành công!');
                const orderedIds = items.map(item => item.id);
                setCart(prev => prev.filter(item => !orderedIds.includes(item.id)));
                navigate("/")
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        console.log(items)
    }, []);
    return(
        <div>
            <div className="checkout-container">
                <div className="checkout-left">
                    <h1>EGA Furniture</h1>
                    <h2>Thông tin nhận hàng</h2>
                    <form>
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={shippingInfo.email}
                            name="email"
                            onChange={handleChange}
                            required={true}/>
                        {errors.email && (
                            <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.email}</div>
                        )}
                        <label>Họ:</label>
                        <input
                            type="text"
                            placeholder="Họ"
                            value={shippingInfo.lastName}
                            name="lastName"
                            onChange={handleChange}
                            required={true}/>
                        {errors.lastName && (
                            <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.lastName}</div>
                        )}
                        <label>Tên:</label>
                        <input
                            type="text"
                            placeholder="Tên"
                            value={shippingInfo.firstName}
                            name="firstName"
                            onChange={handleChange}
                            required={true}/>
                        {errors.firstName && (
                            <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.firstName}</div>
                        )}
                        <label>Số điện thoại:</label>
                        <input
                            type="text"
                            placeholder="Số điện thoại"
                            value={shippingInfo.phone}
                            name="phone"
                            onChange={handleChange}
                            required={true}/>
                        {errors.phone && (
                            <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.phone}</div>
                        )}
                        <label>Địa chỉ:</label>
                        <input
                            type="text"
                            placeholder="Địa chỉ"
                            value={shippingInfo.shippingAddress}
                            name="address"
                            onChange={handleChange}
                            required={true}/>
                        {errors.shippingAddress && (
                            <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.shippingAddress}</div>
                        )}
                        {/*<select>*/}
                        {/*    <option>---</option>*/}
                        {/*    <option>Hồ Chí Minh</option>*/}
                        {/*    <option>Hà Nội</option>*/}
                        {/*</select>*/}
                        {/*<select>*/}
                        {/*    <option>Quận huyện (tùy chọn)</option>*/}
                        {/*</select>*/}
                        {/*<select>*/}
                        {/*    <option>Phường xã (tùy chọn)</option>*/}
                        {/*</select>*/}
                        <label>Ghi chú:</label>
                        <textarea
                            placeholder="Ghi chú (tùy chọn)"
                            value={note}
                            name="note"
                            onChange={handleChange}
                        ></textarea>
                    </form>
                    {/*<h2>Thanh toán</h2>*/}
                    {/*<div className="payment-options">*/}
                    {/*    <label><input type="radio" name="payment"/> Chuyển khoản</label>*/}
                    {/*    <label><input type="radio" name="payment"/> Thu hộ (COD)</label>*/}
                    {/*</div>*/}
                </div>

                <div className="checkout-right">
                    <h2>Đơn hàng</h2>
                    {items.map(item => (
                        <div className="cart-item">
                            <img src={item.image} alt={item.name}/>
                            <div className="item-info">
                                <p>Sofa Băng Bọc Vải Phong Cách Scandinavian</p>
                                <p className="item-qty">Số lượng: {item.quantity}</p>
                                <p>{(parseInt(item.price.replace(/[₫.]/g, ""))*item.quantity).toLocaleString('vi-VN') + "₫"}</p>
                            </div>
                        </div>
                    ))}

                    <input type="text" placeholder="Nhập mã giảm giá"/>
                    <button>Áp dụng</button>

                    <div className="total">
                        <p>Tạm tính: {subtotal.toLocaleString("vi-VN")}₫</p>
                        <p>Phí vận chuyển: 50.000₫</p>
                        <h3>Tổng cộng: {total.toLocaleString("vi-VN")}₫</h3>
                    </div>

                    <button className="order-btn" onClick={handlePlaceOrder}>ĐẶT HÀNG</button>
                    <a href="#">Quay về giỏ hàng</a>
                </div>
            </div>
        </div>
    )
}