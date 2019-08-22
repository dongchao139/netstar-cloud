import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface State {
    msg: string
}

export default class IndexComponent extends React.Component<Object,State> {
    render(){
        this.state = {
            msg: 'hello'
        };
        return <h1>{this.state.msg} world!!!</h1>
    }
}


var oBox = document.getElementById("box");
ReactDOM.render(<IndexComponent/>, oBox);
