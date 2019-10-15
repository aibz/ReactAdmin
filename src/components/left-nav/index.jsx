import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon, } from 'antd'

import './index.less'
import logo from '../../assets/images/NBA.png'
import menuList from '../../config/menuConfig'
const { SubMenu } = Menu;
class LeftNav extends Component {

    getMenuListNodes = (menuList) => {
        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.getMenuListNodes(item.children)}
                    </SubMenu>

                )
            }
        })
    }

    getMenuListNodesReduce = (menuList) => {
        const path = this.props.location.pathname

        return menuList.reduce((pre, item) => {

            if (!item.children) {
                pre.push(
                    (<Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>)
                )
            } else {

                const citem = item.children.find(citem => citem.key === path)
                if(citem){
                    this.openKey = item.key
                }

                pre.push(
                    (<SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.getMenuListNodesReduce(item.children)}
                    </SubMenu>)
                )
            }

            return pre
        }, [])
    }
    
    componentWillMount(){
        this.menuNodes = this.getMenuListNodesReduce(menuList)
    }

    render() {

        const path = this.props.location.pathname

        const openKey = this.openKey

        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img src={logo} alt='logo' />
                    <h1>管理系统</h1>
                </Link>

                {/* <Menu
                    defaultSelectedKeys={['home']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="home">
                        <Link to='/home'>
                            <Icon type="home" />
                            <span>首页</span>
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>商品</span>
                            </span>
                        }
                    >
                        <Menu.Item key="category">
                            <Link to='/category'>
                                <Icon type="tag" />
                                <span>品类分类</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="product">
                            <Link to='/product'>
                                <Icon type="tag" />
                                <span>商品管理</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="user">
                        <Link to='/user'>
                            <Icon type="user" />
                            <span>用户管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="role">
                        <Link to='/role'>
                            <Icon type="safety" />
                            <span>角色管理</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="area-chart" />
                                <span>图形图表</span>
                            </span>
                        }
                    >
                        <Menu.Item key="bar">
                            <Link to='/charts/bar'>
                                <Icon type="bar-chart" />
                                <span>柱状图</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="line">
                            <Link to='/charts/line'>
                                <Icon type="line-chart" />
                                <span>折线图</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="pie">
                            <Link to='/charts/pie'>
                                <Icon type="pie-chart" />
                                <span>饼状图</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu> */
                }
                <Menu
                    selectedKeys={[path]}    
                    defaultOpenKeys={[openKey]}    
                    mode="inline"
                    theme="dark">
                    {this.menuNodes}
                </Menu>
            </div>
        )
    }
}

export default withRouter(LeftNav)
