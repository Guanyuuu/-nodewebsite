import React, { Component } from 'react'
import './Fixright.css'

export default class Fixright extends Component {
    render() {
        return (
            <div className="right">
                <div className="first">
                    <p>CNode：Node.js专业中文社区</p><br/><br/>
                    <div className="footer">
                        <p>您可以 登录 或 注册，也可以</p>
                        <button id="gitlogin">通 过 GitHub 登 录</button>
                    </div>
                </div>
                <div className="second">
                    <div className="header">无人回复的话题</div>
                    <div className="footer">
                        <a href="/#">柯南</a>
                        <a href="/#">毛利兰</a>
                        <a href="/#">灰原哀</a>
                        <a href="/#">毛利小五郎</a>
                        <a href="/#">怪盗基德</a>
                    </div>
                </div>
                <div className="third">

                </div>
                <div className="fourth">

                </div>
                <div className="fifth">

                </div>
            </div>
        )
    }
}
