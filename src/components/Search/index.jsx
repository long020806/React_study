import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
export default class Search extends Component {

    search = async ()=>{
        const {keyWordEle:{
            value:keyWord
        }} = this;
        // this.props.updateAppState({isFirst:false,isLoading:true})
        //#region 发送请求使用axios
        /*
        PubSub.publish('atguigu',{isFirst:false,isLoading:true});
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            res=>{
                // this.props.updateAppState({users:res.data.items,isLoading:false});
                PubSub.publish('atguigu',{users:res.data.items,isLoading:false});

            },
            err=>{
                // this.props.updateAppState({isLoading:false,err:err.message})
                 PubSub.publish('atguigu',{isLoading:false,err:err.message});
            }
        )*/
        //#endregion

        //#region 使用fetch发送请求 
        PubSub.publish('atguigu',{isFirst:false,isLoading:true});
        try{
            const response = await fetch(`/api1/search/users2?q=${keyWord}`);
            const data = await  response.json();
            PubSub.publish('atguigu',{users:data.items,isLoading:false});

        }catch(err){
            PubSub.publish('atguigu',{isLoading:false,err:err.message});
        }
        //#endregion
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
