import { Head } from "@inertiajs/inertia-react";

export default function BackHead({ title, description }) {
    return (
        <Head>
            <title head-key="title">
                {title + " | Laravel React Inertia App"}
            </title>
            <meta
                head-key="description"
                name="description"
                content={description}
            />
        </Head>
    );
}
