import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class Header extends Component {
    back = ()=>{
        this.props.history.goBack();
    }
    forward = ()=>{
        this.props.history.goForward();
    }
    go = ()=>{
        this.props.history.go(2);
    }
    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>GO</button>
            </div>
        )
    }
}
export default withRouter(Header);
//withRouter 可以加工一般组件，让一般组件具备由组件所特有的api
//withRouter 返回是一个新组件