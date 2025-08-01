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
    return(
        <div className="latest-orders__table-card">
            <div className="table-card__header">Latest orders</div>
            <div className="table-card__body">
                <table className="table-card__table">
                    <thead>
                    <tr>
                        <th>Order</th>
                        <th>Customer</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Total Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order) => (
                        <tr>
                            <td>{order.id}</td>
                            <td>{order.shippingInfo.name}</td>
                            <td>{order.shippingInfo.phone}</td>
                            <td><span className="table-card__status table-card__status--pending">{order.status}</span></td>
                            <td>{order.total.toLocaleString('vi-VN') + "₫"}</td>

                        </tr>
                    ))}

                    {/*<tr>*/}
                    {/*    <td>ORD-006</td>*/}
                    {/*    <td>Cao Yu</td>*/}
                    {/*    <td>Jun 26, 2025</td>*/}
                    {/*    <td><span className="table-card__status table-card__status--delivered">Delivered</span></td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <td>ORD-004</td>*/}
                    {/*    <td>Alexa Richardson</td>*/}
                    {/*    <td>Jun 26, 2025</td>*/}
                    {/*    <td><span className="table-card__status table-card__status--refunded">Refunded</span></td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <td>ORD-003</td>*/}
                    {/*    <td>Anje Keizer</td>*/}
                    {/*    <td>Jun 26, 2025</td>*/}
                    {/*    <td><span className="table-card__status table-card__status--pending">Pending</span></td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <td>ORD-002</td>*/}
                    {/*    <td>Clarke Gillebert</td>*/}
                    {/*    <td>Jun 26, 2025</td>*/}
                    {/*    <td><span className="table-card__status table-card__status--delivered">Delivered</span></td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <td>ORD-001</td>*/}
                    {/*    <td>Adam Denisov</td>*/}
                    {/*    <td>Jun 26, 2025</td>*/}
                    {/*    <td><span className="table-card__status table-card__status--delivered">Delivered</span></td>*/}
                    {/*</tr>*/}
                    </tbody>
                </table>
            </div>
        </div>
    )
}