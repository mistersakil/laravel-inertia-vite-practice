import React from "react";
import Navbar from "./Navbar";
import "../../../backend/css/styles.css";
import "../../../backend/js/bootstrap5";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import LeftSidebar from "./LeftSidebar";
import Footer from "./Footer";
import BackHead from "./BackHead";

export default function Layout({ children }) {
    return (
        <>
            <ToastContainer />
            <main className="sb-nav-fixed">
                <BackHead title="Dashboard" description="Dashboard" />
                <Navbar></Navbar>
                <div id="layoutSidenav">
                    <LeftSidebar></LeftSidebar>
                    <div id="layoutSidenav_content">
                        <main id="contentArea">
                            <div
                                className="container-fluid px-4"
                                id="mainContent"
                            >
                                {children}
                            </div>
                            {/* #mainContent */}
                        </main>
                        {/* #contentArea */}
                        <Footer></Footer>
                    </div>
                    {/* #layoutSidenav_content */}
                </div>
                {/* #layoutSidenav */}
            </main>
            {/* main */}
        </>
    );
}
