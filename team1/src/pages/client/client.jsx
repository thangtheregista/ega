import React from "react";
import "./client.css"
import ShopLayout from "../../layouts/ShopLayout.jsx";
import HappySummer from "../../components/happy-summer/happy-summer.jsx";
function Client() {
    return (
        <>
            <ShopLayout>
                <main>
                    <HappySummer />
                </main>
            </ShopLayout>
        </>
    )
}
export default Client;