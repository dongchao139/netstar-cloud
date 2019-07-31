import Vue from 'vue';


//局部组件
new Vue({
    el: '#app',
    template: `
    <div>
        <input type="button" name="name" value="child" @click="show='child'"/>
        <input type="button" name="value" value="son" @click="show='son'"/>
        <component :is="show"></component>
    </div>`,
    data: {
        show: 'child'
    },
    components: {
        child: {
            template: `<div>child</div>`,
            data() {
                return {
                }
            },
            methods: {
            }
        },
        son: {
            template: `<div>son</div>`,
            data() {
                return {
                }
            },
            methods: {
            }
        }
    }
});
