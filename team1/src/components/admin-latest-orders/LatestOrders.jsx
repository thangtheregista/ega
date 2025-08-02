import "./latestOrder.css";
import axios from "axios";
import {useEffect, useState} from "react";

export default function LatestOrders() {
    const [orders, setOrders] = useState([]);
    const fetchOrders = async () => {
        try {
            const response = await axios.get("https://6887fd68adf0e59551b8be5e.mockapi.io/orders");
            setOrders(response.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };
    useEffect(() => {
        fetchOrders();
    }, []);
    return (
        <div className="latest-orders__table-card">
            <div className="table-card__header">Đơn đặt mới nhất</div>
            <div className="table-card__body">
                <table className="table-card__table">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Tên khách hàng</th>
                        <th>Ngày đặt</th>
                        <th>Trạng thái</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.sort((a, b) => b.id - a.id).map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>
                                <div className="table-card__product">
                                    {order.items.map((item) => (
                                        <div className="table-card__product-item" key={item.id}>
                                            <img src={item.image} alt={item.name}/>
                                            <span>{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </td>
                            <td>
                                <div className="table-card__product-quantity">
                                    {order.items.map((item) => (
                                        <span className="table-card__product-quantity-item" key={item.id}>
                                            {item.quantity}
                                        </span>
                                    ))}
                                </div>
                            </td>
                            <td>{order.shippingInfo.name}</td>
                            <td>{order.date}</td>
                            <td>
                                <span
                                    className={`table-card__status table-card__status--${order.status.toLowerCase()}`}>
                                    {order.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="table-card__footer">
                <a className="table-card__footer-link" href="#">Xem tất cả →</a>
            </div>
        </div>
    )
}