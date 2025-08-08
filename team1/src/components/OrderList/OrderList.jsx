import {useEffect, useState} from "react";
import axios from "axios";

export default function OrderList() {
    const [orders, setOrders] = useState([])
    const fetchOrders = async () => {
        try {
            const response = await axios.get(`https://6887fd68adf0e59551b8be5e.mockapi.io/users`)
            const users = response.data
            const ordersWithUserName = users.flatMap(user =>
                user.orders.map(order => ({
                    userName: `${user.lastName} ${user.firstName}`,
                    userID: user.id,
                    userPhone: user.phone,
                    userEmail: user.email,
                    userAddress: user.shippingAddress,
                    order: order
                }))
            );

            const sortedOrders = [...ordersWithUserName].sort((a, b) => {
                const parseDate = (dateStr) => {
                    // From "HH:mm DD/MM/YYYY"
                    const [time, date] = dateStr.split(' ');
                    const [hour, minute] = time.split(':').map(Number);
                    const [day, month, year] = date.split('/').map(Number);
                    return new Date(year, month - 1, day, hour, minute);
                };

                return parseDate(b.order.date) - parseDate(a.order.date);
            });

            console.log(sortedOrders);
            setOrders(sortedOrders)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchOrders()
    }, []);
    const handleStatusChange = async (orderId, newStatus, userId) => {
        try {
            // await axios.put(`https://6887fd68adf0e59551b8be5e.mockapi.io/orders/${orderId}`, {
            //     status: newStatus
            // });

            const response = await axios.get(`https://6887fd68adf0e59551b8be5e.mockapi.io/users/${userId}`);
            const user = response.data;
            const updatedOrders = user.orders.map(order =>
                order.id === orderId ? { ...order, status: newStatus } : order
            );
            await axios.put(
                `https://6887fd68adf0e59551b8be5e.mockapi.io/users/${userId}`,
                { orders: updatedOrders }
            );
            setOrders(
                orders.map(item =>
                    item.order.id === orderId
                        ? { ...item, order: { ...item.order, status: newStatus } }
                        : item
                )
            );

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
                        <th>Mã đơn hàng</th>
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
                    {orders.map((order) => (
                        <tr key={order.order.id}>
                            <td>{order.order.id}</td>
                            <td>
                                <div className="table-card__product">
                                    {order.order.items.map((item) => (
                                        <div className="table-card__product-item" key={item.id}>
                                            <img src={item.image} alt={item.name}/>
                                               <span>{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </td>
                            <td>
                                <div className="table-card__product-quantity">
                                    {order.order.items.map((item) => (
                                        <span className="table-card__product-quantity-item" key={item.id}>
                                            {item.quantity}
                                        </span>
                                    ))}
                                </div>
                            </td>
                            <td>{order.userName}</td>
                            <td>{order.userPhone}</td>
                            <td>{order.userAddress}</td>
                            <td>{order.order.total.toLocaleString('vi-VN') + "₫"}</td>
                            <td>
                                <select onChange={(e) => handleStatusChange(order.order.id, e.target.value, order.userID)}
                                value={order.order.status} className="form-select form-select-sm" style={{width: "130px"}}
                                >
                                    <option value="Đang xử lý" selected={order.order.status === "Đang xử lý"}>Đang xử lý</option>
                                    <option value="Đang giao hàng" selected={order.order.status === "Đang giao hàng"}>Đang giao hàng</option>
                                    <option value="Đã giao hàng" selected={order.order.status === "Đã giao hàng"}>Đã giao hàng</option>
                                    <option value="Đã hủy" selected={order.order.status === "Đã hủy"}>Đã hủy</option>
                                </select>
                            </td>
                            <td>{order.order.note}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}