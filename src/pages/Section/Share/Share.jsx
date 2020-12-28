import React, { Component } from 'react'
import PubSub from 'pubsub-js'


export default class Share extends Component {

    componentDidMount() {
        this.token = PubSub.subscribe('dataAll',(_,data) => {
          console.log(data);  
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
