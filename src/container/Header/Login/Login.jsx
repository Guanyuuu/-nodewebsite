import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

export default class Login extends Component {
    render() {
        return (
            <div className='big_container'>
                <div className="login-left">
                    <div className="header">
                        <Link className='zhuye' to='/dataapi'>主页</Link>&nbsp;/&nbsp;<span>登录</span>
                    </div>
                    <div className="inner">
                        <form action="">
                            <div className='username'>
                                <label htmlFor="us">用户名</label><input type="text" id='us'/>
                            </div>
                            <div className="password">
                                <label htmlFor='pw'>密码</label><input type="password" name="" id="pw"/>
                            </div>
                            <div className="last">
                                <span className='form-login'>登录</span>
                                <span className='form-gitlogin'>通过GitHub登录</span>
                                <Link className='forgot-password' to='/'>忘记密码?</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="login-right">
                    <div className="header">关于</div>
                    <div className='atten'>
                        <div>CNnode：node.js专业中文社区</div>
                        <div className='zheli'>在这里你可以：</div>
                        <ul className='login-li'>
                            <li>向别人提出你遇到的问题</li>
                            <li>帮助遇到问题的人</li>
                            <li>分享自己的知识</li>
                            <li>和其他人一起进步</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
