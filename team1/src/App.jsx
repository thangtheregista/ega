import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ShopLayout from "./layouts/ShopLayout.jsx";
import Login from "./components/Login/Login.jsx";
import SupplierPage from "./pages/supplier/supplier-page.jsx";
import Carousels from "./components/Carousel/Carousels.jsx";
import ProductCategories from "./components/ProductCategories/ProductCategories.jsx";
import CouponList from "./components/CouponList/CouponList.jsx";

function App() {

    return (
        <>
            <Login/>
            <SupplierPage/>
            <Carousels/>
            <ProductCategories/>
            <CouponList/>
        </>
    )
}

export default App
