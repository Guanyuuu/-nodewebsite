import React, { Component } from 'react'
import Request from '../../../API/api.js'
import PubSub from 'pubsub-js'
import './Dataapi.css'

export default class Dataapi extends Component {
    state = {
        data:[]
    }

    componentDidMount() {
        const data = Request('https://cnodejs.org/api/v1/topics')
        data.then(response => {
            this.setState({
                data: response.data
            })
        })
    }
    render() {
        const {data} = this.state
        PubSub.publish('dataAll',{a:'1'})
        return (
            data.map(value => {
                return (
                <div className="dataapi" key={value.id}>
                    <hr/>
                    <span className='count'><span className="im">{value.reply_count}</span>/<span>{value.visit_count}</span>&nbsp;</span>
                    {value.top ? <span className="top">置顶</span>:
                    value.tab === 'ask' ? <span className='gray'>问答</span>:
                    value.tab === 'share' ? <span className='gray'>分享</span>: ''
                    }&nbsp;
                    <a className='content' href="">{value.title}</a>
                </div>
                )
            })
        )
    }
}
