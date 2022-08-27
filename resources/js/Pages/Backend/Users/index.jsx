import React from "react";
import BackHead from "../../../Components/Backend/BackHead";
import Layout from "../../../Components/Backend/Layout";
import Breadcrumb from "../../../Components/Backend/Breadcrumb";

export default ({ users, metaTitle }) => {
    return (
        <Layout>
            <BackHead title="User List" description="List of all users" />
            <Breadcrumb title="Users" />
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-table me-1"></i>
                    {metaTitle}
                </div>
                <div className="card-body">
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                <h4>
                                    {`${user.name} & email: ${user.email}`}
                                    <a
                                        href={user.view}
                                        style={{
                                            color: "white",
                                            padding: "5px",
                                            backgroundColor: "black",
                                            marginLeft: "5px",
                                            textDecoration: "none",
                                        }}
                                    >
                                        View Details
                                    </a>
                                </h4>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    );
};
