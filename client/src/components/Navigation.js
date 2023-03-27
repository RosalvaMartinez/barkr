import React from "react";
import {
  Link
} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul className="flex flex-row p-6">
                <li className="mx-2"><Link to="/" className={`underline`}>Home</Link></li>
                <li className="mx-2"><Link to="/dashboard" className={`underline`}>My Dashboard</Link></li>
                <li className="mx-2"><Link to="/dogProfile" className={`underline`}>Dog Profile</Link></li>
                <li className="mx-2"><Link to="/aboutUs" className={`underline`}>About Us</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
