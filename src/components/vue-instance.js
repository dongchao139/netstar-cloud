import * as template from './vue-instance.html';
import Vue from "vue";

let v = new Vue({
    //el: '#app',
    template: template,
    lll:123,
    data: {
        msg: 'hello',
        arr:['张三','李四','王五']
    },
    methods: {
        add() {
            //vue2.x中数组中有相同的数据时,不用添加track-by="$index"
            this.arr.push('赵六');
        }
    }
}).$mount('#app');

v.msg = 'world';

console.log('===v.$===');
console.log(v.$data);
console.log(v.$el);
console.log(v.$options);
//console.log(v.$destroy());
//console.log(v);
//v.msg = 'world2';


console.log('===v.$===');
