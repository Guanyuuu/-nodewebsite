import React, { Component } from 'react'
import Header from './pages/Header/Header'
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
