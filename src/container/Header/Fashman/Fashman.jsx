import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Fixright from '../../../components/Fixright/Fixright'
import './Fashman.css'

export default class Fashman extends Component {
    render() {
        return (
                <section>
                    <div className="fash-bigbox">
                        <div className='left'>
                            <div className="fash-head">
                                <Link to='/dataapi'>主页</Link> / <span>Node.js 新手入门</span>
                            </div>
                            <div className="fash-body">
                                <h1>Node.js 入门</h1>
                                <hr/>
                                <h3>《名侦探柯南》</h3>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <Fixright/>
                </section>
        )
    }
}
