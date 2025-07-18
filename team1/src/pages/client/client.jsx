import React from "react";
import "./client.css"
import ShopLayout from "../../layouts/ShopLayout.jsx";
import HappySummer from "../../components/happy-summer/happy-summer.jsx";
import Carousels from "../../components/Carousel/Carousels.jsx";
import ProductCategories from "../../components/ProductCategories/ProductCategories.jsx";
import CouponList from "../../components/CouponList/CouponList.jsx";
function Client() {
    return (
        <>
            <ShopLayout>
                <main>
                    <Carousels />
                    <ProductCategories />
                    <CouponList />
                    <HappySummer />
                </main>
            </ShopLayout>
        </>
    )
}
export default Client;