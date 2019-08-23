import * as React from 'react';
//import * as ReactDOM from 'react-dom';
interface State {
    msg: string
}

export class IndexComponent extends React.Component<Object,State> {
    render(){
        this.state = {
            msg: 'hello'
        };
        return <h1>{this.state.msg} world!!!</h1>
    }
}

// import IndexComponent from '../../dist/static/js/app';

// console.log(IndexComponent);

// var oBox = document.getElementById("box");
// ReactDOM.render(<IndexComponent/>, oBox);