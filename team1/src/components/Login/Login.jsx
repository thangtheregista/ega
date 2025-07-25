import "./login.css"
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find(user => user.username === email && user.password === password);
        if (user) {
            switch (user.role) {
                case "admin":
                    navigate("/ega/dashboard")
                    break;
                case "supplier":
                    window.location.href = "/supplier";
                    break;
                case "customer":
                    window.location.href = "/customer";
                    break;
                case "staff":
                    window.location.href = "/staff";
                    break;
                default:
                    alert("Role not recognized");
            }
        } else {
            alert("Invalid username or password");
        }
    }
    const users = [
        {
            username: "admin@gmail.com",
            password: "admin123",
            role: "admin"
        },
        {
            username: "supplier@gmail.com",
            password: "supplier123",
            role: "supplier"
        },
        {
            username: "customer@gmail.com",
            password: "customer123",
            role: "customer"
        },
        {
            username: "staff@gmail.com",
            password: "staff123",
            role: "staff"
        },
    ]
    return(
        <div className="login-element">
            <div className="login-element__wrapper">
                <div className="breadcrumb">
                    <a href="#" className="breadcrumb__link">Trang chủ</a> / <strong className="breadcrumb__current">Đăng
                    nhập tài khoản</strong>
                </div>

                <div className="login">
                    <h2 className="login__title">ĐĂNG NHẬP TÀI KHOẢN</h2>
                    <p className="login__register">
                        Bạn chưa có tài khoản ? <a href="#" className="login__register-link">Đăng ký tại đây</a>
                    </p>

                    <form className="login__form" onSubmit={handleLogin} >
                        <label className="login__label" htmlFor="email">Email <span>*</span></label>
                        <input className="login__input"
                               type="email" id="email"
                               placeholder="Email"
                               required
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />

                        <label className="login__label" htmlFor="password">Mật khẩu <span>*</span></label>
                        <input className="login__input"
                               type="password" id="password"
                               placeholder="Mật khẩu"
                               required
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className="login__forgot">
                            <p className="login__forgot-text">
                                Quên mật khẩu? Nhấn vào <a href="#" className="login__forgot-link">đây</a>
                            </p>

                        </div>

                        <button className="login__button" type="submit">Đăng nhập</button>
                    </form>

                    <div className="login__social">
                        <p className="login__social-text">Hoặc đăng nhập bằng</p>
                        <div className="login__social-buttons">
                            <button className="login__social-button login__social-button--facebook"><FaFacebookF />
                            </button>
                            <button className="login__social-button login__social-button--google"><FaGoogle />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}