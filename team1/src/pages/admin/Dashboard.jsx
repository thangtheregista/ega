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