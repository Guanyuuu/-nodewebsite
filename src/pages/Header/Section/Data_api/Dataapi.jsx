import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './Dataapi.css'

export default class Dataapi extends Component {
    state = {
        data:[]
    }
   
    componentDidMount() {
        this.token = PubSub.subscribe('dataAll', (_,data) => {
            this.setState({data})
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }
    render() {
        const {data} = this.state
        return (
            data.map(value => {
                return (
                <div className="dataapi" key={value.id}>
                    <hr/>
                    <span className='count'><span className="im">{value.reply_count}</span>/<span>{value.visit_count}</span>&nbsp;&nbsp;</span>
                    {value.top ? <span className="top">置顶</span>:
                    value.tab === 'ask' ? <span className='gray'>问答</span>:
                    value.tab === 'share' ? <span className='gray'>分享</span>: <span className='top'>精华</span>
                    }&nbsp;&nbsp;
                    <a className='content' href={value.author.avatar_url}>{value.title}</a>
                </div>
                )
            })
        )
    }
}
