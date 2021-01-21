import React, { Component } from 'react'
// import PubSub from 'pubsub-js'
import {connect} from 'react-redux'
import {reData} from '../../../../API/index'
import {requestPageData} from '../../../../redux/actions/action_api'
import './Dataapi.css'


class Dataapi extends Component {


    componentDidMount() {
    //  const data = Request('https://cnodejs.org/api/v1/topics')
        reData().then(response => {
            this.props.handlePublishData(response.data)
        })
    }

    render() {
        // const {data} = this.state
        const {data} = this.props
        // console.log(this.props);
        // console.log('@@@调用data',m++);
        // const data = this.props.location.state
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


export default connect(
    state => ({data:state}),{
        handlePublishData:requestPageData
    }
    
)(Dataapi)

