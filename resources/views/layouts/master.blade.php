<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>


    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
<div id="app">
    <div class="panel">
        <div class="panel-heading"></div>
        <div class="panel-body">
            <ul style="margin-left: 700px;" class="nav nav-pills">
                <router-link to="/" role="presentation" class="active">HoMe</router-link>
                |
                <router-link to="/about" role="presentation">AbOut</router-link>
            </ul>
        </div>
    </div>

    <router-view></router-view>
</div>

<script src="/js/app.js"></script>
</body>
</html>
