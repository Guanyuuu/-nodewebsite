import React, { Component } from 'react'
import Header from './container/Header/Header'
// import ContainerApi from './container/container_api'
import Footer from './components/Footer/Footer'
import './APP.css'

export default class APP extends Component {
    render() {
        return (
            <div className='container'>
                <Header/>
                <Footer/>
            </div>
        )
    }
}
