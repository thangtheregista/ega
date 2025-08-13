import React from "react";
import Header from "../../components/Navbar/Header.jsx";
import Login from "../../components/Login/Login.jsx";
import Footer from "../../components/Navbar/Footer.jsx";
import "./login.css"
import useDocumentTitle from "../../components/useDocumentTitle/useDocumentTitle.jsx";
import ShopLayout from "../../layouts/shop/ShopLayout.jsx";
function LoginPage() {
    useDocumentTitle("Đăng nhập tài khoản");
    return (
        <>
            <ShopLayout>
                <nav><Header /></nav>
                <main><Login /></main>
                <footer><Footer /></footer>
            </ShopLayout>
        </>
    )
}
export default LoginPage;