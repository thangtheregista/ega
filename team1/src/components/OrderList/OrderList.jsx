import {useEffect, useState} from "react";
import axios from "axios";

export default function OrderList() {
    const [orders, setOrders] = useState([])
    const fetchOrders = async () => {
        try {
            const response = await axios.get(`https://6887fd68adf0e59551b8be5e.mockapi.io/orders`)
            setOrders(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchOrders()
    }, []);
    const handleStatusChange = async (orderId, newStatus) => {
        try {
            await axios.put(`https://6887fd68adf0e59551b8be5e.mockapi.io/orders/${orderId}`, {
                status: newStatus
            });
            setOrders(orders.map(order =>
                order.id === orderId ? { ...order, status: newStatus } : order
            ));
            alert("Cập nhật trạng thái đơn hàng thành công!");
        } catch (error) {
            console.error("Error updating order status:", error);
            alert("Cập nhật trạng thái đơn hàng thất bại!");
        }
    };
    return(
        <div className="latest-orders__table-card">
            <div className="table-card__header">Đơn hàng mới nhất</div>
            <div className="table-card__body">
                <table className="table-card__table">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Khách hàng</th>
                        <th>SĐT</th>
                        <th>Địa chỉ</th>
                        <th>Thành tiền</th>
                        <th>Trạng thái</th>
                        <th>Ghi chú</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.sort((a, b) => b.id - a.id).map((order) => (
                        <tr>
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
                            <td>{order.shippingInfo.phone}</td>
                            <td>{order.shippingInfo.address}</td>
                            <td>{order.total.toLocaleString('vi-VN') + "₫"}</td>
                            <td>
                                <select onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                value={order.status} className="form-select form-select-sm" style={{width: "130px"}}
                                >
                                    <option value="Pending" selected={order.status === "pending"}>Đang xử lý</option>
                                    <option value="Delivered" selected={order.status === "delivered"}>Đã giao hàng</option>
                                    <option value="Refunded" selected={order.status === "refunded"}>Đã hủy</option>
                                </select>
                            </td>
                            <td>{order.shippingInfo.note}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}