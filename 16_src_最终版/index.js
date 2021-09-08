import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store.js'
import {Provider} from 'react-redux'

// store.subscribe(()=>{ReactDOM.render(<App/>, document.getElementById("root"))});
ReactDOM.render(
    // 此处需要用Provider包裹App，目的是App所有的后代容器组件都能接受到store
    <Provider store={store}>
        <App/>
    </Provider>,
document.getElementById("root"));