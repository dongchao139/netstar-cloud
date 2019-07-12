import Vue from "vue";
import logo from "./assets/logo.png";
import footer from "./footer.html";

/**
 * map文件的作用：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
 * 有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
 */
new Vue({
    el: '#app',
    template: `
        <div>
            <h4>引入图片示例: 使用import导入图片,在多行文本中使用\${}引入变量</h4>
            <img src=${logo} alt="demo"/>
            
            <span>{{msg}}</span><br/>

            <button @click="hidden()">{{this.show ? 'hidden': 'show'}}</button>
            <p v-show="show">Alkaline Deodorise Felicia</p><br/>

            <input v-model="name"/> {{name}}<br/>

            <ul v-for="(index,item) in arr">
                <li>{{index + 1}}-{{item}}</li>
            </ul>
            <ul>
                <li v-for="(key,value) in obj">{{key}}:&nbsp;{{value}}</li>
            </ul>

            <button @click="onClick($event)">Button</button>

            <div @click="outerEvent()">
                outer div
                <div @click.stop="innerEvent($event)">
                    inner div
                </div>
            </div>

            <input @keydown.enter="keydownEvent($event)" name="keydownInput" placeholder="keydown A"/>
            <br/>

            <button @click="changeStyle()">Change Style</button>
            <div :class="myDiv"></div>
            <br/>
            <div :style="myStyle"></div>  
            ${footer}    
        </div>
        `,
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

export var appDemo = {};

export var test={};
