import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
    return (
        <>
            <Header />
            <main className="bg-slate-900 p-4 flex-grow"><Outlet /></main>
            <Footer />
        </>
    )
};

export default Layout;