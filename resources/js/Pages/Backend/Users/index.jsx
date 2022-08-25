import React from "react";
import Layout from "../../../Components/Backend/Layout";
export default ({ users }) => {
    return (
        <Layout>
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-table me-1"></i>
                    User List
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
