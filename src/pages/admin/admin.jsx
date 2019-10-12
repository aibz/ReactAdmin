import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import memoryUtils from '../../utils/memoryUtils'


export default class admin extends Component {
    render() {
        const user = memoryUtils.user
        if(!user || !user._id){
            return <Redirect to= '/login'/>
        }
        return (
            <div>
                我是 {user.username}
            </div>
        )
    }
}
