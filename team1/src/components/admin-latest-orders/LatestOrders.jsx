import "./latestOrder.css";
import axios from "axios";
import {useEffect, useState} from "react";

export default function LatestOrders() {
    const [orders, setOrders] = useState([]);
    const fetchOrders = async () => {
        try {
            const response = await axios.get("https://6887fd68adf0e59551b8be5e.mockapi.io/users");
            const users = response.data;
            const ordersWithUserName = users.flatMap(user =>
                user.orders.map(order => ({
                    id: order.id,
                    items: order.items,
                    shippingInfo: user.shippingAddress,
                    date: order.date,
                    status: order.status,
                    userName: `${user.lastName} ${user.firstName}`,
                }))
            );
            const sortedOrders = [...ordersWithUserName].sort((a, b) => {
                const parseDate = (dateStr) => {
                    const [time, date] = dateStr.split(' ');
                    const [hour, minute] = time.split(':').map(Number);
                    const [day, month, year] = date.split('/').map(Number);
                    return new Date(year, month - 1, day, hour, minute);
                };
                return parseDate(b.date) - parseDate(a.date);
            });
            setOrders(sortedOrders);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };
    useEffect(() => {
        fetchOrders();
    }, []);
    const statusMap = {
        "Đang xử lý": "pending",
        "Đang giao hàng": "shipping",
        "Đã giao hàng": "delivered",
        "Đã hủy": "refunded",
    };
    return (
        <div className="latest-orders__table-card">
            <div className="table-card__header">Đơn đặt mới nhất</div>
            <div className="table-card__body">
                <table className="table-card__table">
                    <thead>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Tên khách hàng</th>
                        <th>Ngày đặt</th>
                        <th>Trạng thái</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>
                                <div className="table-card__product">
                                    {order.items.map((item) => (
                                        <div className="table-card__product-item" key={item.id}>
                                            <img src={item.image} alt={item.name}/>
                                            <span className="table-card__product-item__name">{item.name}</span>
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
                            <td>{order.userName}</td>
                            <td>{order.date}</td>
                            <td>
                                <span
                                    className={`table-card__status table-card__status--${(statusMap[order.status] || order.status).toLowerCase()}`}>
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