import ShopLayout from "../../layouts/shop/ShopLayout.jsx";
import Header from "../../components/Navbar/Header.jsx";
import Footer from "../../components/Navbar/Footer.jsx";
import ProductDetailSection from "../../components/ProductDetailSection/ProductDetailSection.jsx";

export default function ProductDetail() {
    return(
        <>
            <ShopLayout>
                <nav>
                    <Header/>
                </nav>
                <main>
                    <ProductDetailSection/>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </ShopLayout>
        </>
    )
}