import React from 'react';
import master_img from '../assets/img.png';

export function Navheader() {
    const navItems = [
        {name: 'Home', href: '', isActive: true, isDisabled: false},
        {name: 'Api_content', href: 'http://localhost:3000/', isActive: true, isDisabled: false},
    ];

    const renderNavItem = ({name, href, isActive, isDisabled}) => (
        <li key={name} className="nav-item">
            <a
                className={`nav-link ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`}
                href={href}
            >
                {name} {isActive && <span className="sr-only">(current)</span>}
            </a>
        </li>
    );

    const renderSearchBar = (
        <form className="form-inline d-flex">
            <input className="form-control mr-2" type="search" placeholder="Search for places" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );

    const navBrand = (
        <a className="navbar-brand" href="">
            <img
                src={master_img}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
            />
            ProFood
        </a>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                {navBrand}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        {navItems.map(renderNavItem)}
                    </ul>
                </div>
                {renderSearchBar}
            </div>
        </nav>
    );
}