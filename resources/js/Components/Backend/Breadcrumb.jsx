import { Link } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faList } from "@fortawesome/free-solid-svg-icons";

export default function Breadcrumb({ title, createLink, listLink }) {
    return (
        <>
            <div
                id="breadcrumb"
                className="d-flex flex-row justify-content-between align-items-center"
            >
                <h1 className="mt-3 mb-3 h2">{title}</h1>
                <div className="links d-flex gap-1">
                    <Link
                        href={createLink}
                        className="btn btn-secondary"
                        title="Add New"
                    >
                        <FontAwesomeIcon icon={faPlus} /> Add New
                    </Link>
                    <Link
                        href={listLink}
                        className="btn btn-secondary"
                        title="List"
                    >
                        <FontAwesomeIcon icon={faList} /> List
                    </Link>
                </div>
            </div>
            {/* #breadcrumb */}
        </>
    );
}
