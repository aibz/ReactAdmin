import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'

import './login.less'
import logo from './images/logo.png'

const Item = Form.Item;

class Login extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('发送ajax请求: ', values);
            } else {
                console.log('校验失败')
            }
        });

    }

    //用自定义的方式对数据进行验证
    validatPwd = (rule, value, callback) => {
        console.log('validatPwd()', rule, value);

        if (!value) {
            callback('密码必须输入')
        } else if (value.length < 6) {
            callback('密码至少为6位')
        } else if (value.length > 12) {
            callback('密码最多为12位')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('密码必须为数字字母下划线组成')
        } else {
            callback();
        }

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
                                // 用antd中自带的验证
                                getFieldDecorator('username', {
                                    rules: [{ required: true, whitespace: true, message: '用户名必须输入' },
                                    { min: 6, message: '用户名至少为6位' },
                                    { max: 12, message: '用户名最多为12位' },
                                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须为数字字母下划线组成' },
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名" />)
                            }
                        </Item>

                        <Item>
                            {
                                getFieldDecorator('password', {
                                    rules: [{ whitespace: true, message: '密码不能为空格' },
                                    { validator: this.validatPwd }]
                                })(
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