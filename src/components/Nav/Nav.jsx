import "./Nav.css";
import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';

import stockData from "../../services/stockData";
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../redux/slice';

export default function Nav() {

    const { firstName, lastName, isAuthenticated } = useSelector((state) => state.user);
    const getAuth = stockData.getAuthentication();

    const dispatch = useDispatch();

    const logOut = async (event) => {
        dispatch(signOut());
        stockData.clearData();
    }
    if (!isAuthenticated) {
        return (
            <div className="header-body">
                <NavLink to="/">
                    <img className="main-nav-logo-image" src={logo} alt="Logo" />
                </NavLink>
                <nav className="nav">
                    {/* A modifier !!! */}
                    <NavLink to="/profile" className="link" activeclassname="active"><i className="fa fa-user-circle sign-in-icon"></i> User</NavLink>
                    <NavLink to="/login" onClick={logOut} className="link" activeclassname="active">
                        <i className="fa fa-sign-out sign-in-icon"></i> Sign In</NavLink>
                </nav>
            </div>
        )
    } else {
        return (
            <div className="header-body">
                <NavLink to="/">
                    <img className="main-nav-logo-image" src={logo} alt="Logo" />
                </NavLink>
                <nav className="nav">
                    {/* A modifier !!! */}
                    <NavLink to="/profile" className="link" activeclassname="active">{firstName}</NavLink>
                    <NavLink to="/login" onClick={logOut} className="link" activeclassname="active"><i className="fa fa-user-circle sign-in-icon"></i>
                        Sign Out</NavLink>
                </nav>
            </div>
        );
    }
}