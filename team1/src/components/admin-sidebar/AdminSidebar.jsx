import "./adminSidebar.css"
import {Link} from "react-router-dom";
export default function AdminSidebar() {
    return(
        <div className="sidebar">
            <div className="menu">
                <Link to="/ega/dashboard" className="menu-item">Dashboard</Link>
                <Link to="/ega/dashboard/orders" className="menu-item">Orders</Link>
                <a href="#" className="menu-item">Products</a>
                <Link to="/ega/dashboard/staff" className="menu-item">Staff</Link>
                <Link to="/ega/dashboard/customers" className="menu-item">Customers</Link>
                <a href="#" className="menu-item"> Account</a>

            </div>
        </div>
    )
}