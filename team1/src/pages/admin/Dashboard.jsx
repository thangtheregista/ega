import AdminSidebar from "../../components/admin-sidebar/AdminSidebar.jsx";
import AdminLayout from "../../layouts/admin/AdminLayout.jsx";
import AdminNav from "../../components/admin-nav/AdminNav.jsx";

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
                    This is main
                </main>
            </AdminLayout>
        </div>
    )
}