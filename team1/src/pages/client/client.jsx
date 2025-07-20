import React from "react";
import "./client.css"
import ShopLayout from "../../layouts/ShopLayout.jsx";
import HappySummer from "../../components/happy-summer/happy-summer.jsx";
import Carousels from "../../components/Carousel/Carousels.jsx";
import ProductCategories from "../../components/ProductCategories/ProductCategories.jsx";
import CouponList from "../../components/CouponList/CouponList.jsx";
import Header from "../../components/Navbar/Header.jsx";
import Footer from './../../components/Navbar/Footer';
import ModernFurniture from "../../components/modern-furniture/modern-furniture.jsx";
import InspirationCorner from "../../components/InspirationCorner/InspirationCorner.jsx";
import Policies from "../../components/Policies/Policies.jsx";
import KitchenFurniture from "../../components/kitchen-furniture/kitchen-furniture.jsx";
import CertificationSection from "../../components/certificate/CertificationSection.jsx";
import HappyBedroomSection from "../../components/happyBedroom/HappyBedroomSection.jsx";
import InteriorCollectionSection from "../../components/collection/InteriorCollectionSection.jsx";
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
                    <CertificationSection />
                    <HappyBedroomSection />
                    <InteriorCollectionSection />
                    <ModernFurniture />
                    <KitchenFurniture />
                    <InspirationCorner/>
                    <Policies/>
                </main>
                <footer>
                    <Footer />
                </footer>
            </ShopLayout>
        </>
    )
}
export default Client;