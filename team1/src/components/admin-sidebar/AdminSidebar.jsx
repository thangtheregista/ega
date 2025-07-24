import "./adminSidebar.css"
export default function AdminSidebar() {
    return(
        <div className="sidebar">
            <div className="menu">
                <a href="#" className="menu-item active">Dashboard</a>
                <a href="#" className="menu-item">Orders</a>
                <a href="#" className="menu-item">Products</a>
                <a href="#" className="menu-item">Staff</a>
                <a href="#" className="menu-item">Customers</a>
                <a href="#" className="menu-item"> Account</a>

            </div>
        </div>
    )
}