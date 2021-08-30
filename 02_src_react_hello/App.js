//穿件外壳组件App
import React,{Component} from 'react'
import Hello from './components/Hello'
import Welcom from './components/Welcom'
//创建并暴露App组件
export default class App extends Component{
    render(){
        return (
            <div>
                <Hello/>
                <Welcom/>
            </div>
        )
    }
}

