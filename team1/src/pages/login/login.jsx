import React from "react";
import Header from "../../components/Navbar/Header.jsx";
import Login from "../../components/Login/Login.jsx";
import Footer from "../../components/Navbar/Footer.jsx";
import "./login.css"
import useDocumentTitle from "../../components/useDocumentTitle/useDocumentTitle.jsx";
function LoginPage() {
    useDocumentTitle("Đăng nhập tài khoản");
    return (
        <>
            <Header />
            <Login />
            <Footer />
        </>
    )
}
export default LoginPage;