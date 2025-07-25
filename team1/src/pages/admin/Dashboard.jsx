import AdminSidebar from "../../components/admin-sidebar/AdminSidebar.jsx";
import AdminLayout from "../../layouts/admin/AdminLayout.jsx";
import AdminNav from "../../components/admin-nav/AdminNav.jsx";
import BarChart from "../../components/admin-sale-barchart/BarChart.jsx";
import DoughnutChart from "../../components/admin-traffic-source-doughnut/DoughnutChart.jsx";
import LatestProducts from "../../components/admin-latest-products/LatestProducts.jsx";
import LatestOrders from "../../components/admin-latest-orders/LatestOrders.jsx";

export default function Dashboard() {
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
                    <div className="one">1</div>
                    <div className="one">2</div>
                    <div className="one">3</div>
                    <div className="one">4</div>
                    <BarChart/>
                    <DoughnutChart/>
                    <LatestProducts/>
                    <LatestOrders/>
                </main>
            </AdminLayout>
        </div>
    )
}