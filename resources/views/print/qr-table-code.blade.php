<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    {{--    @vite(['resources/css/app.css'])--}}
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<style>

    table, th, td {

    }


    div. a {
        writing-mode: vertical-rl;
        transform: rotate(270deg);
        transform: scale(-1);
        font-size: 100%;
        width: 7px;
        display: block;
        text-align: center;
    }

    .table_title_left div {
        writing-mode: vertical-rl;
        white-space: nowrap;
        transform: scale(-1);
        padding: 20px;
        text-align: center;
    }

</style>
<body>
<div class="flex justify-center items-center p-6 border border-gray-500 w-80 max-w-80">
    {!! QrCode::size(200)->generate($qr_code) !!}
</div>
<script>
    window.print();
</script>
</body>
</html>

