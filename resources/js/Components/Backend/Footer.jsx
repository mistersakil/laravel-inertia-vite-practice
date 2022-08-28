import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="py-4 bg-light mt-auto" id="footer">
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">
                            Copyright &copy; Your Website 2022
                        </div>
                        <div>
                            <a>Developed By: </a>
                            <a
                                href="https://www.upwork.com/o/companies/~011335ddde8074293a/"
                                target="_blank"
                            >
                                Octapia
                            </a>
                        </div>
                    </div>
                    {/* .d-flex */}
                </div>
                {/* .container-fluid */}
            </footer>
            {/* #footer */}
        </>
    );
}
