import './assets/scss/app.scss'
import './assets/game.css'

//添加promise profile, 支持浏览器异步加载js
import 'es6-promise/auto';

//引入bootstrap的js文件的方法
//分开引入
import "./bootstrap-demo/bootstrap.include.js"

import "./components/index.component.tsx"

import "./components/game.component.tsx";

import {test} from './components/test.ts';

test();
