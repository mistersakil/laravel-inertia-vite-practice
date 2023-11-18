import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGauge,
    faUsers,
    faUser,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
export default function LeftSidebar() {
    return (
        <>
            <div id="layoutSidenav_nav">
                <nav
                    className="sb-sidenav accordion sb-sidenav-dark"
                    id="sidenavAccordion"
                >
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <Link className="nav-link" href="/admin">
                                <div className="sb-nav-link-icon">
                                    <FontAwesomeIcon icon={faGauge} />
                                </div>
                                Dashboard
                            </Link>
                            {/* .nav-link */}

                            <Link className="nav-link" href="/admin/users">
                                <div className="sb-nav-link-icon">
                                    <FontAwesomeIcon icon={faUsers} />
                                </div>
                                Users
                            </Link>
                            {/* .nav-link */}
                        </div>
                        {/* .nav */}
                    </div>
                    {/* .sb-sidenav-menu */}

                    <div className="sb-sidenav-footer d-flex gap-1">
                        <Link href="/admin" title="Prfile">
                            <FontAwesomeIcon
                                icon={faUser}
                                className="fa-2x text-dark badge bg-secondary"
                            />
                        </Link>
                        <Link href="/admin" title="Logout">
                            <FontAwesomeIcon
                                icon={faArrowRightFromBracket}
                                className="fa-2x text-dark badge bg-secondary"
                            />
                        </Link>
                    </div>
                    {/* .sb-sidenav-footer */}
                </nav>
                {/* nav */}
            </div>

            {/* #layoutSidenav_nav */}
        </>
    );
}
