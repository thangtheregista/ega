import "./adminSidebar.css"
import {Link} from "react-router-dom";
export default function AdminSidebar() {
    return(
        <div className="sidebar">
            <div className="menu">
                <Link to="/ega/dashboard" className="menu-item">Dashboard</Link>
                <a href="#" className="menu-item">Orders</a>
                <a href="#" className="menu-item">Products</a>
                <Link to="/ega/dashboard/staff" className="menu-item">Staff</Link>
                <a href="#" className="menu-item">Customers</a>
                <a href="#" className="menu-item"> Account</a>

            </div>
        </div>
    )
}