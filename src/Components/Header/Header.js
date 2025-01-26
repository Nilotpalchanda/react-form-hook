import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top navBar">
        <div class="container">
            <Link class="navbar-brand" to="/dashboard">
                React Forms Hook
            </Link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Header;