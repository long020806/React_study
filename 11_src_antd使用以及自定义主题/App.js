import React, { Component } from 'react'
import {Button,DatePicker} from 'antd'
import {WechatOutlined,WeiboOutlined,SearchOutlined} from '@ant-design/icons'
import './App.less'
const {RangePicker} = DatePicker;
/**
 * 注意本目录下craco.config.js 和 package.json 需放入 react_staging下
 */

export default class App extends Component {
    func = ()=>{
        return (data,dateString)=>{
            console.log(data,dateString)
        }
    }
    onChange = (data,dateString)=>{
        console.log(data,dateString)
    }
    render() {
        return (
        <div>
            App...
            <button>点我</button>
            <Button type="primary">按钮1</Button>
            <Button>按钮2</Button>
            <Button type="link">按钮3</Button>
            <Button type="primary" icon={<SearchOutlined />}>Search</Button>
            <WechatOutlined />
            <WeiboOutlined />
            <DatePicker onChange={this.onChange} />
            <RangePicker showTime />
        </div>
        )
    }
}
