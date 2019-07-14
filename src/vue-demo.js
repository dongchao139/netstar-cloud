import Vue from "vue";
import vuedemo from './components/vue-demo.tpl';

let template = vuedemo();
console.log('typeof vuedemo: ' + typeof vuedemo);

/**
 * map文件的作用：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
 * 有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
 */
new Vue({
    el: '#app',
    template: template,
    data: {
        msg: 'hello vue',
        show: true,
        name: 'name',
        arr: ['a','b','c','d','e'],
        obj: {
            'ab': 10,
            'de': 20,
            'fg': 30
        },
        myDiv: {
            'red': true,
            'shadow': true,
            'animate': true
        },
        myStyle: {
            'width':'200px',
            'height':'200px',
            'background-color':'red'
        }
    },
    methods: {
        onClick(event) {
            alert(this.msg);
            console.log(event);
        },
        hidden() {
            this.show = !this.show;
        },
        outerEvent() {
            alert('outerEvent');
        },
        innerEvent(event) {
            alert('innerEvent');
        },
        keydownEvent(event) {
            alert('enter');
            console.log(event);
        },
        changeStyle() {
            this.myDiv.shadow = !this.myDiv.shadow;
        }
    }
});

export var appDemo = {
    appDemo: true
};

export var test={
    test:true
};
