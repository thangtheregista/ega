import "./latestOrder.css";
export default function LatestOrders() {
    return (
        <div className="latest-orders__table-card">
            <div className="table-card__header">Latest orders</div>
            <div className="table-card__body">
                <table className="table-card__table">
                    <thead>
                    <tr>
                        <th>Order</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>ORD-007</td>
                        <td>Ekaterina Tankova</td>
                        <td>Jun 26, 2025</td>
                        <td><span className="table-card__status table-card__status--pending">Pending</span></td>
                    </tr>
                    <tr>
                        <td>ORD-006</td>
                        <td>Cao Yu</td>
                        <td>Jun 26, 2025</td>
                        <td><span className="table-card__status table-card__status--delivered">Delivered</span></td>
                    </tr>
                    <tr>
                        <td>ORD-004</td>
                        <td>Alexa Richardson</td>
                        <td>Jun 26, 2025</td>
                        <td><span className="table-card__status table-card__status--refunded">Refunded</span></td>
                    </tr>
                    <tr>
                        <td>ORD-003</td>
                        <td>Anje Keizer</td>
                        <td>Jun 26, 2025</td>
                        <td><span className="table-card__status table-card__status--pending">Pending</span></td>
                    </tr>
                    <tr>
                        <td>ORD-002</td>
                        <td>Clarke Gillebert</td>
                        <td>Jun 26, 2025</td>
                        <td><span className="table-card__status table-card__status--delivered">Delivered</span></td>
                    </tr>
                    <tr>
                        <td>ORD-001</td>
                        <td>Adam Denisov</td>
                        <td>Jun 26, 2025</td>
                        <td><span className="table-card__status table-card__status--delivered">Delivered</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-card__footer">
                <a className="table-card__footer-link" href="#">View all →</a>
            </div>
        </div>
    )
}