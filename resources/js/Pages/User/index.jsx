import React from "react";

export default ({ users }) => {
    return (
        <>
            <h1>User List</h1>
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
        </>
    );
};
