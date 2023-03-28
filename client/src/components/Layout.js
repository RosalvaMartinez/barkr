import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="bg-slate-900 flex-grow">{ children }</main>
            <Footer />
        </>
    )
};

export default Layout;