import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";
export default function Navbar() {
    function handleSidebarToggle(event) {
        event.preventDefault();
        document.body.classList.toggle("sb-sidenav-toggled");
        localStorage.setItem(
            "sb|sidebar-toggle",
            document.body.classList.contains("sb-sidenav-toggled")
        );
    }
    return (
        <>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <Link className="navbar-brand ps-3" href="/admin">
                    Admin Panel
                </Link>
                {/* .navbar-brand */}

                <button
                    className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
                    id="sidebarToggle"
                    href="#!"
                    onClick={handleSidebarToggle}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                {/* .btn Sidebar Toggle */}

                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search for..."
                            aria-label="Search for..."
                            aria-describedby="btnNavbarSearch"
                        />
                        <button
                            className="btn btn-primary"
                            id="btnNavbarSearch"
                            type="button"
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                    {/* .input-group */}
                </form>
                {/* form */}

                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdown"
                        >
                            <li>
                                <a className="dropdown-item" href="#!">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#!">
                                    Activity Log
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#!">
                                    Logout
                                </a>
                            </li>
                        </ul>
                        {/* .dropdown-menu  */}
                    </li>
                    {/* .navbar-item */}
                </ul>
                {/* .navbar-nav */}
            </nav>
            {/* .dropdown  */}
        </>
    );
}
