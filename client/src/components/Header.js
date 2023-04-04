import Navigation from './Navigation.js';
function Header() {
    return (
        <header className="flex flex-row bg-slate-800 justify-between place-items-center p-2">
            <div className="flex flex-row h-14">
                <h1 className="text-6xl font-mono italic subpixel-antialiased text-white font-extrabold">BARKR</h1>
                <h1 className="text-white">™</h1>
            </div>
            <Navigation />
        </header>
    )
}

export default Header;