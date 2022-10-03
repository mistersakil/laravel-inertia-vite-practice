import React from "react";

export default function Footer() {
    const newDate = new Date();
    let year = newDate.getFullYear();
    return (
        <>
            <footer className="py-4 bg-light mt-auto" id="footer">
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">
                            Copyright &copy; {year} . All right reserved to
                            iHelpBD
                        </div>
                        <div>
                            <a>Developed By: </a>
                            <a href="http://ihelpbd.com/" target="_blank">
                                iHelpBD
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
