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
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import { toast } from "react-toastify";

const Create = ({ listLink, createLink, routes }) => {
    const title = "Create new users";
    const description = "User registration form on admin panel";

    /**
     * userInitialValue object
     * @type {{name: string, email: string, password: number|string|symbol}}
     */
    const userInitialValue = { id: 1, name: "", email: "", password: "" };
    const [users, setUser] = useState([userInitialValue]);
    const { processing } = useForm({});

    /**
     * handleInputChange set user attributes and finally setUser state
     * @param {number} index
     * @param {object} event
     */
    const handleInputChange = (index, event) => {
        setUser((previousUsers) => {
            previousUsers[index][event.target.id] = event.target.value;
            return [...previousUsers];
        });
    };

    /**
     * addNewRow and update setUser state
     * @param {object} event
     */
    const addNewRow = (event) => {
        setUser((previousUsers) => {
            return [
                ...previousUsers,
                { ...userInitialValue, id: previousUsers.length + 1 },
            ];
        });
    };

    /**
     * removeUserInput remove user input and update setUser state
     * @param {number} key
     */
    const removeUserInput = (key) => {
        let usersClone = [...users];
        usersClone.splice(key, 1);
        setUser(usersClone);
    };

    /**
     * removeUserInput remove user input and update setUser state
     * @param {number} key
     */
    const resetUserInput = () => {
        setUser([userInitialValue]);
    };

    /**
     * save users
     */
    const store = () => {
        Inertia.visit(routes.store, {
            method: "post",
            data: users,
            replace: false,
            preserveState: true,
            preserveScroll: true,
            only: [],
            headers: {},
            errorBag: null,
            forceFormData: false,
            onCancelToken: (cancelToken) => {},
            onCancel: () => {},
            onBefore: (visit) => {},
            onStart: (visit) => {},
            onProgress: (progress) => {},
            onSuccess: (page) => {
                resetUserInput();
                toast.success("Successful", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            },
            onError: (errors) => {},
            onFinish: (visit) => {},
        });
    };

    return (
        <Layout>
            <BackHead title={title} description={description} />
            <Breadcrumb
                title="Users"
                createLink={createLink}
                listLink={listLink}
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
                                                value={item.name}
                                                placeholder="Full Name"
                                                onChange={(e) =>
                                                    handleInputChange(key, e)
                                                }
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
                                                value={item.email}
                                                placeholder="Email"
                                                onChange={(e) =>
                                                    handleInputChange(key, e)
                                                }
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
                                                value={item.password}
                                                placeholder="Password"
                                                onChange={(e) =>
                                                    handleInputChange(key, e)
                                                }
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
                                    onClick={addNewRow}
                                    title="Add Row"
                                >
                                    <FontAwesomeIcon icon={faPlus} /> Add Row
                                </button>
                                {/** .btn */}
                                <button
                                    type="button"
                                    className="btn btn-warning btn-sm "
                                    onClick={resetUserInput}
                                    title="Reset"
                                >
                                    <FontAwesomeIcon icon={faRefresh} /> Reset
                                </button>
                                {/** .btn */}
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    onClick={store}
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
