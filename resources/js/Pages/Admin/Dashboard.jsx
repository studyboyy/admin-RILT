import DashboardLayout from "@/Components/Layouts/PagesLayouts/DashboardLayout";
import AdminLayout from "@/Layouts/AdminLayout";

const Dashboard = () => {
    return (
        <>
        
            <DashboardLayout />
        </>
    );
};

Dashboard.layout = (page) => <AdminLayout children={page} />;

export default Dashboard;
