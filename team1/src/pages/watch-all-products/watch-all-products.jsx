import React from "react";
import "./watch-all-products.css"
import Header from "../../components/Navbar/Header.jsx";
import Footer from "../../components/Navbar/Footer.jsx";
import ShopLayout from "../../layouts/shop/ShopLayout.jsx";
import FlashSale from "../../components/flash-sale/flash-sale.jsx";
import useDocumentTitle from "../../components/useDocumentTitle/useDocumentTitle.jsx";

function WatchAllProducts() {
    useDocumentTitle("Flash Sale");
    return (
        <>
            <ShopLayout>
                <nav>
                    <Header/>
                </nav>
                <main>
                    <FlashSale/>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </ShopLayout>
        </>
    )
}

export default WatchAllProducts;