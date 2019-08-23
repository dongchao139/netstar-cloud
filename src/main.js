// import './assets/scss/app.scss'
// import './assets/game.css'

// //添加promise profile, 支持浏览器异步加载js
// import 'es6-promise/auto';

// //引入bootstrap的js文件的方法
// //分开引入
// import "./bootstrap-demo/bootstrap.include"

// import "./components/game.component";

// import {test} from './components/test';

// test();


// 先引入, 再export default, 然后npm run pub打包成可发布到npm的js
//import {IndexComponent} from "./components/index.component";

//export default IndexComponent;

import "./components/index.component";

//然后从npm中安装发布的模块, 引入组件
var app = require ('../dist/static/js/app').default;
console.log(app);
