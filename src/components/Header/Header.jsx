import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <header>
            <div className="hebox">
                <div className="left">
                    Cnode
                    <input type="text"/>
                </div>
                <div className="right">
                    <ul>
                        <li>
                            <a href="/#">首页</a>
                        </li>
                        <li>
                            <a href="/#">新手入门</a>
                        </li>
                        <li>
                            <a href="/#">API</a>
                        </li>
                        <li>
                            <a href="/#">关于</a>
                        </li>
                        <li>
                            <a href="/#">注册</a>
                        </li>
                        <li>
                            <a href="/#">登录</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        )
    }
}
