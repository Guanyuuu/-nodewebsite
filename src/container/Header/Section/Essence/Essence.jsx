import React, { Component } from 'react'
import {connect} from 'react-redux'
import {reData} from '../../../../API/index'
import {requestPageData} from '../../../../redux/actions/action_api'
// import PubSub from 'pubsub-js'
import './Essence.css'

class Essence extends Component {
    componentDidMount() {
    //     const data = Request('https://cnodejs.org/api/v1/topics')
        reData().then(response => {
            this.props.handlePublishData(response.data)
        })
    }

    render() {
        const {data} = this.props
        const newData = data.filter(value => {
            return !value.tab
        })         
        return (
            newData.map(value => {
                return (
                    <div className="dataapi" key={value.id}>
                        <hr/>
                        <span className='count'><span className="im">{value.reply_count}</span>/<span>{value.visit_count}</span></span>&nbsp;
                        <span className='essence'>精华</span>&nbsp;&nbsp;
                        <a className='content' href="http://baidu.com">{value.title}</a>
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
)(Essence)