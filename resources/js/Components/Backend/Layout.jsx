import React from "react";
import Navbar from "./Navbar";
import "../../../backend/css/styles.css";
import "../../../backend/js/bootstrap5";

import LeftSidebar from "./LeftSidebar";
import Footer from "./Footer";
import BackHead from "./BackHead";

export default function Layout({ children }) {
    return (
        <main className="sb-nav-fixed">
            <BackHead title="Dashboard" description="Dashboard" />
            <Navbar></Navbar>
            <div id="layoutSidenav">
                <LeftSidebar></LeftSidebar>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1 className="mt-4">Tables</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Dashboard</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    Tables
                                </li>
                            </ol>
                        </div>
                        <div className="container-fluid px-4">{children}</div>
                    </main>
                    <Footer></Footer>
                </div>
            </div>
        </main>
    );
}
