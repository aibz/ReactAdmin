/**
 * 用户请求的所有接口
 */

import ajax from './ajax'
import jsonp from 'jsonp'
import { message } from 'antd'

const BASE = ''


//用户登陆
export const reqLogin = ({ username, password }) => ajax(BASE + '/login', { username, password }, 'POST')

//获取百度天气预报
export const reqWeather = (city) => {

    return new Promise((resolve, reject) => {
        const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`

        jsonp(url, {}, (err, data) => {

            console.log('jsonp()', err, data)

            if (!err && data.status === 'success') {
                const { weather, dayPictureUrl, temperature } = data.results[0].weather_data[0]
                resolve({ weather, dayPictureUrl, temperature })
            } else {
                message.error('天气获取失败')
            }
        })
    })

}


