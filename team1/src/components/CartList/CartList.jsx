import NothingInCart from "../NothingInCart/NothingInCart.jsx";
import "./cartList.css"
import {useCart} from "../../hooks/CartContext.jsx";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function CartList() {
    const {cart} = useCart();
    const {setCart} = useCart()
    const {removeFromCart} = useCart()

    const handleQuantityChange = (id, delta) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + delta }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };
    const toggleCheck = (id) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };
    const total = cart.reduce((sum, item) => {
        if (item.checked) {
            const numericPrice = parseInt(item.price.replace(/[₫.]/g, ""));
            return sum + numericPrice * item.quantity;
        }
        return sum;
    }, 0);

    const navigate = useNavigate()
    const handleCheckout = () => {
        const itemsToCheckout = cart.filter(item => item.checked);
        navigate('/ega/checkout', { state: { items: itemsToCheckout } });
    };
    return(
        <>
            {cart.length > 0 ?
                <div className="cart-container">
                    <h1>Giỏ hàng</h1>
                    <div className="cart-wrapper">
                        <div className="cart-items-container">
                            <div className="cart-items">
                                {cart.map((item, index) => (
                                        <div className="cart-item" key={index}>
                                            <input
                                                type="checkbox"
                                                className="check-item"
                                                data-price="50000"
                                                checked={item.checked}
                                                onChange={()=> toggleCheck(item.id)}/>
                                            <img
                                                src={item.image}
                                                alt={item.name}/>
                                            <div className="item-info">
                                                <h3>{item.name}</h3>
                                            </div>
                                            <div className="item-price">{
                                                (parseInt(item.price.replace(/[₫.]/g, ""))*item.quantity).toLocaleString('vi-VN') + "₫"
                                            }</div>
                                            <div className="item-qty">
                                                <button onClick={()=> handleQuantityChange(item.id, -1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={()=> handleQuantityChange(item.id, 1)}>+</button>
                                            </div>
                                            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>X</button>
                                        </div>
                                    ))}

                            </div>

                            <div className="order-note">
                                <label htmlFor="note">Ghi chú đơn hàng</label>
                                <textarea id="note" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="checkout">
                            {/*<div className="delivery-time">*/}
                            {/*    <h5>HẸN GIỜ NHẬN HÀNG</h5>*/}
                            {/*    <div className="d-flex ">*/}
                            {/*        <div className="flex-grow-1">*/}
                            {/*            <label htmlFor="date">Ngày nhận hàng</label>*/}
                            {/*            <input type="date" id="date" value="2025-07-31" />*/}
                            {/*        </div>*/}
                            {/*        <div className="flex-grow-1">*/}
                            {/*            <label htmlFor="time">Thời gian nhận hàng</label>*/}
                            {/*            <select id="time">*/}
                            {/*                <option>Chọn thời gian</option>*/}
                            {/*            </select>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}



                            <div className="total">
                                <p>TỔNG CỘNG</p>
                                <h3>{total.toLocaleString("vi-VN")}₫</h3>
                                <p>(Đã bao gồm VAT nếu có)</p>
                            </div>

                            <div className="discount">
                                <label>Mã giảm giá</label>
                                <input type="text" placeholder="Nhập mã giảm giá"/>
                            </div>

                            <button
                                className="pay-btn"
                                disabled={cart.filter(item => item.checked).length === 0}
                                onClick={handleCheckout}
                            >
                                Thanh Toán
                            </button>

                            <div className="payment-icons">
                                <img src="https://www.citypng.com/public/uploads/preview/hd-visa-payment-logo-png-7017516947777256ndfrewd52.png" alt="Visa"/>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard"/>
                                <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Circle.png" alt="Momo"/>
                                <img src="https://s3.thoainguyentek.com/2021/11/zalopay-logo.png" alt="ZaloPay"/>
                                <img src="https://png.pngtree.com/png-clipart/20220603/original/pngtree-red-badge-cod-cash-on-delivery-png-image_7900047.png" alt="COD"/>
                            </div>
                        </div>
                    </div>

                </div>
                :
                <NothingInCart/>
            }
        </>
    )
}