import "./adminNav.css"
import {Link} from "react-router-dom";
export default function AdminNav() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="logo">
                    <Link to="/"><img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/logo.png?1746582633520" alt="Logo"/></Link>

                </div>
            </div>
            <div className="navbar-right">

                <div className="profile">
                    <img src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/profile.png" alt="Profile"/>
                    <div className="profile-info">
                        <span>Emay Walter</span>
                        <span>Admin ▼</span>
                    </div>
                </div>
            </div>
        </div>
    )
}