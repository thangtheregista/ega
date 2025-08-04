import React from "react";
import "./customer-order-page.css"
import axios from "axios";
function CustomerOrdersPage() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
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
    return (
        <>
            <div className="customer-orders-page">
                <div className="customer-orders-page-breadcrumb">
                    <a href="#" className="customer-orders-page-breadcrumb__link">Trang chủ</a> / <strong
                    className="customer-orders-page-breadcrumb__current">Trang khách hàng</strong>
                </div>
                <div className="customer-orders-page-content">
                    <h3 className="customer-orders-page-header">ĐƠN HÀNG CỦA TÔI</h3>
                    <div className="customer-orders-page-list">
                        <table className="customer-orders-page-table">
                            <thead>
                            <tr>
                                <th>Mã đơn hàng</th>
                                <th>Đơn hàng</th>
                                <th>Số lượng</th>
                                <th>Ngày đặt</th>
                                <th>Địa chỉ</th>
                                <th>Tổng tiền</th>
                                <th>Trạng thái</th>
                            </tr>
                            </thead>
                            <tbody>
                            {currentCustomer.orders && currentCustomer.orders.length > 0 ? (
                                currentCustomer.orders.map((order) => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.items.map(item => (
                                            <span key={item.id}>{item.name}</span>
                                        ))}</td>
                                        <td>{order.items.map(item => (
                                            <span key={item.id}>{item.quantity}</span>
                                        ))}</td>
                                        <td>{new Date(order.date).toLocaleDateString()}</td>
                                        <td>{currentCustomer.shippingAddress}</td>
                                        <td>{order.total.toLocaleString()} VNĐ</td>
                                        <td>{order.status}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7">Bạn chưa có đơn hàng nào.</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CustomerOrdersPage;