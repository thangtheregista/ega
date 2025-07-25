import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Client from "./pages/client/client.jsx";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/login/login.jsx";
import RegisterPage from "./pages/register/register.jsx";
import WatchAllProducts from "./pages/watch-all-products/watch-all-products.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top.jsx";

function App() {
    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Client/>}></Route>
                <Route path="/ega/login" element={<LoginPage/>}></Route>
                <Route path="/ega/register" element={<RegisterPage/>}></Route>
                <Route path="/ega/flashsale" element={<WatchAllProducts/>}></Route>
                <Route path="ega/dashboard" element={<Dashboard/>}></Route>
            </Routes>
        </>
    )

}

export default App
