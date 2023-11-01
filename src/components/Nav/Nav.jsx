import "./Nav.css";
import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';

export default function Nav() {
    return (
        <div className="header-body">
            <NavLink to="/">
                <img src={logo} alt="Logo" />
            </NavLink>
            <nav className="nav">
                {/* A modifier !!! */}
                <NavLink to="/" className="link" activeclassname="active">Tony</NavLink>

                <NavLink to="/connexion" className="link" activeclassname="active">Sing In</NavLink>
            </nav>
        </div>
    );
}