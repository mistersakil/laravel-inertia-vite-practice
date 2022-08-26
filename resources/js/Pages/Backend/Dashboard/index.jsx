import React from "react";
import Layout from "../../../Components/Backend/Layout";

export default function ({ metaTitle }) {
    return (
        <Layout>
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-table me-1"></i>
                    {metaTitle}
                </div>
                <div className="card-body">Dashboard</div>
            </div>
        </Layout>
    );
}
