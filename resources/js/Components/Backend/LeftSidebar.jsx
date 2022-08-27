import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faUsers } from "@fortawesome/free-solid-svg-icons";
export default function LeftSidebar() {
    return (
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
                        <Link className="nav-link" href="/admin/users">
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                            Users
                        </Link>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Start Bootstrap
                </div>
            </nav>
        </div>
    );
}
