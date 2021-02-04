import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Todo from './components/Todo'
import Siderbar from './components/Sidebar'

ReactDOM.render(
    // <Layout className="layout">
    //     <Sider className="sider">
    //         <Siderbar />
    //     </Sider>
    //     <Content>
    //         <Todo />
    //     </Content>
    // </Layout>,
    <div className="layout">
        <Siderbar />
        <Todo />
    </div>,
    document.getElementById('root')
)
