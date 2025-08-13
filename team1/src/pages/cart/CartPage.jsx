import ShopLayout from "../../layouts/shop/ShopLayout.jsx";
import Header from "../../components/Navbar/Header.jsx";
import Footer from "../../components/Navbar/Footer.jsx";
import FlashSaleWatched from "../../components/flash-sale-watched/flash-sale-watched.jsx";
import CartList from "../../components/CartList/CartList.jsx";

export default function CartPage() {
    return(
        <>
            <ShopLayout>
                <nav>
                    <Header/>
                </nav>
                <main>
                    <CartList/>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </ShopLayout>
        </>
    )
}