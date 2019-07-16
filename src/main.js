 import './assets/demo.css';
 import './assets/demo2.less';
 //添加promise profile, 支持浏览器异步加载js
 import 'es6-promise/auto';
 import Vue from 'vue';

 //import './vue-demo.js';
 //import './components/vue-computed.js';
 import {appDemo, test} from "./components/vue-demo";

 import loading from './components/loading/loading.components';
 //声明全局vue组件
 Vue.use(loading);

 //import './components/vue-filter-demo';

// var app = document.getElementById("app");
// app.innerHTML = '<div>hello webpack</div>';

 console.log(test);
 console.log(appDemo);

 //异步加载js示例
 import('./sync.js').then(data => {
     console.log(data.default);
 });

 var a = new Promise(function (resolve,reject) {

 });
