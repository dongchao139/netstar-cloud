 import './vue-demo.js';
 import './assets/demo.css';
 import 'es6-promise/auto';
 import {appDemo} from "./vue-demo";
 import {test} from "./vue-demo";

// var app = document.getElementById("app");
// app.innerHTML = '<div>hello webpack</div>';

 console.log(test);
 console.log(appDemo);

 //异步加载js示例
 import('./sync.js').then(data => {
     console.log(data);
 });

 var a = new Promise(function (resolve,reject) {

 });
