import Navigation from './Navigation.js';
function Header() {
    return (
        <header className="flex flex-row bg-red-700 justify-between place-items-center p-2">
            <h1 className="text-6xl">🤠</h1>
            <Navigation />
        </header>
    )
}

export default Header;