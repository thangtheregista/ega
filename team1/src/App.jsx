import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ShopLayout from "./layouts/ShopLayout.jsx";
import Login from "./components/Login/Login.jsx";
import SupplierPage from "./pages/supplier/supplier-page.jsx";
import Carousels from "./components/Carousel/Carousels.jsx";

function App() {

    return (
        <>
            <Login/>
            <SupplierPage/>
            <Carousels/>
        </>
    )
}

export default App
