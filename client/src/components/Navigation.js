import React, { useState } from "react";
import {
    Link
} from "react-router-dom";

import gerald from '../utils/auth.js'

function Navigation() {
    const [menuToggle, setMenuToggle] = useState(false)

    const navloggedOut = [
        {
            path: "/home",
            title: "Home"
        },
        {
            path: "/about",
            title: "Learn More"
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
            title: "Log New Activity"
        },
        {
            path: "/about",
            title: "Learn More"
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
            {/* Mobile navbar that only apears when the dog emoji is clicked on */}
            <div className={`${menuToggle ? "" : "hidden"} w-64 bg-slate-700 absolute top-[72px] right-0`}>
                <ul className="flex flex-col h-3/4">
                    {/* Show/hide different navlinks if user is logged in  */}
                    {gerald.loggedIn() ? (
                        navloggedIn.map((item) => {
                            return (
                                <li key={item.title} className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 mx-1 my-2 rounded-lg text-sm text-center text-slate-100">
                                    <Link to={item.path}>{item.title}</Link>
                                </li>

                            )
                        })
                    ) : (
                        navloggedOut.map((item) => {
                            return (
                                <li key={item.title} className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 mx-1 my-2 rounded-lg text-sm text-center text-slate-100">
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            )
                        })
                    )}
                    {/* Show/hide Signout button if user is logged in */}
                    {gerald.loggedIn() ? (
                        <li onClick={gerald.logout} className="bg-slate-900 hover:bg-blue-500 active:bg-blue-400 p-2 mx-1 my-2 rounded-lg text-sm text-center text-slate-100">Log Out
                        </li>
                    ) : (
                        null
                    )
                    }
                </ul>
            </div>
            <button onClick={() => { setMenuToggle(!menuToggle)}} className="text-3xl flex sm:hidden">🐶</button>
        </nav>
    );
}

export default Navigation;
