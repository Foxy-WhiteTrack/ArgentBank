import "./Nav.css";
import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';

export default function Nav() {
    return (
        <div className="header-body">
            <NavLink to="/">
                <img className="main-nav-logo-image" src={logo} alt="Logo" />
            </NavLink>
            <nav className="nav">
                {/* A modifier !!! */}
                <NavLink to="/profile" className="link" activeclassname="active">Tony</NavLink>

                <NavLink to="/login" className="link" activeclassname="active">Sing Out</NavLink>
            </nav>
        </div>
    );
}