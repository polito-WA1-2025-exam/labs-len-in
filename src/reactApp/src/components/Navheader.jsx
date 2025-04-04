import React from 'react';
import master_img from '../assets/img.png';

export function Navheader() {
    const navItems = [
        {name: 'Home', href: '#', isActive: true, isDisabled: false},
        {name: 'Api_content', href: 'http://localhost:3000/', isActive: true, isDisabled: false},
    ];

    const renderNavItem = ({ name, href, isActive, isDisabled }) => (
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
        <div className="row justify-content-evenly">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>
    );

    const navBrand = (
        <a className="navbar-brand" href="#">
            <img
                src={master_img}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
            />
            ProletarianFood
        </a>
    );

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <div>
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
                        <ul className="navbar-nav">
                            {navItems.map(renderNavItem)}
                        </ul>
                    </div>
                </div>
                {renderSearchBar}
            </nav>
        </div>
    );
}