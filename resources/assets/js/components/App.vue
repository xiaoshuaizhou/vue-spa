<template>
    <div >
        <top-menu></top-menu>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import TopMenu from './common/TopMenus';
    export default {
        components:{
            TopMenu
        }
    }
</script>
<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .6s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>
<style>
    .active .router-link-exact-active .router-link-active{
        font-size: 25px;
    }
</style>