<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>vue-demo</title>
</head>
<body>
<div>
    <h4>引入图片示例: 使用import导入图片,在多行文本中使用${}引入变量</h4>
    <img src="<%= require('../assets/logo.png')%>" alt="demo"/>

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
    <%= require('../footer.html')%>
</div>
</body>
</html>
