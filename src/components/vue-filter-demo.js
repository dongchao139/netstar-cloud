import * as filterDemo from './vue-filter-demo.html';
import Vue from 'vue';

Vue.filter('currency', (val) => {
    return '¥' + Number(val).toFixed(2);
});

Vue.filter('capitalize', (val) => {
    if (typeof val == 'string') {
        return val.charAt(0).toUpperCase() + val.substring(1);
    }
    return val.toString().charAt(0).toUpperCase() + val.toString().substring(1);
});

Vue.filter('toUpperCase', (val) => {
    if (typeof val == 'string') {
        return val.toUpperCase();
    }
    return val.toString().toUpperCase();
});

new Vue({
    el: '#app',
    template: filterDemo,
    data: {
        msg: 'abc',
        money: 0
    }
});
