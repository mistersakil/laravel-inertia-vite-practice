import BackHead from "../../../Components/Backend/BackHead";
import Layout from "../../../Components/Backend/Layout";
import Breadcrumb from "../../../Components/Backend/Breadcrumb";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Create = ({ listLink, createLink }) => {
    const title = "Create a new user";
    const description = "User registration form on admin panel";
    const userInitialValue = { name: null, email: null, password: null };
    const [users, setUser] = useState([userInitialValue]);

    return (
        <Layout>
            <BackHead title={title} description={description} />
            <Breadcrumb
                title="Users"
                createLink={createLink}
                listLink={listLink}
            />
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-table me-1"></i>
                    {title}
                </div>
                {/** .card-header */}
                <div className="card-body">
                    <form>
                        {users.map((item, key) => {
                            return (
                                <div className="row g-3" key={key}>
                                    <div className="col-md-4">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Ex: Md Sakil Mahmud"
                                                value=""
                                            />
                                            <label htmlFor="name">
                                                Full Name
                                            </label>
                                        </div>
                                    </div>
                                    {/** .col */}

                                    <div className="col-md-4">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="email@domain.com"
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    {/** .col */}

                                    <div className="col-md-3">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="123456"
                                            />
                                            <label htmlFor="password">
                                                Password
                                            </label>
                                        </div>
                                    </div>
                                    {/** .col */}

                                    <div className="col-md-1">
                                        <div className="form-floating mt-3 d-flex gap-1">
                                            <a className="badge bg-primary">
                                                <FontAwesomeIcon
                                                    icon={faPlus}
                                                />
                                            </a>
                                            <a className="badge bg-danger">
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    {/** .col */}
                                </div>
                            );
                        })}
                        {/** form.row */}

                        <div className="col-12">
                            <button
                                type="submit"
                                className="btn btn-primary float-end"
                            >
                                Save
                            </button>
                        </div>
                        {/** .col */}
                    </form>
                    {/** form */}
                </div>
            </div>
            {/** .card */}
        </Layout>
    );
};
export default Create;
