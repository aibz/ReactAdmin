import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.less'
import logo from '../../assets/images/logo.png'

export default class LeftNav extends Component {
    render() {
        return (
            <div className='left-nav'>
                <Link to='/' className= 'left-nav-header'>
                    <img src={logo} alt= 'logo'/>
                    <h1>管理系统</h1>
                </Link>
            </div>
        )
    }
}
