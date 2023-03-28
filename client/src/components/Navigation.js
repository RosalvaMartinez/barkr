import React from "react";
import {
    Link
} from "react-router-dom";

function Navigation() {
    const navItems = [
        {
            path: "/home",
            title: "Home"
        },
        {
            path: "/dashboard",
            title: "My Dashboard"
        },
        {
            path: "/dogProfile",
            title: "Dog Profile"
        },
        {
            path: "/about",
            title: "About Us"
        },
        {
            path: "/signup",
            title: "Sign Up"
        },
        {
            path: "/login",
            title: "Login"
        },
        {
            path: "/addDog",
            title: "Add Dog"
        }
    ]
    return (
        <nav>
            <ul className="sm:flex hidden flex-row p-6">
                {
                    navItems.map((item) => {
                        return (
                            <li key={item.title} className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 mx-1 rounded-lg text-sm text-slate-100">
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="text-3xl flex sm:hidden">🐶</button>
        </nav>
    );
}

export default Navigation;
