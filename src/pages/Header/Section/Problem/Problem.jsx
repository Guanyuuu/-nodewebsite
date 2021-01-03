import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Problem extends Component {
    state = {
        data:[]
    }

    componentDidMount() {
        this.token = PubSub.subscribe('dataAll', (_,data) => {
            const newdata = data.filter(value => value.tab === 'ask')
            this.setState({data: newdata})
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
                        <a className='content' href="http://baidu.com">{value.title}</a>
                    </div>
                )
            })
        )
    }
}
