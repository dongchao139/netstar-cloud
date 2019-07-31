import Vue from 'vue';

//局部组件
new Vue({
    el: '#app',
    template: `
    <div>
        <child></child>
    </div>`,
    data: {
        msg: 123
    },
    components: {
        child: {
            template: `
            <div>
                <h2>{{msg2}}<!--,{{msg}}--></h2>
                <input type="button" value="button" @click="add()"/>
            </div>`,
            data() {
                return {
                    msg2: `abc`
                }
            },
            methods: {
                add() {
                    this.msg2 = this.msg2 == 'abc'?'ABC':'abc'
                }
            }
        }
    }
});
