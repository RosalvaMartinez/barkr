import React from "react";
import {
    Link
} from "react-router-dom";

import gerald from '../utils/auth.js'

function Navigation() {
    const navloggedOut = [
        {
            path: "/home",
            title: "Home"
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
        }
    ]

    const navloggedIn = [
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
            path: "/addDog",
            title: "Add Dog"
        }
    ]

    return (
        <nav>
            <ul className="sm:flex hidden flex-row p-6">
                {/* Show/hide different navlinks if user is logged in  */}
                {gerald.loggedIn() ? (
                    navloggedIn.map((item) => {
                        return (
                            <li key={item.title} className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 mx-1 rounded-lg text-sm text-slate-100">
                                <Link to={item.path}>{item.title}</Link>
                            </li>

                        )
                    })
                ) : (
                    navloggedOut.map((item) => {
                        return (
                            <li key={item.title} className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 mx-1 rounded-lg text-sm text-slate-100">
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        )
                    })
                )}
                {/* Show/hide Signout button if user is logged in */}
                {gerald.loggedIn() ? (
                    <li onClick={gerald.logout} className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 mx-1 rounded-lg text-sm text-slate-100">Log Out
                    </li>
                ) : (
                    null
                )
                }
            </ul>
            <button className="text-3xl flex sm:hidden">🐶</button>
        </nav>
    );
}

export default Navigation;
