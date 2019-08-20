import './assets/demo.css';
import './assets/demo2.less';
import './assets/scss/app.scss'

//添加promise profile, 支持浏览器异步加载js
import 'es6-promise/auto';

//引入bootstrap的js文件的方法
//分开引入
import "./bootstrap-demo/bootstrap.include.js"


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
