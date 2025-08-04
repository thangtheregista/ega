import "./adminSidebar.css"
import {Link} from "react-router-dom";
export default function AdminSidebar() {
    return(
        <div className="sidebar">
            <div className="menu">
                <Link to="/ega/dashboard" className="menu-item">Tổng quan</Link>
                <Link to="/ega/dashboard/orders" className="menu-item">Đơn hàng</Link>
                <a href="#" className="menu-item">Sản phẩm</a>
                <Link to="/ega/dashboard/staff" className="menu-item">Nhân viên</Link>
                <Link to="/ega/dashboard/customers" className="menu-item">Khách hàng</Link>
                <a href="#" className="menu-item">Nhà cung cấp</a>
            </div>
        </div>
    )
}