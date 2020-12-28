import React, { Component } from 'react'
import Header from './components/Header/Header'
import Section from './pages/Section/Section'
import Footer from './components/Footer/Footer'
import './APP.css'

export default class APP extends Component {
    render() {
        return (
            <div className='container'>
                <Header/>
                <Section/>
                <Footer/>
            </div>
        )
    }
}
