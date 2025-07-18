import React from "react";
import "./client.css"
import ShopLayout from "../../layouts/ShopLayout.jsx";
import HappySummer from "../../components/happy-summer/happy-summer.jsx";
import Carousels from "../../components/Carousel/Carousels.jsx";
import ProductCategories from "../../components/ProductCategories/ProductCategories.jsx";
function Client() {
    return (
        <>
            <ShopLayout>
                <main>
                    <Carousels />
                    <ProductCategories />
                    <HappySummer />
                </main>
            </ShopLayout>
        </>
    )
}
export default Client;