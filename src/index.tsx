import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Layout } from 'antd'
import Todo from './components/Todo'

const { Sider, Content } = Layout

ReactDOM.render(
    <React.StrictMode>
        <Layout className="layout">
            <Sider className="sider">ECMAScript 6</Sider>
            <Content>
                <Todo />
            </Content>
        </Layout>
    </React.StrictMode>,
    document.getElementById('root')
)
