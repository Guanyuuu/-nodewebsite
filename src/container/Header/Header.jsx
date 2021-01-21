import React, { Component } from 'react'
import {Link, Route, Switch, Redirect} from 'react-router-dom'

// import {reData} from '../../API/index'
import Section from './Section/Section'
import Fashman from './Fashman/Fashman'
import Dapi from './DAPI/Dapi'
import About from './About/About'
import Register from './Register/Register'
import Login from './Login/Login'
import './Header.css'



export default class Header extends Component {

    // componentDidMount() {
    //     reData().then(response => {
    //         this.props.handlePublishData(response.data)
    //     })
    // }

    // handleGetData = () => {
    //     const data = Request('https://cnodejs.org/api/v1/topics')
    //     data.then(response => {
    //         this.props.handlePublishData(response.data)
    //     })
    // }
    // 传递参数data
    render() {

        return (
            <div>
                <header>
                    <div className="hebox">
                        <div className="left">
                            <span className='cnode'>Cnode</span>
                            <input type="text"/>
                        </div>
                        <div className="right">
                            <ul>
                                <li>
                                    <Link className='heiginlight' to='/section'>首页</Link>
                                </li>
                                <li>
                                    <Link className='heiginlight' to='/fashman'>新手入门</Link>
                                </li>
                                <li>
                                    <Link className='heiginlight' to='/dapi'>API</Link>
                                </li>
                                <li>
                                    <Link className='heiginlight' to='/about'>关于</Link>
                                </li>
                                <li>
                                    <Link className='heiginlight' to='/register'>注册</Link>
                                </li>
                                <li>
                                    <Link className='heiginlight' to='/login'>登录</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <Switch>
                    <Route path='/section' component={Section}/>
                    <Route path='/fashman' component={Fashman}/>
                    <Route path='/dapi' component={Dapi}/>
                    <Route path='/about' component={About}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/login' component={Login}/>
                    <Redirect to='/section'/>
                </Switch>
            </div>
        )
    }
}



