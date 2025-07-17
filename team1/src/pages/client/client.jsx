import React from "react";
import "./client.css"
import ShopLayout from "../../layouts/ShopLayout.jsx";
import HappySummer from "../../components/happy-summer/happy-summer.jsx";
import Carousels from "../../components/Carousel/Carousels.jsx";
function Client() {
    return (
        <>
            <ShopLayout>
                <main>
                    <Carousels />
                    <HappySummer />
                </main>
            </ShopLayout>
        </>
    )
}
export default Client;