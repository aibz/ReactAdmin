import React, { Component } from 'react'
import {Carousel} from 'antd'

import './home.less'

/**
 * 主页
 */
export default class User extends Component {
    render() {
        return (
            <div className='home'>
                <span>主页</span>
                <Carousel autoplay dotPosition='left' dots='false'>
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                 </Carousel>,
                 <div>fdfd</div>
            </div>
        )
    }
}
