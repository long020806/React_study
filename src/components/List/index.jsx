import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'
export default class List extends Component {
    state={users:[],
        isFirst:true,
        isLoading:false,
        err:"",
    }

    componentDidMount(){
        this.token = PubSub.subscribe('atguigu',(_,stateObj)=>{
            this.setState(stateObj)
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }
    render() {
        const {users,isFirst,isLoading,err} = this.state;
        return (
            <div className="row">
                {   
                    isFirst?<h2>输入关键词，点击搜索</h2>:
                    isLoading?<h2>Loading...</h2>:
                    err?<h2 style={{color:'red'}}>{err}</h2>:
                    users.map(item=>{
                        return (
                            <div className="card" key={item.id}>
                                <a rel="noreferrer" href={item.html_url} target="_blank">
                                <img alt="head_portrait" src={item.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{item.login}</p>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
