import React, { Component } from 'react'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { Modal, Button } from 'antd'

// import { formateDate } from '../../utils/dateFormatUtils'
import { reqWeather } from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import menuList from '../../config/menuConfig'
import storageUtils from '../../utils/storageUtils'
import './index.less'

class Header extends Component {

    state = {
        currentTime: moment().format('YYYY-MM-DD HH:mm:ss'),
        weather: '',
        dayPictureUrl: '',
        temperature: '',
    }

    //每隔一秒显示一次当前时间
    getTime = () => {

        this.setIntervalId = setInterval(() => {
            const currentTime = moment().format('YYYY-MM-DD HH:mm:ss')
            // const currentTime = formateDate(Date.now())
            this.setState({ currentTime })
        }, 1000)
    }

    //获取天气
    getWeather = async () => {
        const { weather, dayPictureUrl, temperature } = await reqWeather('郑州')
        this.setState({ weather, dayPictureUrl, temperature })
    }

    //获取菜单名字
    getTitle = () => {
        const path = this.props.location.pathname
        let title
        menuList.forEach(item => {
            if (item.key === path) {
                title = item.title
            } else if (item.children) {
                const cItem = item.children.find(cItem => cItem.key === path)
                if (cItem) {
                    title = cItem.title
                }
            }
        })
        return title
    }

    //退出登陆
    logout = () => {
        Modal.confirm(
            {
                title: '确定要退出吗?',
                onOk: () => {
                    storageUtils.removeUser()
                    memoryUtils.user = {}
                    this.props.history.replace('/login')
                },

            }
        )
    }

    //在组件第一次渲染之后执行此方法
    componentDidMount() {
        //每一秒获取一次当前时间
        this.getTime()

        //获取天气
        this.getWeather()

    }

    //在组件卸载之前执行此方法
    componentWillUnmount() {
        clearInterval(this.setIntervalId)
    }

    render() {

        const { username } = memoryUtils.user

        const title = this.getTitle()

        return (
            <div className='header'>
                <div className='header-top'>

                    <span>欢迎，{username}</span>
                    <Button type="primary" onClick={this.logout}>退出</Button>
                </div>
                <div className='header-bottom'>

                    <div className='header-bottom-left'>{title}</div>
                    <div className='header-bottom-right'>
                        <span>{this.state.currentTime}</span>
                        <span><img src={this.state.dayPictureUrl} alt='weather' /></span>
                        <span>{this.state.weather}</span>
                        <span className='header-bottom-right-span'>{this.state.temperature}</span>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(Header)
