import React from "react";
import BackHead from "../../../Components/Backend/BackHead";
import Layout from "../../../Components/Backend/Layout";
import Breadcrumb from "../../../Components/Backend/Breadcrumb";

export default function ({ metaTitle }) {
    return (
        <Layout>
            <BackHead title="Dashboard" description="Admin Panel" />
            <Breadcrumb title="Dashboard" isVisible={false} />
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
