//封装vue模块组件实例

import LoadingComponent from "./Loading";
import Loading2Component from "./loading2";

const Loading = {
    install(vue) {
        vue.component('loading', LoadingComponent);
        vue.component('loading2', Loading2Component);
    }
};

export default Loading;
