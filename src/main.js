import './assets/demo.css';
import './assets/demo2.less';
import './assets/scss/app.scss'

import {appDemo, test} from "./components/vue-demo";
import loading from './components/loading/loading.components';
import {template} from "./bootstrap-demo/demo-1/demo1.js"

import "./bootstrap-demo/bootstrap.include.js"
import Vue from 'vue';

//引入其他模块示例
 console.log(test);
 console.log(appDemo);

//声明全局vue组件
 Vue.use(loading);

 //import './vue-demo.js';
 //import './components/vue-computed.js';
 //import './components/vue-filter-demo';
 //import './components/vue-instance.js';
 //import './components/vue-directive.js';
 //import './components/vue-life-cycle.js';

 //import "./components/vue-slot-demo.js"
 //import "./components/vue-child-component.js"
 //import "./components/vue-dynamic-components.js"
var body = document.getElementsByTagName('body')[0];
 body.innerHTML = template;

 //直接操作dom示例
 // var app = document.getElementById("app");
 // app.innerHTML = '<div>hello webpack</div>';


 //异步加载js示例
 import('./sync.js').then(data => {
     console.log(data.default);
 });

 var a = new Promise(function (resolve,reject) {

 });
