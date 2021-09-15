import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';

export default class Message extends Component {
    state = {
        messageArr:[
            {id:'01',title:"消息1"},
            {id:'02',title:"消息2"},
            {id:'03',title:"消息3"},
        ]
    }
    back=()=>{
        this.props.history.goBack();
    }
    forward = ()=>{
        this.props.history.goForward();
    }
    go = ()=>{
        this.props.history.go(2)
    }
    render() {
        const {messageArr} = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map(item=>{
                            return (
                                <li key={item.id}>
                                    {/* 向路由组件传递params参数 */}
                                    <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>&nbsp;&nbsp;
                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link>&nbsp;&nbsp; */}
                                    {/* 向路由组件传递state参数 */}
                                    {/* <Link to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link>&nbsp;&nbsp; */}

                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Switch>
                    {/* 声明接收params参数 */}
                    <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
                    {/* search参数无需声明接收 */}
                    {/* <Route path="/home/message/detail" component={Detail}></Route> */}
                    {/* state参数无需声明接收 */}
                    {/* <Route path="/home/message/detail" component={Detail}></Route> */}
                </Switch>
                <button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>GO</button>
            </div>
        )
    }
}
