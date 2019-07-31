import Vue from 'vue';

let childTemplate = `
<div>
    <slot name="slot1"></slot>
    <h1>{{msg}}</h1>
    <slot name="slot2"></slot>
    <slot name="slot3"></slot>
</div>
`;
let Child = {
    template: childTemplate,
    data() {
        return {
            msg: '今天天气不错'
        }
    }
};

let template = `
    <child>
        <h3 slot="slot1">今年下不了雪了</h3>
        <h3 slot="slot2">今年下不了雪了</h3>
        <h3 slot="slot3">今年下不了雪了</h3>
    </child>
`;
new Vue({
    el: '#app',
    template: template,
    data: {

    },
    components:{
        Child: Child
    }
});
