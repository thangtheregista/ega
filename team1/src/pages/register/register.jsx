import React from "react";
import useDocumentTitle from "../../components/useDocumentTitle/useDocumentTitle.jsx";
import Header from "../../components/Navbar/Header.jsx";
import Register from "../../components/register-page/register-page.jsx";
import Footer from "../../components/Navbar/Footer.jsx";
import ShopLayout from "../../layouts/shop/ShopLayout.jsx";
function RegisterPage() {
    useDocumentTitle("Đăng ký tài khoản")
    return (
        <>
            <ShopLayout>
                <nav><Header /></nav>
                <main><Register /></main>
                <footer><Footer /></footer>
            </ShopLayout>
        </>
    )
}
export default RegisterPage;