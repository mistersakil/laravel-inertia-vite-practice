import BackHead from "../../../Components/Backend/BackHead";
import Layout from "../../../Components/Backend/Layout";
import Breadcrumb from "../../../Components/Backend/Breadcrumb";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faRefresh,
    faUpload,
    faBan,
    faMinus,
} from "@fortawesome/free-solid-svg-icons";

import { useForm } from "@inertiajs/inertia-react";
import { useFormik } from "formik";

const Create = ({ listLink, createLink, routes }) => {
    const title = "Create new users";
    const description = "User registration form on admin panel";

    /**
     * userInitialValue object
     * @type {{name: string, email: string, password: number|string|symbol}}
     */
    const userInitialValue = { name: "", email: "", password: "" };
    const { values: users, handleChange } = useFormik({
        initialValues: [userInitialValue],
    });
    const { submit, post, processing, progress } = useForm({});

    console.log(users);
    /**
     * addUserInput setUser state
     * @param {object} event
     */
    // const addUserInput = (event) => {
    //     event.preventDefault();
    //     let usersClone = [...users, userInitialValue];
    //     setUser(usersClone);
    // };

    /**
     * removeUserInput remove user input and update setUser state
     * @param {number} key
     */
    // const removeUserInput = (key) => {
    //     let usersClone = [...users];
    //     usersClone.splice(key, 1);
    //     setUser(usersClone);
    // };

    /**
     * removeUserInput remove user input and update setUser state
     * @param {number} key
     */
    // const resetUserInput = () => {
    //     setUser([userInitialValue]);
    // };

    /**
     * save users
     */
    // const store = () => {
    //     console.log(routes.store);
    //     console.log(users);
    //     // post(, users);
    //     post(routes.store, {
    //         preserveScroll: true,
    //         onSuccess: () => resetUserInput(),
    //     });
    // };

    return (
        <Layout>
            <BackHead title={title} description={description} />
            <Breadcrumb
                title="Users"
                createLink={routes.create}
                listLink={routes.index}
            />
            <div className="card mb-4">
                <div className="card-header d-flex justify-content-between">
                    <div className="headerTitle">
                        <i className="fas fa-table me-1"></i>
                        {title}
                    </div>
                    {/** .headerTitle*/}
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
                                                name="name"
                                                value={item.name}
                                                placeholder="Full Name"
                                                onChange={handleChange}
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
                                                name="email"
                                                value={item.email}
                                                placeholder="Email"
                                                onChange={handleChange}
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
                                                name="password"
                                                value={item.password}
                                                placeholder="Password"
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="password">
                                                Password
                                            </label>
                                        </div>
                                    </div>
                                    {/** .col */}

                                    <div className="col-md-1">
                                        <div className="form-floating mt-3 d-flex gap-1">
                                            <button
                                                type="button"
                                                className="btn badge bg-danger"
                                                title={
                                                    key != 0
                                                        ? "Remove row"
                                                        : "Can not be removed"
                                                }
                                                onClick={() =>
                                                    key != 0
                                                        ? removeUserInput(key)
                                                        : false
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={
                                                        key == 0
                                                            ? faBan
                                                            : faMinus
                                                    }
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    {/** .col */}
                                </div>
                            );
                        })}
                        {/** form.row */}

                        <div className="col-12">
                            <div className="btnGroup d-flex gap-2">
                                <button
                                    type="button"
                                    className="btn btn-dark btn-sm"
                                    onClick=""
                                    title="Add Row"
                                >
                                    <FontAwesomeIcon icon={faPlus} /> Add Row
                                </button>
                                {/** .btn */}
                                <button
                                    type="button"
                                    className="btn btn-warning btn-sm "
                                    onClick=""
                                    title="Reset"
                                >
                                    <FontAwesomeIcon icon={faRefresh} /> Reset
                                </button>
                                {/** .btn */}
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    title="Save"
                                    disabled={processing}
                                >
                                    <FontAwesomeIcon icon={faUpload} /> Save
                                </button>
                                {/** .btn */}
                            </div>
                            {/** .btnGroup */}
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
