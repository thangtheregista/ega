import "./adminNav.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import adminAvatar from "./image/avatar.jpg"; 

export default function AdminNav() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    setCurrentUser(storedUser ? JSON.parse(storedUser) : {});
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="hot-icon">🔥</span>
        <span className="hot-message">
          Something you love is now on sale!{" "}
          <span className="buy-now">Buy now !</span>
        </span>
      </div>

      <div className="navbar-right">
        <div className="lang-switch">
          <img src="https://flagcdn.com/w40/vn.png" alt="VN Flag" />
          <span>EN</span>
        </div>

        <div className="icon-group">
          <div className="icon-item">🟪</div>
          <div className="icon-item">🔍</div>
          <div className="icon-item">⭐</div>
          <div className="icon-item">🥰</div>

          <div className="icon-item">
            🛒<span className="badge red">2</span>
          </div>
          <div className="icon-item">
            🔔<span className="badge green">4</span>
          </div>
        </div>

        <div className="profile">
          <img src={adminAvatar} alt="Profile" className="avatar" />
          <div className="profile-info">
            <span>{`${currentUser.lastName || ""} ${currentUser.firstName || ""}`}</span>
            <span>Admin ▼</span>
          </div>
        </div>
      </div>
    </div>
  );
}
