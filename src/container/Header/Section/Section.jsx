import React, { Component } from 'react'
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'
// import PubSub from 'pubsub-js'
import Fixright from '../../../components/Fixright/Fixright'
import Dataapi from './Data_api/Dataapi'
import Share from './Share/Share'
import Essence from './Essence/Essence'
import Problem from './Problem/Problem'
import Recruit from './Recruit/Recruit'
import Clienttest from './Clienttest/Clienttest'
import './Section.css'


export default class Section extends Component {


    render() {
        // 默认发布第一次
        // PubSub.publish('dataAll', data);
        return (
            <section className='max'>
                <div className="left">
                    <div className="head">
                        <ul>
                            <li onClick={this.clickGetData}>
                                <NavLink className='section_height'  to='/section/dataapi'>全部</NavLink>
                            </li>
                            <li>
                                <NavLink className='section_height' to="/section/essence">精华</NavLink>
                            </li>
                            <li>
                                <NavLink className='section_height' to="/section/share">分享</NavLink>
                            </li>
                            <li>
                                <NavLink className='section_height' to="/section/problem">问答</NavLink>
                            </li>
                            <li>
                                <NavLink className='section_height' to="/section/recruit">招聘</NavLink>
                            </li>
                            <li>
                                <NavLink className='section_height' to="/section/clienttest">客户端测试</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        <Switch>
                            <Route path="/section/dataapi" component={Dataapi}/>
                            <Route path="/section/share" component={Share}/>
                            <Route path='/section/essence' component={Essence}/>
                            <Route path='/section/problem' component={Problem}/>
                            <Route path='/section/recruit' component={Recruit}/>
                            <Route path='/section/clienttest' component={Clienttest}/>
                            <Redirect to="/section/dataapi"/>
                        </Switch>
                    </div>
                </div>
                <Fixright/>
            </section>
        )
    }
}