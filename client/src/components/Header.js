import Navigation from './Navigation.js';
function Header() {
    return (
        <header className="flex flex-row bg-blue-300 justify-between place-items-center p-2">
            <div className="flex flex-row">
            <h1 className="text-6xl font-mono italic subpixel-antialiased text-slate-900 font-extrabold">BARKR</h1>
            <h1>™</h1>
            </div>
            <Navigation />
        </header>
    )
}

export default Header;