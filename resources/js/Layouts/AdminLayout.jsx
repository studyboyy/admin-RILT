import Header from "@/Components/Header";

const AdminLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="container mx-auto mt-[5rem]">{children}</div>
        </>
    );
};

export default AdminLayout;
