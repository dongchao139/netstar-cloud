import Vue from "vue";
import vueComputed from "./components/vue-computed.tpl";

let template = vueComputed();
console.log('typeof vueComputed: ' + typeof vueComputed);

new Vue({
    el: '#app',
    template: template,
    data: {
        value1:'',
        value2:''
    },
    computed: {
        //计算属性
        sum(value){
            return  Number(this.value1) + Number(this.value2);
        },
        //计算属性传参
        calculate() {
            return function (value) {
                return Number(value) + Number(this.value1) + Number(this.value2);
            }
        },
        // 绑定set get
        c: {
            get() {
                return 10;
            },
            set(val) {
                this.value1 = val;
            }
        }
    }
});
