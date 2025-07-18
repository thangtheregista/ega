import React from "react";
import "./client.css"
import ShopLayout from "../../layouts/ShopLayout.jsx";
import HappySummer from "../../components/happy-summer/happy-summer.jsx";
import Carousels from "../../components/Carousel/Carousels.jsx";
import ProductCategories from "../../components/ProductCategories/ProductCategories.jsx";
import CouponList from "../../components/CouponList/CouponList.jsx";
import { Navbar } from "react-bootstrap";
import Header from "../../components/Navbar/Header.jsx";
import Footer from './../../components/Navbar/Footer';
function Client() {
    return (
        <>
            <ShopLayout>
                <nav>
                    <Header />
                </nav>
                <main>
                    <Carousels />
                    <ProductCategories />
                    <CouponList />
                    <HappySummer />
                </main>
                <footer>
                    <Footer />
                </footer>
            </ShopLayout>
        </>
    )
}
export default Client;