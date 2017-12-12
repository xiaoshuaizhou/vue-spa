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
