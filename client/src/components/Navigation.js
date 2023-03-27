import React from "react";
import {
    Link
} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul className="flex flex-row p-6">
                <button className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-sm text-slate-100 ...">
                    <Link to="/">Home</Link>
                </button>
                <button className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-sm text-slate-100 ...">
                    <li className="mx-2"><Link to="/dashboard">My Dashboard</Link></li>
                </button>
                <button className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-sm text-slate-100 ...">
                    <li className="mx-2"><Link to="/dogProfile">Dog Profile</Link></li>
                </button>
                <button className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-sm text-slate-100 ...">
                    <li className="mx-2"><Link to="/aboutUs">About Us</Link></li>
                </button>
            </ul>
        </nav>
    );
}

export default Navigation;
