import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./components/Home')
    },
    {
        path: '/about',
        component: require('./components/About')
    },
    {
        path: '/post/:id',
        name: 'posts',
        component: require('./components/Post')
    }
];

export default new VueRouter({
    mode:'history',
    routes
});