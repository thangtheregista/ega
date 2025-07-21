import React from "react";
import useDocumentTitle from "../../components/useDocumentTitle/useDocumentTitle.jsx";
import Header from "../../components/Navbar/Header.jsx";
import Register from "../../components/register-page/register-page.jsx";
import Footer from "../../components/Navbar/Footer.jsx";
function RegisterPage() {
    useDocumentTitle("Đăng ký tài khoản")
    return (
        <>
            <Header />
            <Register />
            <Footer />
        </>
    )
}
export default RegisterPage;