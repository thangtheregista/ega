import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Client from "./pages/client/client.jsx";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/login/login.jsx";
import RegisterPage from "./pages/register/register.jsx";
import WatchAllProducts from "./pages/watch-all-products/watch-all-products.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top.jsx";
import Staff from "./pages/staff/Staff.jsx";
import AdminLayout from "./layouts/admin/AdminLayout.jsx";
import AdminNav from "./components/admin-nav/AdminNav.jsx";
import AdminSidebar from "./components/admin-sidebar/AdminSidebar.jsx";
import StaffForm from "./components/StaffForm/StaffForm.jsx";
import CustomersTable from "./components/admin-customers-table/CustomersTable.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import CartPage from "./pages/cart/CartPage.jsx";
import CheckoutPage from "./pages/checkout/CheckoutPage.jsx";
import LatestOrders from "./components/admin-latest-orders/LatestOrders.jsx";
import OrderList from "./components/OrderList/OrderList.jsx";
;

function App() {

    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Client/>}></Route>
                <Route path="/ega/login" element={<LoginPage/>}></Route>
                <Route path="/ega/register" element={<RegisterPage/>}></Route>
                <Route path="/ega/flashsale" element={<WatchAllProducts/>}></Route>
                <Route path="/ega/product/:id" element={<ProductDetail/>}></Route>
                <Route path="/ega/cart" element={<CartPage/>}></Route>
                <Route path="/ega/checkout" element={<CheckoutPage/>}></Route>
                <Route path="/ega/dashboard" element={<Dashboard/>}></Route>
                <Route path="/ega/dashboard/orders" element={
                    <AdminLayout>
                        <header>
                            <AdminNav/>
                        </header>
                        <aside>
                            <AdminSidebar/>
                        </aside>
                        <main>
                            <OrderList/>
                        </main>
                    </AdminLayout>
                }></Route>

                <Route path="/ega/dashboard/staff" element={<Staff/>}></Route>
                <Route path="/ega/dashboard/staff/add" element={
                    <AdminLayout>
                        <header>
                            <AdminNav/>
                        </header>
                        <aside>
                            <AdminSidebar/>
                        </aside>
                        <main>
                            <div className="staff">
                                <StaffForm/>
                            </div>
                        </main>
                    </AdminLayout>
                }></Route>
                <Route path="/ega/dashboard/customers" element={
                    <AdminLayout>
                        <header>
                            <AdminNav/>
                        </header>
                        <aside>
                            <AdminSidebar/>
                        </aside>
                        <main>
                            <div className="staff">
                                <CustomersTable/>
                            </div>
                        </main>
                    </AdminLayout>
                }></Route>
            </Routes>
        </>
    )

}

export default App
