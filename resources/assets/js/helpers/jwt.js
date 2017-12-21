export default {

    setToker(token) {
        return window.localStorage.setItem('jwt_token', token);
    },

    getToken() {
        return window.localStorage.getItem('jwt_token');
    },
    removeToken() {
        return window.localStorage.removeItem('jwt_token');
    }

}