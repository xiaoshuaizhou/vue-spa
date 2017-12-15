<template>
    <div style="margin: 0 auto;">

        <nav class="navbar navbar-default" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#target-menu">
                    <span class="sr-only">qieh</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand" to="/" ><span>LaraVue</span></router-link>
            </div>
            <div class="collapse navbar-collapse" id="target-menu">
                <ul class="nav navbar-nav">
                    <router-link class="navbar-brand" to="/login"><span  class="glyphicon glyphicon-log-in"></span>&nbsp; 登录</router-link>
                    <router-link class="navbar-brand" to="/register"><span  class="glyphicon glyphicon-user"></span>&nbsp;注册</router-link>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {}
</script>
