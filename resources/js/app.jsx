import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
InertiaProgress.init();
createInertiaApp({
    resolve: (name) => import(`./Pages/${name}`),
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    },
});

// Old Code

// import "./bootstrap";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import Test from "./Pages/Test";
// import "../css/app.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Test />);
