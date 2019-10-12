/**
 * 用户请求的所有接口
 */

 import ajax from './ajax'

 const BASE = ''


 //用户登陆
 export const reqLogin = ({username, password}) => ajax(BASE+'/login', {username, password}, 'POST')

