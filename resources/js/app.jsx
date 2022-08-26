import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";

import { InertiaProgress } from "@inertiajs/progress";
InertiaProgress.init();

createInertiaApp({
    resolve: (name) => import(`./Pages/${name}`),
    setup({ el, App, props }) {
        const root = ReactDOM.createRoot(el);
        root.render(<App {...props} />);
    },
    title: (title) => `${title} - Laravel react inertia app`,
});
