import Vue from 'vue';

Vue.directive('focus', function (el) {
    el.style.backgroundColor = 'skyblue';
    el.style.color = 'red';
    el.style.fontSize = '24px';
    el.onclick = function () {
        this.style.color = 'yellowgreen';
    }
});

Vue.directive('drag', function (el) {
    el.onmousedown = function (e) {
        let ev = e || event;
        let l = ev.clientX - this.offsetLeft;
        let t = ev.clientY - this.offsetTop;
        document.onmousemove = (eve) => {
            let eev = eve || event;
            this.style.left = eev.clientX - l + 'px';
            this.style.top = eev.clientY - t + 'px';
        };
        document.onmouseup = function () {
            this.onmousemove = this.onmouseup = null;
        }
    };
});

Vue.directive('randomColor', (el) => {
    el.onclick = () => {
        el.style.background = `rgb(${Math.random() * 256},
                ${Math.random() * 256},
                ${Math.random() * 256}`;
    }
});

Vue.directive('abc', (el, binding) => {
    let value = binding.value;
    el.style.backgroundColor = value;
});

Vue.directive('def', {
    bind() {

    },
    update() {

    }
});


new Vue({
    el: '#app',
    template: `
    <div>
        <div v-focus>Directive demo</div>
        <!--<div v-drag v-bind:style="{display: 'inline-block', 'background-color':'green',
             position: 'absolute', color: 'yellow',width: '100px',height:'100px'}">Drag demo</div>
        --><div v-abc="msg" v-drag v-randomColor :style="{display: 'inline-block', 'background-color':'green',
             position: 'absolute', color: 'yellow',width: '100px',height:'100px'}">Color demo</div>    
    </div>
    `,
    data: {
        msg: 'blue'
    }
});
