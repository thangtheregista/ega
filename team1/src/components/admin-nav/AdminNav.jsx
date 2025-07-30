import "./adminNav.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
export default function AdminNav() {
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        setCurrentUser(storedUser ? JSON.parse(storedUser) : {});
    }, []);
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="logo">
                    <Link to="/"><img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/logo.png?1746582633520" alt="Logo"/></Link>

                </div>
            </div>
            <div className="navbar-right">

                <div className="profile">
                    <img src={currentUser.avatar} alt="Profile"/>
                    <div className="profile-info">
                        <span>{`${currentUser.lastName} ${currentUser.firstName}`}</span>
                        <span>Admin ▼</span>
                    </div>
                </div>
            </div>
        </div>
    )
}