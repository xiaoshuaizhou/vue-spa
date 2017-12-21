import VueRouter from 'vue-router';
import Store from './store/index'
import jwtToken from './helpers/jwt'

let routes = [
    {
        path: '/',
        component: require('./components/pages/Home'),
        meta: {}
    },
    {
        path: '/about',
        component: require('./components/pages/About'),
        meta: {}
    },
    {
        path: '/post/:id',
        name: 'posts',
        component: require('./components/posts/Post'),
        meta: {}
    },
    {
        path: '/register',
        name: 'register',
        component: require('./components/register/Register'),
        meta: {}
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: require('./components/confirm/Email'),
        meta: {}
    },
    {
        path: '/login',
        name: 'login',
        component: require('./components/login/Login'),
        meta: {}
    },
    {
        path: '/profile',
        name: 'profile',
        component: require('./components/user/profile'),
        meta: { RequiresAuth: true }
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to,from,next) => {
    if (to.meta.RequiresAuth) {
        if (Store.state.AuthUser.authenticated || jwtToken.getToken()) {
            return next();
        } else {
            return next({name: 'login'})
        }
    }

    return next()
})

export default router