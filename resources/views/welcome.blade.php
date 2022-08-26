<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    {{-- <meta name="description" content="Web site created using create-react-app" />
    <title>{{ $metaTitle ?? 'Dashboard' }}</title> --}}

    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
    @inertiaHead
</head>

<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    @inertia

</body>

</html>
