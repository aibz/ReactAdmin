import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'

import './login.less'
import logo from './images/logo.png'

const Item = Form.Item;

class Login extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const form = this.props.form
        const values = form.getFieldsValue();
        console.log('handleSubmit()', values);
    }


    render() {
        const form = this.props.form;
        const { getFieldDecorator } = form;
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登陆</h2>
                    <Form className="login-form" onSubmit={this.handleSubmit}>

                        <Item>
                            {
                                getFieldDecorator('username', {
                                    rules: [{ required: true, message: '用户名必须输入' },
                                    { min: 6, message: '用户名至少为6位' },
                                    { max: 12, message: '用户名最多为12位' },
                                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须为数字字母下划线组成'}
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名" />)
                            }
                        </Item>

                        <Item>
                            {
                                getFieldDecorator('password', {})(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码" />
                                )
                            }
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </Button>
                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}

const WrapLogin = Form.create()(Login)
export default WrapLogin;