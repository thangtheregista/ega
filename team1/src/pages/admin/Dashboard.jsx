import AdminSidebar from "../../components/admin-sidebar/AdminSidebar.jsx";
import AdminLayout from "../../layouts/admin/AdminLayout.jsx";
import AdminNav from "../../components/admin-nav/AdminNav.jsx";
import BarChart from "../../components/admin-sale-barchart/BarChart.jsx";
import DoughnutChart from "../../components/admin-traffic-source-doughnut/DoughnutChart.jsx";
import LatestProducts from "../../components/admin-latest-products/LatestProducts.jsx";
import LatestOrders from "../../components/admin-latest-orders/LatestOrders.jsx";
import AuthorsTable from "../../components/AuthorsTable/AuthorsTableList.jsx";
import TotalCustomersCard from "../../components/TotalCustomersCard/TotalCustomersCard.jsx";
import BudgetCard from "../../components/BudgetCard/BudgetCard.jsx";
import RevenueCard from "../../components/RevenueCard/RevenueCard.jsx";
import InvoicesCard from "../../components/InvoicesCard/InvoicesCard.jsx";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import useDocumentTitle from "../../components/useDocumentTitle/useDocumentTitle.jsx";

export default function Dashboard() {
    useDocumentTitle("Admin - EGA Furniture")
    const navigate = useNavigate();
    useEffect(() => {
        const checkAdminLoggedIn = () => {
            const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
            const userRole = localStorage.getItem("userRole");
            if (!isLoggedIn || userRole !== "admin") {
                alert("You are not logged in!");
                navigate("/ega/login");
            }
        }
        checkAdminLoggedIn();
    }, []);
    return(
        <div>
            <AdminLayout>
                <header>
                    <AdminNav/>
                </header>
                <aside>
                    <AdminSidebar/>
                </aside>
                <main>
                    <div className="dashboard">
                        <div className="one"><BudgetCard/></div>
                        <div className="one"><TotalCustomersCard /></div>
                        <div className="one"><InvoicesCard /></div>
                        <div className="one"><RevenueCard/></div>

                        <BarChart/>
                        {/*<AuthorsTable/>*/}

                        <DoughnutChart/>
                        <LatestProducts/>
                        <LatestOrders/>
                    </div>
                </main>
            </AdminLayout>
        </div>
    )
}