import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Fixright from '../../../components/Fixright/Fixright'
import './About.css'

export default class Register extends Component {
    render() {
        return (
                <section>
                    <div className='left'>
                        <div className="fash-head">
                            <Link to='/dataapi'>主页</Link> / <span>关于</span>
                        </div>
                        <div className="fash-body">
                            <h1>关于</h1>
                            <span>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</span>
                            <span>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</span>
                        </div>
                    </div>
                    <Fixright/>
                </section>
        )
    }
}
