import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {

    search = ()=>{
        const {keyWordEle:{
            value:keyWord
        }} = this;
        this.props.updateAppState({isFirst:false,isLoading:true})
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            res=>{
                this.props.updateAppState({users:res.data.items,isLoading:false});
            },
            err=>{
                this.props.updateAppState({isLoading:false,err:err.message})
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={(c)=>this.keyWordEle = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
