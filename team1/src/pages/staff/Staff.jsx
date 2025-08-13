import AdminLayout from "../../layouts/admin/AdminLayout.jsx";
import AdminNav from "../../components/admin-nav/AdminNav.jsx";
import AdminSidebar from "../../components/admin-sidebar/AdminSidebar.jsx";
import AuthorsTable from "../../components/AuthorsTable/AuthorsTableList.jsx";


export default function Staff() {
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
                    <div className="staff">
                        <AuthorsTable/>
                    </div>
                </main>
            </AdminLayout>
        </div>
    )
}