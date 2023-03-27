import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="bg-slate-800 flex-grow">{ children }</main>
            <Footer />
        </>
    )
};

export default Layout;