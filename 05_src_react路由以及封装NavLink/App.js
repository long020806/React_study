import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Header from './components/Header'//Header是一般组件
import MyNavLink from './components/MyNavLink'
import About from './pages/About'//About是路由组件
import Home from './pages/Home'
export default class App extends Component {
    render() {
        return (
    <div>
        <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
            <Header></Header>
        </div>
        </div>
        <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
                
                {/* 原生html靠a标签跳转不同页面 */}
            {/* <a className="list-group-item active" href="./about.html">About</a>
            <a className="list-group-item" href="./home.html">Home</a> */}

            {/* React中靠路由链接实现切换组件 --编写路由链接*/}
                
                <MyNavLink to="/about" children="About"/>
                <MyNavLink to="/home" children="Home"/>
            </div>
        </div>
        <div className="col-xs-6">
            <div className="panel">
            <div className="panel-body">
                {/* 注册路由 */}
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>              

            </div>
            </div>
        </div>
        </div>
    </div>
        )
    }
}
