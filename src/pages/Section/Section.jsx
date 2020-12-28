import React, { Component } from 'react'
import {NavLink, Route, Switch} from 'react-router-dom'
import Dataapi from './Data_api/Dataapi'
import Share from './Share/Share'
import './Section.css'


export default class Section extends Component {
    render() {
        return (
            <section>
                <div className="left">
                    <div className="head">
                        <ul>
                            <li>
                                <NavLink to="/dataapi">全部</NavLink>
                            </li>
                            <li>
                                <NavLink to="">精华</NavLink>
                            </li>
                            <li>
                                <NavLink to="/share">分享</NavLink>
                            </li>
                            <li>
                                <NavLink to="">问答</NavLink>
                            </li>
                            <li>
                                <NavLink to="">招聘</NavLink>
                            </li>
                            <li>
                                <NavLink to="">客户端测试</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        <Switch>
                            <Route path="/dataapi" component={Dataapi}/>
                            <Route path="/share" component={Share}/>
                        </Switch>
                    </div>
                </div>
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
            </section>
        )
    }
}

